// AUREN — Main Application
// State machine SPA: landing → topic → question → spread → ritual → reading → results
//                    Also: quickreading → reading → results
//                          yesno → yesno-result

const AUREN_APP = (() => {

  // ─── State ──────────────────────────────────────────────────────────────────
  let state = {
    view: 'landing',          // 'landing' | 'topic' | 'question' | 'spread' | 'ritual' | 'reading' | 'results' | 'daily' | 'yesno' | 'yesno-result'
    topic: null,              // 'general'|'love'|'career'|'money'|'relationships'|'growth'|'none'
    question: '',             // optional user question (sanitized on display)
    spreadId: null,           // 1|3|5|7|9
    quickReadingId: null,     // 'love'|'career'|'self'|null
    drawnCards: [],           // [{card, orientation, position, interpretation, revealed}]
    reading: null,            // {cards, synthesis}
    yesnoCard: null,          // {card, orientation, revealed}
    sessionId: 0,             // incremented per reading to prevent stale callbacks
    flipLocks: new Set(),     // card indices currently animating
    reducedMotion: false
  };

  const TOPICS = [
    { id: 'general',       label: 'General',       desc: 'An open window into what surrounds you now.' },
    { id: 'love',          label: 'Love',           desc: 'The heart and its entanglements.' },
    { id: 'career',        label: 'Career',         desc: 'Work, calling, and ambition.' },
    { id: 'money',         label: 'Money',          desc: 'Resources, abundance, and flow.' },
    { id: 'relationships', label: 'Relationships',  desc: 'The people in your life and your bonds.' },
    { id: 'growth',        label: 'Growth',         desc: 'Personal evolution and the path forward.' },
    { id: 'none',          label: 'Just the cards', desc: 'No filter. Pure intuition.' }
  ];

  const QUICK_READINGS = [
    {
      id: 'love',
      icon: '♡',
      label: 'Love Check-In',
      topic: 'love',
      cardCount: 3,
      positions: [
        { index: 0, name: 'Their Energy',       description: 'The energy surrounding them.' },
        { index: 1, name: 'Your Energy',         description: 'What you are bringing into this.' },
        { index: 2, name: 'Likely Direction',    description: 'Where this is heading.' }
      ]
    },
    {
      id: 'career',
      icon: '◈',
      label: 'Career Check-In',
      topic: 'career',
      cardCount: 3,
      positions: [
        { index: 0, name: 'Current Energy',  description: 'What you are carrying into work right now.' },
        { index: 1, name: 'Opportunity',     description: 'What is opening up for you.' },
        { index: 2, name: 'Advice',          description: 'What the cards suggest you do next.' }
      ]
    },
    {
      id: 'self',
      icon: '☽',
      label: 'Self Check-In',
      topic: 'growth',
      cardCount: 3,
      positions: [
        { index: 0, name: 'What You\'re Carrying', description: 'The weight you\'ve been holding.' },
        { index: 1, name: 'What You Need',         description: 'What would restore you right now.' },
        { index: 2, name: 'What\'s Emerging',      description: 'What is beginning to surface in you.' }
      ]
    }
  ];

  // ─── Initialise ─────────────────────────────────────────────────────────────
  function init() {
    state.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    applyTheme(loadTheme());
    AUREN_DECK.validateDeck();
    renderStarField();
    navigate('landing');
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    document.getElementById('topbar-home').addEventListener('click', () => {
      state.sessionId++;
      state.question = '';
      state.quickReadingId = null;
      navigate('landing');
    });
  }

  // ─── Theme ──────────────────────────────────────────────────────────────────
  function loadTheme() {
    try {
      const stored = localStorage.getItem('auren-theme');
      if (stored) return stored;
    } catch(e) {}
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'midnight' : 'moonlit';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = theme === 'midnight' ? '☾ Midnight ↔ ☼ Moonlit' : '☼ Moonlit ↔ ☾ Midnight';
    try { localStorage.setItem('auren-theme', theme); } catch(e) {}
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'midnight';
    applyTheme(current === 'midnight' ? 'moonlit' : 'midnight');
  }

  // ─── Star Field ─────────────────────────────────────────────────────────────
  function renderStarField() {
    const container = document.getElementById('starfield');
    if (!container) return;
    const count = 120;
    const stars = [];
    for (let i = 0; i < count; i++) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() < 0.8 ? 1 : 2;
      const opacity = 0.2 + Math.random() * 0.5;
      const dur = 3 + Math.random() * 5;
      const delay = Math.random() * 6;
      stars.push(`<div class="star" style="left:${x}%;top:${y}%;width:${size}px;height:${size}px;opacity:${opacity};animation-duration:${dur}s;animation-delay:${delay}s"></div>`);
    }
    container.innerHTML = stars.join('');
  }

  // ─── Navigation / View Engine ───────────────────────────────────────────────
  function navigate(viewName, opts) {
    state.view = viewName;
    const root = document.getElementById('app-root');
    if (!root) return;

    root.classList.add('view-transitioning');
    const render = () => {
      root.innerHTML = '';
      switch(viewName) {
        case 'landing':      renderLanding(root); break;
        case 'topic':        renderTopicSelect(root); break;
        case 'question':     renderQuestionInput(root); break;
        case 'spread':       renderSpreadSelect(root); break;
        case 'ritual':       renderRitual(root); break;
        case 'reading':      renderReading(root); break;
        case 'results':      renderResults(root); break;
        case 'daily':        renderDaily(root); break;
        case 'yesno':        renderYesNo(root); break;
        case 'yesno-result': renderYesNoResult(root); break;
        default:             renderLanding(root);
      }
      root.classList.remove('view-transitioning');
    };

    if (state.reducedMotion) {
      render();
    } else {
      setTimeout(render, 180);
    }
  }

  // ─── Landing ────────────────────────────────────────────────────────────────
  function renderLanding(root) {
    const quickCards = QUICK_READINGS.map(qr => `
      <button class="quick-reading-card" data-quick="${qr.id}" aria-label="${qr.label}">
        <span class="quick-reading-icon">${qr.icon}</span>
        <span class="quick-reading-label">${qr.label}</span>
      </button>
    `).join('');

    root.innerHTML = `
      <section class="view-landing" aria-label="Welcome to AUREN">
        <div class="landing-inner">
          <div class="landing-eyebrow">Tarot for the considered mind</div>
          <h1 class="landing-title">AUREN</h1>
          <p class="landing-tagline">READ BETWEEN THE SIGNS</p>
          <p class="landing-sub">Not every answer arrives loudly.</p>
          <div class="landing-cta">
            <button class="btn btn-primary" id="btn-begin" aria-label="Begin a tarot reading">
              Begin Reading
            </button>
            <button class="btn btn-ghost" id="btn-daily" aria-label="See today's daily tarot card">
              Daily Card
            </button>
            <button class="btn btn-ghost btn-yesno" id="btn-yesno" aria-label="Yes or No reading">
              Yes / No
            </button>
          </div>
          <p class="landing-breath">Take a breath. Hold your question in your mind.</p>

          <div class="quick-readings-section" aria-label="Quick readings">
            <p class="quick-readings-label">Quick Readings</p>
            <div class="quick-readings-grid">
              ${quickCards}
            </div>
          </div>
        </div>
      </section>
    `;
    document.getElementById('btn-begin').addEventListener('click', () => navigate('topic'));
    document.getElementById('btn-daily').addEventListener('click', () => navigate('daily'));
    document.getElementById('btn-yesno').addEventListener('click', () => navigate('yesno'));
    root.querySelectorAll('.quick-reading-card').forEach(btn => {
      btn.addEventListener('click', () => {
        const qr = QUICK_READINGS.find(q => q.id === btn.dataset.quick);
        if (!qr) return;
        state.quickReadingId = qr.id;
        state.topic = qr.topic;
        state.question = '';
        // Quick readings go straight to question → ritual → reading
        navigate('question');
      });
    });
  }

  // ─── Topic Select ───────────────────────────────────────────────────────────
  function renderTopicSelect(root) {
    const chips = TOPICS.map(t => `
      <button class="topic-chip" data-topic="${t.id}" aria-label="Select topic: ${t.label}">
        <span class="topic-label">${t.label}</span>
        <span class="topic-desc">${t.desc}</span>
      </button>
    `).join('');

    root.innerHTML = `
      <section class="view-topic" aria-label="Choose a topic">
        <div class="view-header">
          <button class="btn-back" id="btn-back-topic" aria-label="Go back to landing">← Back</button>
          <h2 class="view-title">What calls to you?</h2>
          <p class="view-sub">Your focus shapes the reading.</p>
        </div>
        <div class="topic-grid" role="list">
          ${chips}
        </div>
      </section>
    `;

    document.getElementById('btn-back-topic').addEventListener('click', () => navigate('landing'));
    root.querySelectorAll('.topic-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        state.topic = btn.dataset.topic;
        state.quickReadingId = null;
        navigate('question');
      });
    });
  }

  // ─── Question Input ─────────────────────────────────────────────────────────
  function renderQuestionInput(root) {
    const isQuick = !!state.quickReadingId;
    const qr = isQuick ? QUICK_READINGS.find(q => q.id === state.quickReadingId) : null;
    const backTarget = isQuick ? 'landing' : 'topic';

    root.innerHTML = `
      <section class="view-question" aria-label="Enter an optional question">
        <div class="view-header">
          <button class="btn-back" id="btn-back-question" aria-label="Go back">← Back</button>
          <h2 class="view-title">What would you like guidance on?</h2>
          <p class="view-sub">Optional — hold your question in mind as you choose your cards.</p>
        </div>
        <div class="question-form">
          <label for="reading-question" class="question-label sr-only">Your question (optional)</label>
          <textarea
            id="reading-question"
            class="question-input"
            placeholder="Should I take this new job?"
            maxlength="250"
            rows="3"
            aria-label="Enter an optional question for your reading"
            autocomplete="off"
            spellcheck="true"
          ></textarea>
          <p class="question-hint">Optional · up to 250 characters · not stored or sent anywhere</p>
        </div>
        <div class="question-actions">
          <button class="btn btn-primary" id="btn-question-continue">Continue</button>
        </div>
      </section>
    `;

    const textarea = root.querySelector('#reading-question');
    if (state.question) textarea.value = state.question;

    document.getElementById('btn-back-question').addEventListener('click', () => navigate(backTarget));
    document.getElementById('btn-question-continue').addEventListener('click', () => {
      const raw = textarea.value.trim().slice(0, 250);
      state.question = raw;
      if (isQuick) {
        // Quick reading: skip spread select, go straight to ritual
        beginQuickReading(qr);
      } else {
        navigate('spread');
      }
    });
  }

  // ─── Spread Select ──────────────────────────────────────────────────────────
  function renderSpreadSelect(root) {
    const spreads = AUREN_SPREADS.getAllSpreads();
    const cards = spreads.map(s => {
      const preview = Array.from({length: s.cardCount}, (_, i) =>
        `<div class="spread-preview-card" style="--i:${i};--n:${s.cardCount}" aria-hidden="true"></div>`
      ).join('');
      return `
        <button class="spread-option" data-spread="${s.id}" aria-label="Choose ${s.name}: ${s.cardCount} card spread">
          <div class="spread-preview" aria-hidden="true">${preview}</div>
          <div class="spread-info">
            <span class="spread-count">${s.cardCount} ${s.cardCount === 1 ? 'card' : 'cards'}</span>
            <span class="spread-name">${s.name}</span>
            <span class="spread-desc">${s.description}</span>
          </div>
        </button>
      `;
    }).join('');

    root.innerHTML = `
      <section class="view-spread" aria-label="Choose a spread">
        <div class="view-header">
          <button class="btn-back" id="btn-back-spread" aria-label="Go back">← Back</button>
          <h2 class="view-title">Choose your spread</h2>
          <p class="view-sub">How many cards do you want to draw?</p>
        </div>
        <div class="spread-grid">
          ${cards}
        </div>
      </section>
    `;

    document.getElementById('btn-back-spread').addEventListener('click', () => navigate('question'));
    root.querySelectorAll('.spread-option').forEach(btn => {
      btn.addEventListener('click', () => {
        state.spreadId = parseInt(btn.dataset.spread, 10);
        navigate('ritual');
      });
    });
  }

  // ─── Begin Quick Reading ─────────────────────────────────────────────────────
  function beginQuickReading(qr) {
    state.spreadId = qr.cardCount;
    navigate('ritual');
  }

  // ─── Ritual View ────────────────────────────────────────────────────────────
  function renderRitual(root) {
    const steps = [
      { step: 1, text: 'Take a breath.' },
      { step: 2, text: 'Hold your question in your mind.' },
      { step: 3, text: 'When you\'re ready, choose your cards.' }
    ];

    const stepsHtml = steps.map(s => `
      <div class="ritual-step ritual-step-${s.step}" aria-label="Step ${s.step}">
        <span class="ritual-step-num">${s.step}</span>
        <span class="ritual-step-text">${s.text}</span>
      </div>
    `).join('');

    root.innerHTML = `
      <section class="view-ritual" aria-label="Prepare for your reading">
        <div class="ritual-inner">
          <div class="ritual-symbol" aria-hidden="true">☽</div>
          <div class="ritual-steps">
            ${stepsHtml}
          </div>
          ${state.question ? `
            <div class="ritual-question">
              <span class="ritual-question-label">Your question</span>
              <span class="ritual-question-text">${escapeHtml(state.question)}</span>
            </div>
          ` : ''}
          <button class="btn btn-primary ritual-cta" id="btn-ritual-begin">
            Choose Your Cards
          </button>
        </div>
      </section>
    `;

    // Animate steps in sequence
    if (!state.reducedMotion) {
      const stepEls = root.querySelectorAll('.ritual-step');
      stepEls.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(12px)';
        setTimeout(() => {
          el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, 200 + i * 300);
      });
    }

    document.getElementById('btn-ritual-begin').addEventListener('click', () => {
      beginReading();
    });
  }

  // ─── Begin Reading ──────────────────────────────────────────────────────────
  function beginReading() {
    state.sessionId++;
    const qr = state.quickReadingId ? QUICK_READINGS.find(q => q.id === state.quickReadingId) : null;

    let spread, drawn;
    if (qr) {
      // Quick reading: use custom positions
      spread = {
        id: qr.cardCount,
        name: qr.label,
        cardCount: qr.cardCount,
        positions: qr.positions
      };
      drawn = AUREN_DECK.drawCards(qr.cardCount);
    } else {
      spread = AUREN_SPREADS.getSpread(state.spreadId);
      drawn = AUREN_DECK.drawCards(state.spreadId);
    }

    state.reading = AUREN_INTERPRET.buildReading(drawn, spread, state.topic);
    state.drawnCards = state.reading.cards.map(c => ({ ...c, revealed: false }));
    state.flipLocks = new Set();
    navigate('reading');
  }

  // ─── Reading View ───────────────────────────────────────────────────────────
  function renderReading(root) {
    const total = state.drawnCards.length;
    const allRevealed = state.drawnCards.every(c => c.revealed);
    const revealedCount = state.drawnCards.filter(c => c.revealed).length;

    const cards = state.drawnCards.map((dc, i) => {
      const isRevealed = dc.revealed;
      const posName = dc.position ? dc.position.name : 'The Message';
      return `
        <div class="reading-slot" data-index="${i}">
          <div class="card-wrap ${isRevealed ? 'revealed' : ''} ${dc.orientation === 'reversed' ? 'reversed' : ''}"
               tabindex="${isRevealed ? -1 : 0}"
               role="button"
               aria-label="${isRevealed ? dc.card.name + ', ' + dc.orientation : 'Face-down card, tap to reveal'}"
               data-card-index="${i}">
            <div class="card-inner">
              <div class="card-face card-back" aria-hidden="true">
                ${renderCardBack()}
              </div>
              <div class="card-face card-front" aria-hidden="${!isRevealed}">
                ${renderCardFront(dc.card, dc.orientation)}
              </div>
            </div>
          </div>
          <div class="reading-pos-name">${posName}</div>
          ${isRevealed ? `<div class="reading-card-name">${dc.card.name}</div>` : ''}
        </div>
      `;
    }).join('');

    const progressText = allRevealed
      ? 'Now, look at the pattern.'
      : revealedCount === 0
        ? 'Trust your first instinct.'
        : `Card ${revealedCount + 1} of ${total} — trust your instinct.`;

    const qrLabel = state.quickReadingId
      ? (QUICK_READINGS.find(q => q.id === state.quickReadingId) || {}).label
      : null;

    root.innerHTML = `
      <section class="view-reading" aria-label="Your reading">
        <div class="view-header">
          <button class="btn-back" id="btn-back-reading" aria-label="Start over">← Start Over</button>
          ${qrLabel ? `<p class="reading-quick-label">${qrLabel}</p>` : ''}
          <h2 class="view-title sr-only">Your Reading</h2>
          <p class="reading-progress" aria-live="polite" id="reading-progress">${progressText}</p>
        </div>
        <div class="reading-cards reading-count-${total}" role="list" id="reading-cards-container">
          ${cards}
        </div>
        ${allRevealed ? `
          <div class="reading-complete-bar">
            <button class="btn btn-primary" id="btn-see-results">See Your Reading</button>
          </div>
        ` : ''}
        <div aria-live="polite" aria-atomic="true" class="sr-only" id="card-announce"></div>
      </section>
    `;

    attachReadingEvents(root);
  }

  function attachReadingEvents(root) {
    const container = root.querySelector('#reading-cards-container');
    if (!container) return;

    container.querySelectorAll('[data-card-index]').forEach(el => {
      const idx = parseInt(el.dataset.cardIndex, 10);
      const handler = (e) => {
        if (e.type === 'keydown' && e.key !== 'Enter' && e.key !== ' ') return;
        e.preventDefault();
        flipCard(idx);
      };
      el.addEventListener('click', handler);
      el.addEventListener('keydown', handler);
    });

    const seeResultsBtn = root.querySelector('#btn-see-results');
    if (seeResultsBtn) seeResultsBtn.addEventListener('click', () => navigate('results'));

    const backBtn = root.querySelector('#btn-back-reading');
    if (backBtn) backBtn.addEventListener('click', () => {
      state.sessionId++;
      state.question = '';
      state.quickReadingId = null;
      navigate('landing');
    });
  }

  function flipCard(index) {
    const dc = state.drawnCards[index];
    if (!dc || dc.revealed) return;
    if (state.flipLocks.has(index)) return;
    // Prevent selecting more cards than allowed — not needed here since each card can only flip once
    // but guard against any index out of range
    if (index < 0 || index >= state.drawnCards.length) return;

    state.flipLocks.add(index);
    state.drawnCards[index].revealed = true;

    const sessionAtFlip = state.sessionId;
    const container = document.getElementById('reading-cards-container');
    if (!container) return;

    const slot = container.querySelector(`[data-card-index="${index}"]`);
    if (!slot) return;

    slot.setAttribute('aria-label', `${dc.card.name}, ${dc.orientation}`);
    slot.setAttribute('tabindex', '-1');

    if (!state.reducedMotion) {
      slot.classList.add('flipping');
    }

    const announce = document.getElementById('card-announce');
    if (announce) {
      announce.textContent = `${dc.card.name}, ${dc.orientation}. ${dc.position ? dc.position.name + '.' : ''}`;
    }

    const doReveal = () => {
      if (state.sessionId !== sessionAtFlip) return;
      const wrap = slot.closest('.card-wrap') || slot;
      wrap.classList.add('revealed');
      if (dc.orientation === 'reversed') wrap.classList.add('reversed');
      slot.classList.remove('flipping');
      state.flipLocks.delete(index);

      const readingSlot = slot.closest('.reading-slot');
      if (readingSlot && !readingSlot.querySelector('.reading-card-name')) {
        const nameEl = document.createElement('div');
        nameEl.className = 'reading-card-name';
        nameEl.textContent = dc.card.name;
        readingSlot.appendChild(nameEl);
      }

      const allRevealed = state.drawnCards.every(c => c.revealed);
      const progressEl = document.getElementById('reading-progress');
      const revealedCount = state.drawnCards.filter(c => c.revealed).length;

      if (progressEl) {
        progressEl.textContent = allRevealed
          ? 'Now, look at the pattern.'
          : `Card ${revealedCount + 1} of ${state.drawnCards.length} — trust your instinct.`;
      }

      if (allRevealed) {
        const readingRoot = document.querySelector('.view-reading');
        if (readingRoot && !readingRoot.querySelector('.reading-complete-bar')) {
          const bar = document.createElement('div');
          bar.className = 'reading-complete-bar';
          bar.innerHTML = `<button class="btn btn-primary" id="btn-see-results">See Your Reading</button>`;
          readingRoot.appendChild(bar);
          bar.querySelector('#btn-see-results').addEventListener('click', () => navigate('results'));
        }
      }
    };

    if (state.reducedMotion) {
      doReveal();
    } else {
      setTimeout(doReveal, 400);
    }
  }

  // ─── Results View ───────────────────────────────────────────────────────────
  function renderResults(root) {
    const total = state.drawnCards.length;
    const { synthesis } = state.reading;

    const qrLabel = state.quickReadingId
      ? (QUICK_READINGS.find(q => q.id === state.quickReadingId) || {}).label
      : null;

    const cardDetails = state.drawnCards.map((dc, i) => {
      const posName = dc.position ? dc.position.name : 'The Message';
      const posDesc = dc.position ? dc.position.description : '';
      const keywords = dc.card[dc.orientation === 'upright' ? 'uprightKeywords' : 'reversedKeywords'];
      return `
        <article class="result-card ${dc.orientation === 'reversed' ? 'reversed' : ''}" aria-label="${dc.card.name}">
          <div class="result-card-art">
            ${renderCardFront(dc.card, dc.orientation)}
          </div>
          <div class="result-card-body">
            <div class="result-pos-name">${posName}</div>
            ${posDesc ? `<div class="result-pos-desc">${posDesc}</div>` : ''}
            <h3 class="result-card-name">${dc.card.name}</h3>
            <div class="result-orientation ${dc.orientation}">${dc.orientation === 'upright' ? '↑ Upright' : '↓ Reversed'}</div>
            <div class="result-keywords">${keywords.join(' · ')}</div>
            <p class="result-interpretation">${dc.interpretation}</p>
          </div>
        </article>
      `;
    }).join('');

    const synthesisHtml = synthesis.map(line => `<p>${line}</p>`).join('');
    const glanceHtml = buildReadingAtAGlance(state.drawnCards, state.reading, state.topic);

    root.innerHTML = `
      <section class="view-results" aria-label="Reading results">
        <div class="view-header results-header">
          ${qrLabel ? `<p class="results-quick-badge">${qrLabel}</p>` : ''}
          <h2 class="view-title">Your Reading</h2>
          ${state.topic && state.topic !== 'none' && !qrLabel
            ? `<p class="view-sub">Focus: ${state.topic.charAt(0).toUpperCase() + state.topic.slice(1)}</p>`
            : ''}
          ${state.question
            ? `<blockquote class="results-question">
                 <span class="results-question-label">Your question</span>
                 <span class="results-question-text">${escapeHtml(state.question)}</span>
               </blockquote>`
            : ''}
        </div>

        <div class="results-cards results-count-${total}">
          ${cardDetails}
        </div>

        <div class="synthesis-block">
          <h3 class="synthesis-title">Overall Reading</h3>
          <div class="synthesis-body">
            ${synthesisHtml}
          </div>
        </div>

        <div class="glance-block" aria-label="Reading at a glance">
          <h3 class="glance-title">Your Reading at a Glance</h3>
          <div class="glance-body">
            ${glanceHtml}
          </div>
        </div>

        <div class="results-actions">
          <button class="btn btn-share-card" id="btn-share" aria-label="Share this reading">
            ✦ Share This Reading
          </button>
          <button class="btn btn-primary" id="btn-again" aria-label="Begin a new reading">
            Begin a new reading
          </button>
        </div>

        <div class="support-block" aria-label="Support AUREN">
          <p class="support-heading">Keep AUREN Free</p>
          <p class="support-body">Enjoyed your reading? If it gave you a moment to reflect, you can support AUREN and help keep the experience free.</p>
          <a href="https://ko-fi.com/aurentarot" class="btn btn-support" target="_blank" rel="noopener noreferrer" aria-label="Support AUREN on Ko-fi — opens in a new tab">
            ♡ Support AUREN
          </a>
        </div>

        <footer class="site-footer">
          <p class="disclaimer">Tarot readings are intended for reflection and entertainment only. They are not a substitute for professional medical, legal, financial, or mental-health advice.</p>
          <p class="footer-support-link"><a href="https://ko-fi.com/aurentarot" target="_blank" rel="noopener noreferrer" aria-label="Support AUREN on Ko-fi — opens in a new tab">Support AUREN</a></p>
        </footer>
      </section>
    `;

    root.querySelector('#btn-share').addEventListener('click', shareReading);
    root.querySelector('#btn-again').addEventListener('click', () => {
      state.question = '';
      state.quickReadingId = null;
      navigate('landing');
    });
  }

  // ─── Reading at a Glance ────────────────────────────────────────────────────
  function buildReadingAtAGlance(drawnCards, reading, topic) {
    const rows = [];

    // Dominant Energy: dominant suit, or Major Arcana if many present
    const majorCount = drawnCards.filter(dc => dc.card.arcana === 'major').length;
    const suitCounts = { wands: 0, cups: 0, swords: 0, pentacles: 0 };
    drawnCards.forEach(dc => { if (dc.card.suit) suitCounts[dc.card.suit]++; });
    const dominantSuit = Object.entries(suitCounts).sort((a, b) => b[1] - a[1]).find(([, v]) => v > 0);

    let dominantEnergy = '';
    if (majorCount >= Math.ceil(drawnCards.length / 2)) {
      dominantEnergy = 'Major forces at work';
    } else if (dominantSuit && dominantSuit[1] >= 2) {
      const suitMap = {
        wands: 'Wands — passion and initiative',
        cups: 'Cups — emotion and intuition',
        swords: 'Swords — thought and discernment',
        pentacles: 'Pentacles — patience and material ground'
      };
      dominantEnergy = suitMap[dominantSuit[0]] || dominantSuit[0];
    } else if (dominantSuit) {
      const suitCapMap = { wands: 'Wands', cups: 'Cups', swords: 'Swords', pentacles: 'Pentacles' };
      dominantEnergy = suitCapMap[dominantSuit[0]] || dominantSuit[0];
    } else {
      dominantEnergy = 'Balanced across all suits';
    }
    rows.push({ label: 'Dominant Energy', value: dominantEnergy });

    // Main Theme: from first card's upright keywords + position context
    const allKeywords = drawnCards.flatMap(dc => dc.card.uprightKeywords);
    const kwFreq = {};
    allKeywords.forEach(kw => { kwFreq[kw] = (kwFreq[kw] || 0) + 1; });
    const topKws = Object.entries(kwFreq).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([kw]) => kw);

    const themeMap = {
      beginnings: 'Starting something new', adventure: 'Stepping into the unknown',
      willpower: 'Channelling focused will', manifestation: 'Making something real',
      intuition: 'Trusting what cannot be seen', mystery: 'Sitting with not-knowing',
      abundance: 'Tending what already grows', creativity: 'Making and expressing',
      authority: 'Taking clear leadership', structure: 'Building a reliable foundation',
      tradition: 'Honouring what has come before', choice: 'Standing at a crossroads',
      movement: 'Something in motion', strength: 'Inner resources being tested',
      solitude: 'Turning inward', 'inner knowing': 'Listening to what you already sense',
      transformation: 'Passing through a threshold', balance: 'Finding equilibrium',
      illusion: 'Seeing through distortions', hope: 'Keeping the light in view',
      clarity: 'Something becoming clear', success: 'A milestone within reach',
      completion: 'Bringing a cycle to its end',
      passion: 'A fire worth attending to', ambition: 'Moving toward something that matters',
      emotion: 'Feeling what is there to feel', relationships: 'What binds you to others',
      conflict: 'Tension needing resolution', truth: 'Seeking what is real',
      patience: 'Steady effort over time', resources: 'Working with what you have',
      growth: 'Becoming something new', love: 'Openness to connection',
      freedom: 'Releasing what confines you', communication: 'Saying what needs to be said',
      renewal: 'A fresh beginning from within'
    };

    let mainTheme = '';
    for (const kw of topKws) {
      if (themeMap[kw]) { mainTheme = themeMap[kw]; break; }
    }
    if (!mainTheme) mainTheme = topKws.length > 0 ? topKws.slice(0, 2).join(' and ') : 'Reflection';
    rows.push({ label: 'Main Theme', value: mainTheme });

    // Challenge: look for reversed cards, or cards with 'challenge' keywords
    const reversedCards = drawnCards.filter(dc => dc.orientation === 'reversed');
    let challenge = '';
    if (reversedCards.length > 0) {
      const rc = reversedCards[0];
      const rkws = rc.card.reversedKeywords;
      const challengeKwMap = {
        recklessness: 'Acting before thinking', manipulation: 'Hidden agendas or misplaced trust',
        confusion: 'Uncertainty clouding the path', dependence: 'Reliance that limits growth',
        stagnation: 'Forward movement being blocked', isolation: 'Withdrawing too far inward',
        impulsiveness: 'Rushing without grounding', stubbornness: 'Resistance to necessary change',
        'creative block': 'A wellspring waiting to be uncorked', procrastination: 'Delaying what needs to begin',
        'untapped potential': 'Power being held in reserve', 'fear of change': 'Clinging to what is familiar',
        naivety: 'Overlooking what needs careful attention', secrets: 'What remains unspoken',
        repression: 'Feelings being pushed out of view', chaos: 'Disorder seeking resolution',
        deception: 'What may not be as it appears', indulgence: 'Excess pulling away from centre',
        delay: 'Timing that resists being forced'
      };
      for (const kw of rkws) {
        if (challengeKwMap[kw]) { challenge = challengeKwMap[kw]; break; }
      }
      if (!challenge) challenge = `Working with the energy of ${rc.card.name}`;
    } else {
      // No reversed: find challenge position
      const challengeCard = drawnCards.find(dc => dc.position && dc.position.name === 'Challenge');
      if (challengeCard) {
        challenge = 'See the Challenge card above for what the reading identifies as your test.';
      } else {
        challenge = 'The reading points to no single dominant challenge — movement appears relatively clear.';
      }
    }
    rows.push({ label: 'Challenge', value: challenge });

    // Guidance: from Advice card if it exists, else last card
    const adviceCard = drawnCards.find(dc => dc.position && (dc.position.name === 'Advice' || dc.position.name === 'The Message'))
      || drawnCards[drawnCards.length - 1];
    let guidance = '';
    if (adviceCard) {
      const { card, orientation } = adviceCard;
      const topicKey = (topic && topic !== 'none') ? topic : 'general';
      const interp = card[orientation][topicKey] || card[orientation]['general'];
      // Extract just the first sentence for brevity
      const firstSentence = interp.split(/\.\s/)[0];
      guidance = firstSentence.charAt(0).toUpperCase() + firstSentence.slice(1);
      if (!guidance.endsWith('.')) guidance += '.';
    }
    if (!guidance) guidance = 'Move with what you know, and stay open to what you don\'t.';
    rows.push({ label: 'Guidance', value: guidance });

    // Likely Direction: from 'Likely Direction' or 'Future' position card, else synthesis hint
    const directionCard = drawnCards.find(dc => dc.position && (
      dc.position.name === 'Likely Direction' ||
      dc.position.name === 'Future' ||
      dc.position.name === 'The Emerging Future'
    ));
    let direction = '';
    if (directionCard) {
      const { card, orientation } = directionCard;
      const topicKey = (topic && topic !== 'none') ? topic : 'general';
      const interp = card[orientation][topicKey] || card[orientation]['general'];
      const firstSentence = interp.split(/\.\s/)[0];
      direction = firstSentence.charAt(0).toUpperCase() + firstSentence.slice(1);
      if (!direction.endsWith('.')) direction += '.';
    } else {
      const lastCard = drawnCards[drawnCards.length - 1];
      const isUpright = lastCard.orientation === 'upright';
      const kw = lastCard.card[isUpright ? 'uprightKeywords' : 'reversedKeywords'][0];
      direction = `A direction shaped by ${kw}.`;
    }
    rows.push({ label: 'Likely Direction', value: direction });

    return rows.map(row => `
      <div class="glance-row">
        <span class="glance-row-label">${row.label}</span>
        <span class="glance-row-value">${row.value}</span>
      </div>
    `).join('');
  }

  // ─── Daily Card ─────────────────────────────────────────────────────────────
  function renderDaily(root) {
    const dateStr = AUREN_DECK.todayString();
    const { card, orientation } = AUREN_DECK.getDailyCard(dateStr);
    const keywords = card[orientation === 'upright' ? 'uprightKeywords' : 'reversedKeywords'];
    const interp = card[orientation]['general'];

    const [y, m, d] = dateStr.split('-');
    const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const displayDate = `${monthNames[parseInt(m,10)-1]} ${parseInt(d,10)}, ${y}`;

    root.innerHTML = `
      <section class="view-daily" aria-label="Daily tarot card">
        <div class="view-header">
          <button class="btn-back" id="btn-back-daily" aria-label="Go back">← Back</button>
          <h2 class="view-title">Daily Card</h2>
          <p class="view-sub">${displayDate}</p>
        </div>
        <div class="daily-inner">
          <div class="daily-card-art ${orientation === 'reversed' ? 'reversed' : ''}">
            ${renderCardFront(card, orientation)}
          </div>
          <div class="daily-card-body">
            <h3 class="daily-card-name">${card.name}</h3>
            <div class="daily-orientation ${orientation}">${orientation === 'upright' ? '↑ Upright' : '↓ Reversed'}</div>
            <div class="daily-keywords">${keywords.join(' · ')}</div>
            <p class="daily-interpretation">${interp}</p>
            <p class="daily-return">Come back tomorrow for a new card.</p>
          </div>
        </div>
        <div class="daily-actions">
          <button class="btn btn-primary" id="btn-full-reading" aria-label="Begin a full reading">
            Begin a Full Reading
          </button>
        </div>

        <div class="support-block" aria-label="Support AUREN">
          <p class="support-heading">Keep AUREN Free</p>
          <p class="support-body">Enjoyed your card? If it gave you a moment to reflect, you can support AUREN and help keep the experience free.</p>
          <a href="https://ko-fi.com/aurentarot" class="btn btn-support" target="_blank" rel="noopener noreferrer" aria-label="Support AUREN on Ko-fi — opens in a new tab">
            ♡ Support AUREN
          </a>
        </div>

        <footer class="site-footer">
          <p class="disclaimer">Tarot readings are intended for reflection and entertainment only. They are not a substitute for professional medical, legal, financial, or mental-health advice.</p>
          <p class="footer-support-link"><a href="https://ko-fi.com/aurentarot" target="_blank" rel="noopener noreferrer" aria-label="Support AUREN on Ko-fi — opens in a new tab">Support AUREN</a></p>
        </footer>
      </section>
    `;

    root.querySelector('#btn-back-daily').addEventListener('click', () => navigate('landing'));
    root.querySelector('#btn-full-reading').addEventListener('click', () => navigate('topic'));
  }

  // ─── Yes / No Reading ───────────────────────────────────────────────────────
  function renderYesNo(root) {
    root.innerHTML = `
      <section class="view-yesno" aria-label="Yes or No reading">
        <div class="view-header">
          <button class="btn-back" id="btn-back-yesno" aria-label="Go back">← Back</button>
          <h2 class="view-title">Yes or No?</h2>
          <p class="view-sub">Hold your question in your mind.</p>
        </div>
        <div class="yesno-inner">
          <div class="yesno-prompt" aria-hidden="true">☽ · ✦ · ☽</div>
          <button class="btn btn-primary yesno-pull" id="btn-yesno-pull" aria-label="Pull one card">
            Pull One Card
          </button>
        </div>
      </section>
    `;

    root.querySelector('#btn-back-yesno').addEventListener('click', () => navigate('landing'));
    root.querySelector('#btn-yesno-pull').addEventListener('click', () => {
      const drawn = AUREN_DECK.drawCards(1);
      state.yesnoCard = { ...drawn[0], revealed: false };
      navigate('yesno-result');
    });
  }

  function renderYesNoResult(root) {
    if (!state.yesnoCard) { navigate('yesno'); return; }
    const { card, orientation } = state.yesnoCard;
    const verdict = getYesNoVerdict(card, orientation);

    root.innerHTML = `
      <section class="view-yesno-result" aria-label="Yes or No result">
        <div class="view-header">
          <button class="btn-back" id="btn-back-ynresult" aria-label="Go back">← Back</button>
          <h2 class="view-title">Your Answer</h2>
        </div>
        <div class="yesno-result-inner">
          <div class="yesno-card-art ${orientation === 'reversed' ? 'reversed' : ''}">
            ${renderCardFront(card, orientation)}
          </div>
          <div class="yesno-result-body">
            <h3 class="yesno-card-name">${card.name}</h3>
            <div class="yesno-orientation ${orientation}">${orientation === 'upright' ? '↑ Upright' : '↓ Reversed'}</div>
            <div class="yesno-verdict yesno-verdict-${verdict.type}" aria-live="polite">
              ${verdict.label}
            </div>
            <p class="yesno-explanation">${verdict.explanation}</p>
            <p class="yesno-caveat">Tarot reflects patterns, not certainties. Use this as one perspective among many.</p>
          </div>
        </div>
        <div class="yesno-actions">
          <button class="btn btn-ghost" id="btn-yesno-again" aria-label="Ask another question">
            Ask Again
          </button>
          <button class="btn btn-primary" id="btn-yesno-full" aria-label="Begin a full reading">
            Full Reading
          </button>
        </div>

        <div class="support-block" aria-label="Support AUREN">
          <p class="support-heading">Keep AUREN Free</p>
          <p class="support-body">Enjoyed your card? If it gave you a moment to reflect, you can support AUREN and help keep the experience free.</p>
          <a href="https://ko-fi.com/aurentarot" class="btn btn-support" target="_blank" rel="noopener noreferrer" aria-label="Support AUREN on Ko-fi — opens in a new tab">
            ♡ Support AUREN
          </a>
        </div>

        <footer class="site-footer">
          <p class="disclaimer">Tarot readings are intended for reflection and entertainment only. They are not a substitute for professional medical, legal, financial, or mental-health advice.</p>
          <p class="footer-support-link"><a href="https://ko-fi.com/aurentarot" target="_blank" rel="noopener noreferrer" aria-label="Support AUREN on Ko-fi — opens in a new tab">Support AUREN</a></p>
        </footer>
      </section>
    `;

    root.querySelector('#btn-back-ynresult').addEventListener('click', () => navigate('yesno'));
    root.querySelector('#btn-yesno-again').addEventListener('click', () => navigate('yesno'));
    root.querySelector('#btn-yesno-full').addEventListener('click', () => navigate('topic'));
  }

  function getYesNoVerdict(card, orientation) {
    // Assign yes/no lean per card archetype and orientation
    // Major Arcana yes/no leanings
    const majorYes = new Set([0,1,2,3,4,6,7,8,10,11,14,17,19,21]);
    const majorNo  = new Set([5,9,12,13,15,16,18,20]);

    // Minor Arcana: aces and high upright = yes lean; reversed or challenging = no lean
    let baseYes = false;
    let strong = false;

    if (card.arcana === 'major') {
      baseYes = majorYes.has(card.number);
      strong = (card.number === 19 || card.number === 21 || card.number === 1);
    } else {
      // Minor: aces, 6, 9, 10 lean yes; 3, 5, 7, 8, 10-swords lean no
      const yesNums = new Set([1, 6, 9, 10]);
      const noNums  = new Set([5, 7, 8]);
      if (yesNums.has(card.number)) {
        baseYes = true;
        strong = card.number === 1;
      } else if (noNums.has(card.number)) {
        baseYes = false;
      } else {
        baseYes = true; // default lean yes for middle numbers
      }
      // Swords are generally more challenging
      if (card.suit === 'swords') {
        baseYes = card.number <= 3;
        if (card.number === 1) strong = true;
      }
    }

    // Reversed flips or softens the lean
    const isReversed = orientation === 'reversed';
    let type, label, explanation;

    if (strong && !isReversed) {
      type = 'yes';
      label = 'Yes';
      const { card: c, orientation: o } = { card, orientation };
      const kw = card.uprightKeywords.slice(0, 2).join(' and ');
      explanation = `${card.name} upright carries clear forward energy — ${kw}. This leans toward yes with some conviction.`;
    } else if (baseYes && !isReversed) {
      type = 'yes';
      label = 'Leans Yes';
      const kw = card.uprightKeywords[0];
      explanation = `${card.name} brings the energy of ${kw}. The current is moving in a favourable direction, though not without nuance.`;
    } else if (baseYes && isReversed) {
      type = 'notyet';
      label = 'Not Yet';
      const kw = card.reversedKeywords[0];
      explanation = `${card.name} reversed suggests ${kw} — the timing may not be quite right, or something needs to shift before a clear yes can emerge.`;
    } else if (!baseYes && !isReversed) {
      type = 'no';
      label = 'Leans No';
      const kw = card.uprightKeywords[0];
      explanation = `${card.name} upright carries the energy of ${kw}, which here suggests caution or hesitation. This reading leans no, though it is not absolute.`;
    } else {
      type = 'no';
      label = 'No, or Not This Way';
      const kw = card.reversedKeywords[0];
      explanation = `${card.name} reversed points to ${kw}. The conditions may not support a yes right now, or the approach itself may need reconsidering.`;
    }

    return { type, label, explanation };
  }

  // ─── Card Rendering ─────────────────────────────────────────────────────────

  function renderCardBack() {
    return `
      <div class="card-back-inner">
        <svg viewBox="0 0 80 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="card-back-svg">
          <rect x="2.5" y="2.5" width="75" height="115" rx="4" ry="4" class="cb-bg-fill"/>
          <rect x="2.5" y="2.5" width="75" height="115" rx="4" ry="4" class="cb-border"/>
          <rect x="6" y="6" width="68" height="108" rx="3" ry="3" class="cb-inner-border"/>
          <circle cx="40" cy="60" r="22" class="cb-circle" fill="none"/>
          <circle cx="40" cy="60" r="14" class="cb-circle" fill="none"/>
          <text x="40" y="66" text-anchor="middle" class="cb-moon">☽</text>
          <circle cx="60" cy="20" r="2" class="cb-star-dot"/>
          <circle cx="55" cy="28" r="1.2" class="cb-star-dot"/>
          <circle cx="65" cy="28" r="1.2" class="cb-star-dot"/>
          <circle cx="20" cy="100" r="2" class="cb-star-dot"/>
          <circle cx="25" cy="92" r="1.2" class="cb-star-dot"/>
          <circle cx="15" cy="92" r="1.2" class="cb-star-dot"/>
        </svg>
      </div>
    `;
  }

  function renderCardFront(card, orientation) {
    const isReversed = orientation === 'reversed';
    const imgSrc = `assets/cards/${card.id}.jpg`;
    return `
      <div class="card-front-inner ${isReversed ? 'card-reversed' : ''}">
        <div class="card-img-wrap">
          <img
            src="${imgSrc}"
            alt="${card.name}${isReversed ? ' (reversed)' : ''}"
            class="card-photo"
            loading="lazy"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
          />
          <div class="card-svg-fallback" style="display:none" aria-hidden="true">
            <svg viewBox="0 0 80 120" xmlns="http://www.w3.org/2000/svg" class="card-front-svg">
              <rect x="2.5" y="2.5" width="75" height="115" rx="4" ry="4" class="cf-base-fill"/>
              <rect x="2.5" y="2.5" width="75" height="115" rx="4" ry="4" class="cf-border"/>
              <rect x="5" y="5" width="70" height="110" rx="3" ry="3" class="cf-bg"/>
              <text x="9" y="17" class="cf-number">${card.arcana === 'major' ? card.number : ''}</text>
              <text x="72" y="17" text-anchor="end" class="cf-suit-symbol">${getSuitSymbol(card)}</text>
              <g transform="translate(40,60)">${renderCardIllustration(card)}</g>
              <text x="40" y="110" text-anchor="middle" class="cf-name">${card.name}</text>
            </svg>
          </div>
        </div>
      </div>
    `;
  }

  function getSuitSymbol(card) {
    if (card.arcana === 'major') return '';
    const map = { wands: '⁂', cups: '◡', swords: '△', pentacles: '⬟' };
    return map[card.suit] || '';
  }

  function renderCardIllustration(card) {
    if (card.arcana === 'major') {
      return renderMajorIllustration(card.number);
    }
    switch(card.suit) {
      case 'wands':     return renderWandsIllustration(card.number);
      case 'cups':      return renderCupsIllustration(card.number);
      case 'swords':    return renderSwordsIllustration(card.number);
      case 'pentacles': return renderPentaclesIllustration(card.number);
      default:          return `<text text-anchor="middle" dy="5" class="cf-symbol">✦</text>`;
    }
  }

  function renderMajorIllustration(num) {
    const illustrations = {
      0:  `<circle r="12" class="cf-shape" fill="none" stroke-dasharray="3,2"/><line x1="-6" y1="-12" x2="6" y2="-8" class="cf-shape"/>`,
      1:  `<rect x="-10" y="-10" width="20" height="20" class="cf-shape" fill="none"/><line x1="0" y1="-18" x2="0" y2="18" class="cf-shape"/><line x1="-18" y1="0" x2="18" y2="0" class="cf-shape"/>`,
      2:  `<circle r="14" class="cf-shape" fill="none"/><line x1="0" y1="-14" x2="0" y2="14" class="cf-shape" stroke-dasharray="4,2"/>`,
      3:  `<circle r="12" class="cf-shape-accent"/><circle r="6" class="cf-shape" fill="none"/><circle r="2" class="cf-shape"/>`,
      4:  `<rect x="-12" y="-12" width="24" height="24" class="cf-shape" fill="none"/><rect x="-6" y="-6" width="12" height="12" class="cf-shape"/>`,
      5:  `<line x1="0" y1="-16" x2="0" y2="16" class="cf-shape"/><line x1="-10" y1="-8" x2="10" y2="-8" class="cf-shape"/><line x1="-10" y1="4" x2="10" y2="4" class="cf-shape"/>`,
      6:  `<circle cx="-7" cy="0" r="6" class="cf-shape" fill="none"/><circle cx="7" cy="0" r="6" class="cf-shape" fill="none"/>`,
      7:  `<polygon points="0,-16 14,8 -14,8" class="cf-shape" fill="none"/><circle r="6" class="cf-shape"/>`,
      8:  `<path d="M-12,-4 C-12,-14 12,-14 12,-4 C12,4 -12,4 -12,-4 Z" class="cf-shape" fill="none"/><text text-anchor="middle" dy="5" class="cf-symbol">∞</text>`,
      9:  `<circle r="14" class="cf-shape" fill="none" stroke-dasharray="2,4"/><circle r="4" class="cf-shape-accent"/>`,
      10: `<circle r="14" class="cf-shape" fill="none"/><circle r="8" class="cf-shape" fill="none"/><line x1="-14" y1="0" x2="14" y2="0" class="cf-shape"/><line x1="0" y1="-14" x2="0" y2="14" class="cf-shape"/>`,
      11: `<line x1="-12" y1="-12" x2="12" y2="12" class="cf-shape"/><line x1="-12" y1="12" x2="12" y2="-12" class="cf-shape"/><circle r="5" class="cf-shape" fill="none"/>`,
      12: `<line x1="0" y1="-14" x2="0" y2="6" class="cf-shape"/><circle cx="0" cy="-14" r="4" class="cf-shape-accent"/><line x1="-8" y1="6" x2="8" y2="6" class="cf-shape"/>`,
      13: `<rect x="-12" y="-12" width="24" height="24" class="cf-shape" fill="none" transform="rotate(45)"/><line x1="-14" y1="0" x2="14" y2="0" class="cf-shape"/>`,
      14: `<circle r="14" class="cf-shape" fill="none" stroke-dasharray="6,2"/><line x1="-12" y1="0" x2="-4" y2="0" class="cf-shape"/><line x1="4" y1="0" x2="12" y2="0" class="cf-shape"/>`,
      15: `<polygon points="0,-16 14,8 -14,8" class="cf-shape" fill="none"/><polygon points="0,-10 8,4 -8,4" class="cf-shape"/>`,
      16: `<rect x="-10" y="-16" width="20" height="28" class="cf-shape" fill="none"/><line x1="-14" y1="-6" x2="14" y2="-6" class="cf-shape"/><line x1="0" y1="-16" x2="4" y2="-22" class="cf-shape"/>`,
      17: `<polygon points="0,-16 3,-4 14,-4 5,3 8,15 0,8 -8,15 -5,3 -14,-4 -3,-4" class="cf-shape" fill="none"/>`,
      18: `<path d="M-10,10 Q0,-20 10,10" class="cf-shape" fill="none"/><circle r="8" cy="-8" class="cf-shape" fill="none"/>`,
      19: `<circle r="14" class="cf-shape-accent"/><circle r="8" class="cf-bg-shape"/>`,
      20: `<polygon points="0,-16 10,0 0,16 -10,0" class="cf-shape"/><circle r="4" class="cf-bg-shape"/>`,
      21: `<ellipse rx="14" ry="18" class="cf-shape" fill="none"/><ellipse rx="6" ry="10" class="cf-shape-accent"/>`,
    };
    return illustrations[num] || `<circle r="12" class="cf-shape" fill="none"/>`;
  }

  function renderWandsIllustration(num) {
    const n = Math.min(num, 10);
    if (n === 1) {
      return `<line x1="0" y1="-18" x2="0" y2="18" class="cf-shape-accent" stroke-width="3"/>
              <path d="M0,-18 Q4,-12 0,-8 Q-4,-12 0,-18 Z" class="cf-shape-accent"/>`;
    }
    const staffs = [];
    const spread = Math.min(n * 4, 20);
    for (let i = 0; i < n; i++) {
      const x = n === 1 ? 0 : (i / (n-1) - 0.5) * spread;
      staffs.push(`<line x1="${x}" y1="-14" x2="${x}" y2="14" class="cf-shape-accent"/>`);
    }
    return staffs.join('');
  }

  function renderCupsIllustration(num) {
    const n = Math.min(num, 10);
    if (n === 1) {
      return `<path d="M-10,0 Q-10,14 0,14 Q10,14 10,0 L8,-10 L-8,-10 Z" class="cf-shape" fill="none"/>
              <line x1="-6" y1="-10" x2="6" y2="-10" class="cf-shape"/>`;
    }
    const cups = [];
    const cols = n <= 3 ? n : Math.ceil(n / 2);
    const rows = Math.ceil(n / cols);
    let drawn = 0;
    for (let r = 0; r < rows && drawn < n; r++) {
      const rowCols = Math.min(cols, n - r * cols);
      for (let c = 0; c < rowCols; c++) {
        const x = (c - (rowCols-1)/2) * 14;
        const y = (r - (rows-1)/2) * 16;
        cups.push(`<path d="M${x-5},${y-4} Q${x-5},${y+4} ${x},${y+4} Q${x+5},${y+4} ${x+5},${y-4} L${x+4},${y-8} L${x-4},${y-8} Z" class="cf-shape" fill="none"/>`);
        drawn++;
      }
    }
    return cups.join('');
  }

  function renderSwordsIllustration(num) {
    const n = Math.min(num, 10);
    if (n === 1) {
      return `<line x1="0" y1="-18" x2="0" y2="18" class="cf-shape" stroke-width="2"/>
              <polygon points="0,-18 3,-10 -3,-10" class="cf-shape"/>
              <line x1="-8" y1="4" x2="8" y2="4" class="cf-shape"/>`;
    }
    const swords = [];
    for (let i = 0; i < n; i++) {
      const angle = n === 1 ? 0 : ((i / (n-1)) - 0.5) * 60;
      const rad = angle * Math.PI / 180;
      swords.push(`<line x1="${Math.sin(rad)*14}" y1="${-Math.cos(rad)*14}" x2="${-Math.sin(rad)*14}" y2="${Math.cos(rad)*14}" class="cf-shape"/>`);
    }
    return swords.join('');
  }

  function renderPentaclesIllustration(num) {
    const n = Math.min(num, 10);
    const pentacle = (cx, cy, r) =>
      `<polygon points="${Array.from({length:5},(_,i)=>{
        const a = (i*72-90)*Math.PI/180;
        return `${cx+r*Math.cos(a)},${cy+r*Math.sin(a)}`;
      }).join(' ')}" class="cf-shape" fill="none"/>`;

    if (n === 1) {
      return pentacle(0, 0, 14) + `<circle cx="0" cy="0" r="14" class="cf-circle-faint" fill="none"/>`;
    }
    const pts = [];
    const cols = n <= 3 ? n : Math.ceil(n / 2);
    const rows = Math.ceil(n / cols);
    let drawn = 0;
    for (let r = 0; r < rows && drawn < n; r++) {
      const rowCols = Math.min(cols, n - r * cols);
      for (let c = 0; c < rowCols; c++) {
        const x = (c - (rowCols-1)/2) * 14;
        const y = (r - (rows-1)/2) * 14;
        pts.push(pentacle(x, y, 5));
        drawn++;
      }
    }
    return pts.join('');
  }

  // ─── Sanitize ──────────────────────────────────────────────────────────────
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // ─── Share ──────────────────────────────────────────────────────────────────
  function shareReading() {
    generateShareCard().then(dataUrl => {
      showShareModal(dataUrl);
    }).catch(() => {
      showShareModalText();
    });
  }

  function generateShareCard() {
    return new Promise((resolve, reject) => {
      const isDark = (document.documentElement.getAttribute('data-theme') || 'midnight') === 'midnight';
      const W = 1080, H = 1080;
      const canvas = document.createElement('canvas');
      canvas.width = W;
      canvas.height = H;
      const ctx = canvas.getContext('2d');
      if (!ctx) { reject(); return; }

      const BG      = isDark ? '#0B0A0F' : '#F5F0E7';
      const BG2     = isDark ? '#1A1128' : '#EDE5D8';
      const GOLD    = isDark ? '#C7A76C' : '#A8874F';
      const GOLD2   = isDark ? '#8A6E3E' : '#7A5E32';
      const TEXT    = isDark ? '#EEE8DA' : '#242027';
      const TEXT2   = isDark ? '#7186A8' : '#815B68';
      const BORDER  = isDark ? '#3A2444' : '#C0B0A2';

      ctx.fillStyle = BG;
      ctx.fillRect(0, 0, W, H);

      ctx.strokeStyle = BORDER;
      ctx.lineWidth = 2;
      roundRect(ctx, 32, 32, W - 64, H - 64, 16);
      ctx.stroke();

      ctx.strokeStyle = GOLD2;
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.4;
      roundRect(ctx, 44, 44, W - 88, H - 88, 12);
      ctx.stroke();
      ctx.globalAlpha = 1;

      ctx.fillStyle = GOLD;
      ctx.font = 'bold 28px Georgia, serif';
      ctx.textAlign = 'center';
      ctx.fillText('✦  A U R E N', W / 2, 120);

      ctx.fillStyle = TEXT2;
      ctx.font = '14px system-ui, sans-serif';
      ctx.fillText('YOUR READING', W / 2, 150);

      ctx.strokeStyle = GOLD2;
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.5;
      ctx.beginPath(); ctx.moveTo(120, 172); ctx.lineTo(W - 120, 172); ctx.stroke();
      ctx.globalAlpha = 1;

      const cards = state.drawnCards;
      const maxCards = Math.min(cards.length, 5);
      const CARD_W = maxCards <= 3 ? 160 : 130;
      const CARD_H = Math.round(CARD_W * 1.74);
      const gap = maxCards <= 3 ? 24 : 16;
      const totalCardsW = maxCards * CARD_W + (maxCards - 1) * gap;
      const cardStartX = (W - totalCardsW) / 2;
      const cardY = 200;

      const loadPromises = cards.slice(0, maxCards).map((dc, i) => {
        return new Promise(res => {
          const img = new Image();
          img.onload = () => res({ img, dc, i });
          img.onerror = () => res({ img: null, dc, i });
          img.src = `assets/cards/${dc.card.id}.jpg`;
        });
      });

      Promise.all(loadPromises).then(results => {
        results.forEach(({ img, dc, i }) => {
          const x = cardStartX + i * (CARD_W + gap);
          const y = cardY;

          ctx.shadowColor = isDark ? 'rgba(0,0,0,0.6)' : 'rgba(60,40,50,0.2)';
          ctx.shadowBlur = 20;
          ctx.shadowOffsetY = 6;

          ctx.fillStyle = BG2;
          roundRect(ctx, x, y, CARD_W, CARD_H, 8);
          ctx.fill();
          ctx.shadowColor = 'transparent'; ctx.shadowBlur = 0; ctx.shadowOffsetY = 0;

          ctx.strokeStyle = GOLD2;
          ctx.lineWidth = 1.5;
          roundRect(ctx, x, y, CARD_W, CARD_H, 8);
          ctx.stroke();

          if (img) {
            ctx.save();
            roundRect(ctx, x, y, CARD_W, CARD_H, 8);
            ctx.clip();
            if (dc.orientation === 'reversed') {
              ctx.translate(x + CARD_W / 2, y + CARD_H / 2);
              ctx.rotate(Math.PI);
              ctx.drawImage(img, -CARD_W / 2, -CARD_H / 2, CARD_W, CARD_H);
            } else {
              ctx.drawImage(img, x, y, CARD_W, CARD_H);
            }
            ctx.restore();
          }

          if (dc.position) {
            ctx.fillStyle = TEXT2;
            ctx.font = '11px system-ui, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(dc.position.name.toUpperCase(), x + CARD_W / 2, cardY - 10);
          }

          // Card name below
          ctx.fillStyle = TEXT;
          ctx.font = `${maxCards <= 3 ? 14 : 12}px Georgia, serif`;
          ctx.textAlign = 'center';
          const nameText = dc.card.name + (dc.orientation === 'reversed' ? ' ↓' : '');
          ctx.fillText(nameText, x + CARD_W / 2, y + CARD_H + 22);
        });

        const afterCardsY = cardY + CARD_H + 54;

        // Synthesis excerpt
        const synthesis = (state.reading && state.reading.synthesis && state.reading.synthesis[0]) || '';
        if (synthesis) {
          ctx.strokeStyle = GOLD2;
          ctx.lineWidth = 1;
          ctx.globalAlpha = 0.4;
          ctx.beginPath(); ctx.moveTo(120, afterCardsY - 8); ctx.lineTo(W - 120, afterCardsY - 8); ctx.stroke();
          ctx.globalAlpha = 1;

          ctx.fillStyle = TEXT2;
          ctx.font = 'italic 18px Georgia, serif';
          ctx.textAlign = 'center';
          wrapText(ctx, synthesis, W / 2, afterCardsY + 16, W - 200, 28);
        }

        ctx.strokeStyle = GOLD2;
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.4;
        ctx.beginPath(); ctx.moveTo(120, H - 90); ctx.lineTo(W - 120, H - 90); ctx.stroke();
        ctx.globalAlpha = 1;

        ctx.fillStyle = TEXT2;
        ctx.font = '13px system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('READ BETWEEN THE SIGNS', W / 2, H - 62);

        ctx.fillStyle = GOLD;
        ctx.font = '16px Georgia, serif';
        ctx.fillText('aurentarot.pages.dev', W / 2, H - 40);

        try {
          resolve(canvas.toDataURL('image/png'));
        } catch(e) {
          reject(e);
        }
      }).catch(reject);
    });
  }

  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.arcTo(x + w, y, x + w, y + r, r);
    ctx.lineTo(x + w, y + h - r);
    ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
    ctx.lineTo(x + r, y + h);
    ctx.arcTo(x, y + h, x, y + h - r, r);
    ctx.lineTo(x, y + r);
    ctx.arcTo(x, y, x + r, y, r);
    ctx.closePath();
  }

  function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';
    let currentY = y;
    for (let i = 0; i < words.length; i++) {
      const test = line + (line ? ' ' : '') + words[i];
      if (ctx.measureText(test).width > maxWidth && line) {
        ctx.fillText(line, x, currentY);
        line = words[i];
        currentY += lineHeight;
      } else {
        line = test;
      }
    }
    if (line) ctx.fillText(line, x, currentY);
  }

  function showShareModal(dataUrl) {
    const existing = document.getElementById('share-modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'share-modal';
    modal.className = 'share-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Share your reading');
    modal.innerHTML = `
      <div class="share-modal-inner">
        <button class="share-modal-close" id="share-close-btn" aria-label="Close">✕</button>
        <h4 class="share-modal-title">Share Your Reading</h4>
        <img src="${dataUrl}" class="share-preview" alt="Your AUREN reading card" />
        <div class="share-actions">
          <button class="btn btn-primary" id="share-download-btn">↓ Download</button>
          <button class="btn btn-share-native" id="share-native-btn">↗ Share</button>
          <button class="btn btn-ghost share-copy-link-btn" id="share-copy-btn">📋 Copy</button>
        </div>
        <p class="share-hint">Save the image and share it anywhere — Instagram, WhatsApp, anywhere.</p>
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('#share-close-btn').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });

    // Keyboard: Escape closes
    modal.addEventListener('keydown', e => { if (e.key === 'Escape') modal.remove(); });

    // Download
    modal.querySelector('#share-download-btn').addEventListener('click', () => {
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = 'auren-reading.png';
      a.click();
    });

    // Native share
    modal.querySelector('#share-native-btn').addEventListener('click', async () => {
      try {
        const blob = await (await fetch(dataUrl)).blob();
        const file = new File([blob], 'auren-reading.png', { type: 'image/png' });
        if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: 'My AUREN Reading',
            text: 'Read between the signs — aurentarot.pages.dev',
            files: [file]
          });
        } else if (navigator.share) {
          await navigator.share({
            title: 'My AUREN Reading',
            text: buildShareText(),
            url: 'https://aurentarot.pages.dev'
          });
        } else {
          // No Web Share — copy link
          try {
            await navigator.clipboard.writeText('https://aurentarot.pages.dev');
            const btn = modal.querySelector('#share-native-btn');
            if (btn) { btn.textContent = 'Link Copied!'; }
          } catch(e) {}
        }
      } catch(e) { /* user cancelled */ }
    });

    // Copy text
    modal.querySelector('#share-copy-btn').addEventListener('click', async () => {
      const text = buildShareText();
      try {
        await navigator.clipboard.writeText(text);
        const btn = modal.querySelector('#share-copy-btn');
        if (btn) btn.textContent = '✓ Copied';
      } catch(e) {}
    });
  }

  function showShareModalText() {
    const existing = document.getElementById('share-modal');
    if (existing) existing.remove();
    const text = buildShareText();
    const modal = document.createElement('div');
    modal.id = 'share-modal';
    modal.className = 'share-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Share reading');
    modal.innerHTML = `
      <div class="share-modal-inner">
        <button class="share-modal-close" id="share-close-btn" aria-label="Close">✕</button>
        <h4 class="share-modal-title">Share Your Reading</h4>
        <textarea class="share-text" readonly rows="8">${escapeHtml(text)}</textarea>
        <div class="share-actions">
          <button class="btn btn-primary" id="share-copy-btn">📋 Copy</button>
          ${navigator.share ? `<button class="btn btn-share-native" id="share-native-btn">↗ Share</button>` : ''}
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    modal.querySelector('#share-close-btn').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
    modal.addEventListener('keydown', e => { if (e.key === 'Escape') modal.remove(); });
    modal.querySelector('#share-copy-btn').addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(text);
        modal.querySelector('#share-copy-btn').textContent = '✓ Copied';
      } catch(e) {}
    });
    const nativeBtn = modal.querySelector('#share-native-btn');
    if (nativeBtn) {
      nativeBtn.addEventListener('click', async () => {
        try {
          await navigator.share({ title: 'My AUREN Reading', text, url: 'https://aurentarot.pages.dev' });
        } catch(e) {}
      });
    }
  }

  function buildShareText() {
    const qr = state.quickReadingId ? QUICK_READINGS.find(q => q.id === state.quickReadingId) : null;
    const lines = ['✦ AUREN — My Reading\n'];
    if (qr) lines.push(`${qr.label}\n`);
    state.drawnCards.forEach(dc => {
      const pos = dc.position ? `${dc.position.name}: ` : '';
      lines.push(`${pos}${dc.card.name} (${dc.orientation})`);
    });
    lines.push('\nRead between the signs.');
    lines.push('aurentarot.pages.dev');
    return lines.join('\n');
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', () => {
  AUREN_APP.init();
});
