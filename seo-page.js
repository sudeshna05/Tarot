// AUREN — Static page utilities
// Theme toggle, mobile nav, stored preference
(function () {
  'use strict';

  // ── Theme ──────────────────────────────────────────────────────────────────
  function getStoredTheme() {
    try { return localStorage.getItem('auren-theme'); } catch (e) { return null; }
  }
  function setStoredTheme(t) {
    try { localStorage.setItem('auren-theme', t); } catch (e) {}
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.querySelectorAll('.theme-toggle-static').forEach(function (btn) {
      btn.textContent = theme === 'midnight' ? '☾ Midnight ↔ ☼ Moonlit' : '☼ Moonlit ↔ ☾ Midnight';
      btn.setAttribute('aria-label', 'Toggle theme: currently ' + theme);
    });
  }

  function initTheme() {
    var stored = getStoredTheme();
    if (stored) { applyTheme(stored); return; }
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'midnight' : 'moonlit');
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute('data-theme') || 'midnight';
    var next = current === 'midnight' ? 'moonlit' : 'midnight';
    applyTheme(next);
    setStoredTheme(next);
  }

  // ── Mobile nav ─────────────────────────────────────────────────────────────
  function initMobileNav() {
    var hamburger = document.querySelector('.nav-hamburger');
    var links = document.querySelector('.site-nav-links');
    if (!hamburger || !links) return;

    hamburger.addEventListener('click', function () {
      var isOpen = links.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    // Close nav when a link is clicked
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ── Init ───────────────────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    initMobileNav();

    document.querySelectorAll('.theme-toggle-static').forEach(function (btn) {
      btn.addEventListener('click', toggleTheme);
    });
  });

  // Apply theme immediately to prevent flash
  initTheme();
})();
