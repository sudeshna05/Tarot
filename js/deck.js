// AUREN — Deck Utilities
// Validation, shuffling, and card drawing logic

const AUREN_DECK = (() => {

  // ─── Validation ────────────────────────────────────────────────────────────

  function validateDeck() {
    if (typeof TAROT_DECK === 'undefined') {
      console.error('[AUREN] TAROT_DECK is not defined. Ensure tarot-data.js is loaded first.');
      return false;
    }

    const total = TAROT_DECK.length;
    if (total !== 78) {
      console.error(`[AUREN] Deck validation failed: expected 78 cards, found ${total}`);
      return false;
    }

    const ids = TAROT_DECK.map(c => c.id);
    const uniqueIds = new Set(ids);
    if (uniqueIds.size !== 78) {
      const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
      console.error(`[AUREN] Deck validation failed: duplicate IDs found: ${dupes.join(', ')}`);
      return false;
    }

    const major = TAROT_DECK.filter(c => c.arcana === 'major');
    if (major.length !== 22) {
      console.error(`[AUREN] Deck validation failed: expected 22 Major Arcana, found ${major.length}`);
      return false;
    }

    const minor = TAROT_DECK.filter(c => c.arcana === 'minor');
    if (minor.length !== 56) {
      console.error(`[AUREN] Deck validation failed: expected 56 Minor Arcana, found ${minor.length}`);
      return false;
    }

    const suits = ['wands', 'cups', 'swords', 'pentacles'];
    for (const suit of suits) {
      const count = TAROT_DECK.filter(c => c.suit === suit).length;
      if (count !== 14) {
        console.error(`[AUREN] Deck validation failed: expected 14 ${suit}, found ${count}`);
        return false;
      }
    }

    console.log('[AUREN] Deck validated: 78 cards, all suits correct.');
    return true;
  }

  // ─── Crypto-seeded Fisher-Yates Shuffle ────────────────────────────────────

  function secureRandom() {
    try {
      const buf = new Uint32Array(1);
      crypto.getRandomValues(buf);
      return buf[0] / (0xFFFFFFFF + 1);
    } catch (e) {
      return Math.random();
    }
  }

  function shuffle(array) {
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(secureRandom() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // ─── Draw Cards ────────────────────────────────────────────────────────────

  /**
   * Draw n unique cards from the shuffled deck.
   * Each card gets a random orientation (upright/reversed).
   * Returns array of { card, orientation: 'upright'|'reversed' }
   */
  function drawCards(n) {
    if (typeof TAROT_DECK === 'undefined') return [];
    const shuffled = shuffle(TAROT_DECK);
    return shuffled.slice(0, n).map(card => ({
      card,
      orientation: secureRandom() < 0.5 ? 'upright' : 'reversed'
    }));
  }

  // ─── Daily Card ─────────────────────────────────────────────────────────────

  /**
   * Deterministic card for a given date string (YYYY-MM-DD).
   * Same date always yields the same card and orientation.
   */
  function getDailyCard(dateString) {
    if (typeof TAROT_DECK === 'undefined') return null;

    // Simple hash of the date string
    let hash = 0;
    for (let i = 0; i < dateString.length; i++) {
      hash = ((hash << 5) - hash) + dateString.charCodeAt(i);
      hash |= 0; // convert to 32-bit int
    }
    const index = Math.abs(hash) % TAROT_DECK.length;
    // Use a secondary hash for orientation
    let orientHash = hash * 31 + 17;
    orientHash |= 0;
    const orientation = (Math.abs(orientHash) % 2 === 0) ? 'upright' : 'reversed';
    return { card: TAROT_DECK[index], orientation };
  }

  // ─── Today's Date String ────────────────────────────────────────────────────

  function todayString() {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  return { validateDeck, drawCards, getDailyCard, todayString, shuffle };
})();
