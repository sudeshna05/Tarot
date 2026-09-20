// AUREN — Local Storage Module
// All reading and reflection data stays local — no server, no tracking.

const AUREN_STORE = (() => {
  const KEY_READINGS   = 'auren-readings';
  const KEY_DAILY_REF  = 'auren-daily-reflections';
  const KEY_SCHEMA_V   = 'auren-schema-v';
  const SCHEMA_VERSION = 1;

  function _read(key) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch(e) { return null; }
  }

  function _write(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
      return true;
    } catch(e) { return false; }
  }

  function _ensureSchema() {
    const v = _read(KEY_SCHEMA_V);
    if (v !== SCHEMA_VERSION) {
      _write(KEY_SCHEMA_V, SCHEMA_VERSION);
    }
  }

  function _uuid() {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
      return crypto.randomUUID();
    }
    return 'r' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  }

  function _fingerprint(cards) {
    return cards.map(dc => dc.card.id + ':' + dc.orientation).join('|');
  }

  function _todayStr() {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  // ── Readings ─────────────────────────────────────────────────────────────────

  function saveReading(obj) {
    _ensureSchema();
    if (!obj || !obj.cards || !obj.cards.length) {
      return { ok: false, error: 'invalid' };
    }
    const readings = getReadings();
    if (isDuplicate(obj)) {
      return { ok: false, error: 'duplicate' };
    }
    const record = {
      id:             _uuid(),
      savedAt:        Date.now(),
      topic:          obj.topic   || null,
      question:       obj.question || '',
      spreadId:       obj.spreadId || null,
      quickReadingId: obj.quickReadingId || null,
      spreadName:     obj.spreadName || '',
      cardCount:      obj.cards.length,
      cards:          obj.cards,
      synthesis:      obj.synthesis || [],
      reflection:     obj.reflection || '',
      glance:         null
    };
    readings.unshift(record);
    const ok = _write(KEY_READINGS, readings);
    return ok ? { ok: true, id: record.id } : { ok: false, error: 'storage_full' };
  }

  function getReadings() {
    return _read(KEY_READINGS) || [];
  }

  function getReading(id) {
    return getReadings().find(r => r.id === id) || null;
  }

  function deleteReading(id) {
    const readings = getReadings().filter(r => r.id !== id);
    _write(KEY_READINGS, readings);
  }

  function clearReadings() {
    _write(KEY_READINGS, []);
  }

  function isDuplicate(obj) {
    if (!obj || !obj.cards) return false;
    const dateStr = _todayStr();
    const fp = _fingerprint(obj.cards);
    return getReadings().some(r => {
      const savedDate = new Date(r.savedAt);
      const sy = savedDate.getFullYear();
      const sm = String(savedDate.getMonth() + 1).padStart(2, '0');
      const sd = String(savedDate.getDate()).padStart(2, '0');
      const rDate = `${sy}-${sm}-${sd}`;
      return rDate === dateStr && _fingerprint(r.cards) === fp;
    });
  }

  function saveReadingReflection(readingId, text) {
    const readings = getReadings();
    const idx = readings.findIndex(r => r.id === readingId);
    if (idx === -1) return false;
    readings[idx].reflection = text || '';
    return _write(KEY_READINGS, readings);
  }

  // ── Daily Reflections ────────────────────────────────────────────────────────

  function saveDailyReflection(dateStr, text) {
    const map = _read(KEY_DAILY_REF) || {};
    if (!text || !text.trim()) {
      delete map[dateStr];
    } else {
      map[dateStr] = text.trim();
    }
    return _write(KEY_DAILY_REF, map);
  }

  function getDailyReflection(dateStr) {
    const map = _read(KEY_DAILY_REF) || {};
    return map[dateStr] || '';
  }

  function getDailyReflections() {
    return _read(KEY_DAILY_REF) || {};
  }

  function deleteDailyReflection(dateStr) {
    const map = _read(KEY_DAILY_REF) || {};
    delete map[dateStr];
    _write(KEY_DAILY_REF, map);
  }

  return {
    saveReading,
    getReadings,
    getReading,
    deleteReading,
    clearReadings,
    isDuplicate,
    saveReadingReflection,
    saveDailyReflection,
    getDailyReflection,
    getDailyReflections,
    deleteDailyReflection
  };
})();
