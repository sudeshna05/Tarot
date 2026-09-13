# AUREN — Free Tarot Reading

A complete, static tarot reading web app. No backend, no build step, no cost to run. Open `index.html` and it works.

**Live:** deploy to GitHub Pages or Cloudflare Pages — zero configuration needed.

---

## What it does

- Full 78-card tarot readings with original Rider-Waite-Smith artwork
- 6 reading topics: General, Love, Career, Money, Relationships, Growth
- 5 spread sizes: 1, 3, 5, 7, and 9 cards
- Card flip animation with upright/reversed orientations
- Daily card — deterministic per date, changes at midnight
- Two themes: Midnight (dark, default) and Moonlit (light)
- Share readings via Web Share API with clipboard fallback
- 11 static SEO pages covering tarot topics, spreads, and card meanings

---

## How to run

**Locally — just open the file:**
```
open index.html
```
No server, no npm install, no build. All paths are relative so it works from any directory.

**With a local server (optional, avoids any browser file:// quirks):**
```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```
Then visit `http://localhost:8000`.

---

## Deploy

### GitHub Pages
1. Push this repo to GitHub
2. Go to Settings → Pages → Source: `main` branch, `/ (root)`
3. Your site is live at `https://<username>.github.io/<repo>/`

### Cloudflare Pages
1. Connect your GitHub repo in the Cloudflare Pages dashboard
2. Build command: *(leave blank)*
3. Output directory: `/` (or leave blank)
4. Deploy

Once you have a domain, replace `YOUR-FINAL-DOMAIN` throughout with your actual domain:
```bash
grep -rl "YOUR-FINAL-DOMAIN" . | xargs sed -i '' 's/YOUR-FINAL-DOMAIN/yourdomain.com/g'
```

---

## Project structure

```
├── index.html              # App shell — the entire SPA loads from here
├── style.css               # Full design system, dual-theme via CSS custom properties
├── seo-page.css            # Shared styles for static SEO pages
├── seo-page.js             # Theme toggle + mobile nav for SEO pages
├── robots.txt
├── sitemap.xml
│
├── js/
│   ├── tarot-data.js       # All 78 cards: names, keywords, 6-topic interpretations
│   ├── deck.js             # Shuffle (crypto.getRandomValues), draw, daily card logic
│   ├── spreads.js          # 5 spread definitions with position names/descriptions
│   ├── interpretation.js   # Synthesis: arcana balance, dominant suit, reversed ratio
│   └── app.js              # State machine SPA, rendering, card flip, share, theme
│
├── assets/
│   ├── favicon.svg
│   └── cards/              # 78 Rider-Waite-Smith JPGs (public domain, from Wikimedia)
│       ├── major-0-fool.jpg
│       ├── major-1-magician.jpg
│       └── ...             # Named by card ID matching tarot-data.js
│
├── tarot-reading/          # SEO page: how readings work
├── daily-tarot/            # SEO page: daily card
├── tarot-spreads/          # SEO page: all 5 spreads explained
├── tarot-card-meanings/    # SEO page: all 78 cards with meanings
├── major-arcana/           # SEO page: all 22 Major Arcana
├── minor-arcana/           # SEO page: four suits
├── love-tarot/
├── career-tarot/
├── money-tarot/
├── relationships-tarot/
└── personal-growth-tarot/
```

---

## Architecture

Pure static SPA — no framework, no build tooling.

**State machine** (`app.js`): views are `landing → topic → spread → reading → results → daily`. Each `navigate(viewName)` call clears and re-renders `#app-root`.

**Script load order** (enforced in `index.html`):
```
tarot-data.js → deck.js → spreads.js → interpretation.js → app.js
```
Each file exposes a single global (`AUREN_DECK`, `AUREN_SPREADS`, etc.) — no modules, no bundler.

**Theming**: CSS custom properties under `:root` (Midnight) and `[data-theme="moonlit"]` (Moonlit). Persisted to `localStorage` under key `auren-theme`.

**Card shuffle**: `crypto.getRandomValues()` Fisher-Yates, with `Math.random()` fallback. Daily card uses a deterministic date-string hash — same card all day, new card at midnight.

**Card flip**: CSS 3D transform (`rotateY(180deg)`, `transform-style: preserve-3d`, `backface-visibility: hidden`). The `.card-face` element has no `overflow: hidden` or `border-radius` — the SVG viewBox handles clipping to prevent stroke bleed.

**Card images**: Public domain Rider-Waite-Smith scans from Wikimedia Commons, stored locally in `assets/cards/`. Filenames match card IDs in `tarot-data.js`. An `onerror` handler falls back to SVG illustration if an image fails to load.

---

## Card image naming

Each file in `assets/cards/` is named `{card-id}.jpg` where `card-id` matches the `id` field in `js/tarot-data.js`:

| Pattern | Example |
|---|---|
| `major-{n}-{slug}` | `major-0-fool.jpg`, `major-14-temperance.jpg` |
| `{suit}-1-ace` | `wands-1-ace.jpg`, `cups-1-ace.jpg` |
| `{suit}-{n}` | `wands-5.jpg`, `swords-10.jpg` |
| `{suit}-11-page` | `pentacles-11-page.jpg` |
| `{suit}-12-knight` | `swords-12-knight.jpg` |
| `{suit}-13-queen` | `wands-13-queen.jpg` |
| `{suit}-14-king` | `cups-14-king.jpg` |

---

## Constraints (intentional)

- **$0 forever**: no paid hosting, APIs, databases, AI, analytics, auth, CDN, or subscriptions
- **No build step**: edit files, refresh browser — that's the entire workflow
- **No external requests at runtime**: all assets are local; the CSP-equivalent design means the app works fully offline after first load
- **Relative paths throughout**: all SEO pages use `../` paths so the site works in a GitHub Pages subdirectory without any path rewriting
