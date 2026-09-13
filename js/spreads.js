// AUREN — Spread Definitions

const AUREN_SPREADS = (() => {

  const SPREADS = [
    {
      id: 1,
      name: 'The Message',
      cardCount: 1,
      description: 'One card. One truth. The most direct answer the deck can offer.',
      positions: [
        { index: 0, name: 'The Message', description: 'What the universe wants you to know right now.' }
      ]
    },
    {
      id: 3,
      name: 'The River',
      cardCount: 3,
      description: 'Past, present, and future — a thread of time made visible.',
      positions: [
        { index: 0, name: 'Past', description: 'The energy or event that has shaped where you stand.' },
        { index: 1, name: 'Present', description: 'The current moment and what it carries.' },
        { index: 2, name: 'Future', description: 'Where this current leads if nothing shifts.' }
      ]
    },
    {
      id: 5,
      name: 'The Lantern',
      cardCount: 5,
      description: 'Five positions illuminate the hidden structure of a situation.',
      positions: [
        { index: 0, name: 'Situation', description: 'The landscape you are moving through.' },
        { index: 1, name: 'Challenge', description: 'What stands between you and clarity.' },
        { index: 2, name: 'Hidden Influence', description: 'Something working beneath the surface.' },
        { index: 3, name: 'Advice', description: 'What the cards suggest as your wisest move.' },
        { index: 4, name: 'Likely Direction', description: 'Where momentum is carrying you.' }
      ]
    },
    {
      id: 7,
      name: 'The Mirror',
      cardCount: 7,
      description: 'Seven cards reveal what you want, what you fear, and what you cannot see.',
      positions: [
        { index: 0, name: 'Current Energy', description: 'The dominant force around you now.' },
        { index: 1, name: 'What You Want', description: 'The desire driving your question.' },
        { index: 2, name: 'What You Fear', description: 'The resistance running underneath.' },
        { index: 3, name: 'What You Don\'t See', description: 'The blind spot in your current view.' },
        { index: 4, name: 'Challenge', description: 'The test this moment is asking you to meet.' },
        { index: 5, name: 'Advice', description: 'The quality or action the cards recommend.' },
        { index: 6, name: 'Likely Direction', description: 'The arc this path is following.' }
      ]
    },
    {
      id: 9,
      name: 'The Compass',
      cardCount: 9,
      description: 'A full nine-card reading: situation, all that surrounds it, and where it leads.',
      positions: [
        { index: 0, name: 'The Situation', description: 'The heart of what you are asking about.' },
        { index: 1, name: 'What Is Known', description: 'What you already understand, consciously.' },
        { index: 2, name: 'What Is Hidden', description: 'What has not yet surfaced for you.' },
        { index: 3, name: 'The Past', description: 'The root or cause behind the current situation.' },
        { index: 4, name: 'The Present', description: 'The immediate reality you are living.' },
        { index: 5, name: 'The Emerging Future', description: 'What is beginning to form ahead.' },
        { index: 6, name: 'Your Influence', description: 'What you yourself are contributing to the outcome.' },
        { index: 7, name: 'External Influence', description: 'Forces outside your control that are shaping things.' },
        { index: 8, name: 'Likely Direction', description: 'The probable outcome if current energies continue.' }
      ]
    }
  ];

  function getSpread(cardCount) {
    return SPREADS.find(s => s.cardCount === cardCount) || null;
  }

  function getAllSpreads() {
    return SPREADS;
  }

  return { SPREADS, getSpread, getAllSpreads };
})();
