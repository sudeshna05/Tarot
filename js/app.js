// AUREN — Main Application
// State machine SPA: landing → topic → spread → reading → results

const AUREN_APP = (() => {

  // ─── State ──────────────────────────────────────────────────────────────────
  let state = {
    view: 'landing',          // 'landing' | 'topic' | 'spread' | 'reading' | 'results' | 'daily'
    topic: null,              // 'general'|'love'|'career'|'money'|'relationships'|'growth'|'none'
    spreadId: null,           // 1|3|5|7|9
    drawnCards: [],           // [{card, orientation, position, interpretation, revealed}]
    reading: null,            // {cards, synthesis}
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

  // ─── Initialise ─────────────────────────────────────────────────────────────
  function init() {
    state.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    applyTheme(loadTheme());
    AUREN_DECK.validateDeck();
    renderStarField();
    navigate('landing');
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    document.getElementById('topbar-home').addEventListener('click', () => { state.sessionId++; navigate('landing'); });
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

    // Fade out
    root.classList.add('view-transitioning');
    const render = () => {
      root.innerHTML = '';
      switch(viewName) {
        case 'landing':  renderLanding(root); break;
        case 'topic':    renderTopicSelect(root); break;
        case 'spread':   renderSpreadSelect(root); break;
        case 'reading':  renderReading(root); break;
        case 'results':  renderResults(root); break;
        case 'daily':    renderDaily(root); break;
        default:         renderLanding(root);
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
          </div>
          <p class="landing-breath">Take a breath. Hold your question in your mind.</p>
        </div>
      </section>
    `;
    document.getElementById('btn-begin').addEventListener('click', () => navigate('topic'));
    document.getElementById('btn-daily').addEventListener('click', () => navigate('daily'));
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
        navigate('spread');
      });
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
          <button class="btn-back" id="btn-back-spread" aria-label="Go back to topic">← Back</button>
          <h2 class="view-title">Choose your spread</h2>
          <p class="view-sub">How many cards do you want to draw?</p>
        </div>
        <div class="spread-grid">
          ${cards}
        </div>
      </section>
    `;

    document.getElementById('btn-back-spread').addEventListener('click', () => navigate('topic'));
    root.querySelectorAll('.spread-option').forEach(btn => {
      btn.addEventListener('click', () => {
        state.spreadId = parseInt(btn.dataset.spread, 10);
        beginReading();
      });
    });
  }

  // ─── Begin Reading ──────────────────────────────────────────────────────────
  function beginReading() {
    state.sessionId++;
    const spread = AUREN_SPREADS.getSpread(state.spreadId);
    const drawn = AUREN_DECK.drawCards(state.spreadId);
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

    root.innerHTML = `
      <section class="view-reading" aria-label="Your reading">
        <div class="view-header">
          <button class="btn-back" id="btn-back-reading" aria-label="Start over">← Start Over</button>
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
    root.getElementById && null; // no-op, use document scoping
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
    if (backBtn) backBtn.addEventListener('click', () => { state.sessionId++; navigate('landing'); });
  }

  function flipCard(index) {
    const dc = state.drawnCards[index];
    if (!dc || dc.revealed) return;
    if (state.flipLocks.has(index)) return;

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

      // Inject card name below position label after flip
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

    root.innerHTML = `
      <section class="view-results" aria-label="Reading results">
        <div class="view-header results-header">
          <h2 class="view-title">Your Reading</h2>
          ${state.topic && state.topic !== 'none'
            ? `<p class="view-sub">Focus: ${state.topic.charAt(0).toUpperCase() + state.topic.slice(1)}</p>`
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

        <div class="results-actions">
          <button class="btn btn-ghost" id="btn-share" aria-label="Share this reading">
            Share Reading
          </button>
          <button class="btn btn-primary" id="btn-again" aria-label="Begin a new reading">
            Begin a new reading
          </button>
        </div>

        <footer class="site-footer">
          <p class="disclaimer">Tarot readings are intended for reflection and entertainment only. They are not a substitute for professional medical, legal, financial, or mental-health advice.</p>
        </footer>
      </section>
    `;

    root.querySelector('#btn-share').addEventListener('click', shareReading);
    root.querySelector('#btn-again').addEventListener('click', () => navigate('landing'));
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
      </section>
    `;

    root.querySelector('#btn-back-daily').addEventListener('click', () => navigate('landing'));
    root.querySelector('#btn-full-reading').addEventListener('click', () => navigate('topic'));
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

  function getCardSymbol(card) {
    return card.symbol || '✦';
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
    // Render flame/staff pattern
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
    const spread = Math.min(n * 4, 22);
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

  // ─── Share ──────────────────────────────────────────────────────────────────
  function shareReading() {
    const lines = ['AUREN — My Reading\n'];
    state.drawnCards.forEach(dc => {
      const pos = dc.position ? `${dc.position.name}: ` : '';
      lines.push(`${pos}${dc.card.name} (${dc.orientation})`);
    });
    lines.push('\nAUREN — Read Between the Signs');
    const text = lines.join('\n');

    const fallback = () => {
      try {
        navigator.clipboard.writeText(text).then(() => {
          showShareModal('Copied to clipboard!', text);
        }).catch(() => showShareModal('Copy this text:', text));
      } catch(e) {
        showShareModal('Copy this text:', text);
      }
    };

    if (navigator.share) {
      navigator.share({ title: 'My AUREN Reading', text })
        .catch(() => fallback());
    } else {
      fallback();
    }
  }

  function showShareModal(title, text) {
    const existing = document.getElementById('share-modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'share-modal';
    modal.className = 'share-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Share reading');
    modal.innerHTML = `
      <div class="share-modal-inner">
        <h4>${title}</h4>
        <textarea class="share-text" readonly rows="8">${text}</textarea>
        <button class="btn btn-primary share-close" id="share-close-btn">Close</button>
      </div>
    `;
    document.body.appendChild(modal);
    modal.querySelector('#share-close-btn').addEventListener('click', () => modal.remove());
    modal.querySelector('.share-text').select();
    modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', () => {
  AUREN_APP.init();
});
