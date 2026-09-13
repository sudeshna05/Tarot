// AUREN — Interpretation Engine
// Generates readings without AI — pure card data + positional logic

const AUREN_INTERPRET = (() => {

  const SUIT_THEMES = {
    wands:     { theme: 'fire and ambition', quality: 'passion, creativity, and driven action' },
    cups:      { theme: 'water and emotion', quality: 'feeling, intuition, and relational depth' },
    swords:    { theme: 'air and intellect', quality: 'thought, conflict, and the search for truth' },
    pentacles: { theme: 'earth and matter', quality: 'patience, resources, and the physical world' }
  };

  const POSITION_PREFIXES = {
    'The Message':         'At the center of this moment, ',
    'Past':                'Looking back, ',
    'Present':             'Right now, ',
    'Future':              'Moving forward, ',
    'Situation':           'Within this situation, ',
    'Challenge':           'As the challenge you face, ',
    'Hidden Influence':    'Working beneath the surface, ',
    'Advice':              'As counsel from the deck, ',
    'Likely Direction':    'Following this current, ',
    'Current Energy':      'In the field around you, ',
    'What You Want':       'Beneath your question, ',
    'What You Fear':       'In what you resist, ',
    "What You Don't See":  'In your blind spot, ',
    'The Situation':       'At the heart of things, ',
    'What Is Known':       'In what you already hold, ',
    'What Is Hidden':      'In what remains unseen, ',
    'The Past':            'In the roots of this, ',
    'The Present':         'In the present moment, ',
    'The Emerging Future': 'In what is beginning to form, ',
    'Your Influence':      'In your own contribution, ',
    'External Influence':  'In what surrounds you from outside, '
  };

  /**
   * Build the interpretation text for a single card in a position.
   */
  function interpretCard(drawnCard, position, topic) {
    const { card, orientation } = drawnCard;
    const posName = position ? position.name : 'The Message';
    const prefix = POSITION_PREFIXES[posName] || '';
    const topicKey = (topic && topic !== 'none') ? topic : 'general';
    const interp = card[orientation][topicKey] || card[orientation]['general'];
    return prefix + interp.charAt(0).toLowerCase() + interp.slice(1);
  }

  /**
   * Compute overall reading synthesis from all drawn cards.
   */
  function synthesizeReading(drawnCards, spread, topic) {
    const lines = [];

    // ── Major Arcana count
    const majorCount = drawnCards.filter(dc => dc.card.arcana === 'major').length;
    if (majorCount >= 3) {
      lines.push(
        `This reading carries a sense of profound transformation. With ${majorCount} Major Arcana present, the forces at work here are not small or personal — they belong to a larger cycle of becoming.`
      );
    } else if (majorCount === 2) {
      lines.push(
        'Two Major Arcana in this reading suggest that while the situation feels personal, there are larger forces lending it weight and meaning.'
      );
    } else if (majorCount === 1) {
      lines.push(
        'One Major Arcana anchors this reading, marking a point of real consequence within an otherwise practical situation.'
      );
    } else {
      lines.push(
        'This reading is entirely Minor Arcana — a reminder that the everyday, the practical, and the human are the true fabric of a life.'
      );
    }

    // ── Dominant suit detection
    const suitCounts = { wands: 0, cups: 0, swords: 0, pentacles: 0 };
    drawnCards.forEach(dc => {
      if (dc.card.suit) suitCounts[dc.card.suit]++;
    });
    const dominantSuit = Object.entries(suitCounts)
      .sort((a, b) => b[1] - a[1])
      .filter(([, v]) => v > 0)[0];

    if (dominantSuit && dominantSuit[1] >= 2) {
      const s = SUIT_THEMES[dominantSuit[0]];
      lines.push(
        `The presence of ${dominantSuit[0]} runs through this reading like a current — bringing with it ${s.quality}. The energy of ${s.theme} is where the most movement is happening for you now.`
      );
    }

    // ── Reversed ratio
    const reversedCount = drawnCards.filter(dc => dc.orientation === 'reversed').length;
    const total = drawnCards.length;
    const ratio = reversedCount / total;

    if (ratio >= 0.6) {
      lines.push(
        'The high proportion of reversed cards suggests this is a time of internal work rather than external action. The resistance you feel may be a signal pointing inward, toward something that needs attention before it can release.'
      );
    } else if (ratio >= 0.4) {
      lines.push(
        'Some of this reading moves against the current — a mix of forward momentum and inner friction. There is work to be done both inside and outside of you.'
      );
    } else if (reversedCount === 0 && total > 1) {
      lines.push(
        'Every card in this reading falls upright — an unusual coherence of energy. What surrounds this question appears to be moving with you, not against you.'
      );
    }

    // ── Key themes from upright keywords
    const allKeywords = drawnCards.flatMap(dc => dc.card.uprightKeywords);
    const keywordFreq = {};
    allKeywords.forEach(kw => {
      keywordFreq[kw] = (keywordFreq[kw] || 0) + 1;
    });
    const topKeywords = Object.entries(keywordFreq)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([kw]) => kw);

    if (topKeywords.length > 0) {
      lines.push(
        `The threads woven through this reading: ${topKeywords.join(', ')}.`
      );
    }

    // ── Advice synthesis
    const adviceCard = drawnCards.find(dc =>
      dc.position && (dc.position.name === 'Advice' || dc.position.name === 'The Message')
    ) || drawnCards[drawnCards.length - 1];

    if (adviceCard) {
      const { card, orientation } = adviceCard;
      const adviceInterp = card[orientation]['growth'] || card[orientation]['general'];
      lines.push(
        `In the spirit of this reading: ${adviceInterp.charAt(0).toLowerCase() + adviceInterp.slice(1)}`
      );
    }

    return lines;
  }

  /**
   * Build the full reading object: per-card interpretations + synthesis.
   */
  function buildReading(drawnCards, spread, topic) {
    const cards = drawnCards.map((dc, i) => {
      const position = spread && spread.positions[i] ? spread.positions[i] : null;
      return {
        ...dc,
        position,
        interpretation: interpretCard(dc, position, topic)
      };
    });

    const synthesis = synthesizeReading(cards, spread, topic);

    return { cards, synthesis };
  }

  return { buildReading, interpretCard, synthesizeReading };
})();
