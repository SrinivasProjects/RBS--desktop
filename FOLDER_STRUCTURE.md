Project: RBS--desktop

This document describes the current folder layout, explains purpose of each folder/file, and lists recommended files to keep the project organized. Use this as a living reference when adding features or reorganizing.

**Current top-level tree (current files)**
- package.json: npm metadata, scripts, deps
- package-lock.json: npm lockfile
- README.md: project readme
- .gitignore: files to ignore in git
- index.html: Vite HTML entry
- tailwind.config.js: Tailwind configuration
- postcss.config.js: PostCSS configuration
- FOLDER_STRUCTURE.md: this file
- scripts/check-deps.js: small node script to validate installed packages
- src/: app source (see below)

**Current src/**
- src/main.jsx: Vite React entry
- src/App.jsx: demo React app
- src/index.css: Tailwind entry stylesheet

---

**Recommended folder structure (one-page summary)**
- / (project root)
  - package.json, package-lock.json, README.md, .gitignore
  - index.html
  - tailwind.config.js
  - postcss.config.js
  - /src — application source
  - /public — static assets (favicons, images) served as-is
  - /scripts — developer helper scripts (check-deps, dev utilities)
  - /electron — electron main & preload scripts (if building desktop app)
  - /build or /dist — build outputs (ignored by git)
  - /docs — project docs, architecture, diagrams

**src/** (React + Vite recommended layout)
- src/main.jsx or main.tsx: app entry that mounts React
- src/App.jsx: top-level app layout
- src/index.css: global css imports (Tailwind directives)
- src/pages/ — top-level route views (if using routing)
  - Home.jsx, Settings.jsx, Login.jsx, etc.
- src/components/ — reusable UI components
  - Header.jsx, Footer.jsx, Button.jsx
- src/styles/ — additional CSS or component-specific styles
  - variables.css, forms.css
- src/lib/ or src/utils/ — small helpers and wrappers
  - api.js (axios wrapper), db.js (better-sqlite3 helpers)
- src/store/ — application state (Zustand stores)
  - useStore.js
- src/electron/ (optional when bundling electron)
  - main.js — Electron main process entry
  - preload.js — preload script for secure bridge

**public/**
- favicon.ico or inline SVG (index.html) — static favicon
- assets/ — images, fonts, icons

**electron/** (desktop app specifics)
- electron/main.js: Create BrowserWindow, load URL/file
- electron/preload.js: contextBridge APIs
- electron/package.json or build config: electron-builder settings

**scripts/**
- scripts/check-deps.js — existing
- scripts/start-electron-dev.js — helper to start electron + vite
- scripts/package-desktop.js — package/build automation using electron-builder

**Config & tooling**
- tailwind.config.js — content globs must include `index.html` and `src/**/*.{js,jsx,ts,tsx}`
- postcss.config.js — postcss + autoprefixer
- vite.config.js — Vite config (add if customizing, e.g., electron-vite)
- .eslintrc / .prettierrc — optional linting/format rules

**Build outputs & git**
- Add `/dist` or `/build` to `.gitignore` (Vite build output)
- Keep node_modules out of git

**Where each major file should live (concise mapping)**
- App entry: `src/main.jsx`
- App container / routes: `src/App.jsx` or `src/pages/` files
- UI components: `src/components/*`
- CSS & Tailwind: `src/index.css` and `tailwind.config.js` at repo root
- Electron main: `electron/main.js` (create folder)
- Static assets: `public/*`
- Dev scripts: `scripts/*`
- Build outputs: `/dist` or `/build` (gitignored)

---

**Suggested next actions to align repo with this layout**
1. Create `public/` and move any static assets there (favicon, images).
2. Add `vite.config.js` if you plan to integrate Electron or change aliases.
3. Create `src/components/`, `src/pages/`, `src/store/`, and move `App.jsx` pieces as needed.
4. Add an Electron folder (`electron/`) with `main.js` and `preload.js` if packaging a desktop app.
5. Add or update `.gitignore` to include `dist/`, `.env`, `node_modules/`, and platform artifacts.

If you want, I can automatically create the recommended folders and skeleton files now (components, pages, electron main), or produce a more detailed per-file checklist. Which would you prefer?