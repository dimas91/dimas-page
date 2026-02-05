# Copilot / AI Agent Instructions — dimas-page

This repo is a small React + TypeScript single-page site (Create React App / `react-scripts`). The notes below help an AI coding agent be productive quickly.

**Big Picture**
- **Frontend:** React + TypeScript (no server). Entry is [src/index.tsx](src/index.tsx#L1). `HashRouter` is used for routing, and `Navbar` is rendered outside `Routes`.
- **Pages & Components:** Pages live in `src/routes/` (e.g., `About`, `Music`, `Woordeltje`) and UI pieces in `src/components/` (e.g., `Home`, `Navbar`, `Tracklist`).
- **Static & generated data:** Source data lives under `src/data/` (generated) and `public/data/`. Build output is in `build/` and static assets are hashed under `build/static/`.

**Build / Dev / Deploy workflows**
- Start (local dev): `npm start` (alias to `react-scripts start`). Use this for hot-reload development.
- Build: `npm run build` → production bundle in `build/`.
- Tests: `npm test` runs CRA tests.
- Deploy: `npm run deploy` uses `gh-pages` (see `predeploy` + `deploy` in `package.json`).
- Docker Compose (dev): `docker-compose up` uses [Dockerfile.dev](Dockerfile.dev#L1) and maps host `3001` → container `3000`. The compose file sets `CHOKIDAR_USEPOLLING=true` to enable file watching with mounted volumes.

**Project-specific patterns & conventions**
- Routing: Routes are declared in [src/index.tsx](src/index.tsx#L1). To add a page, create `src/routes/YourPage.tsx` and add a `<Route path="/your" element={<YourPage/>} />`.
- Tracklists generation: The canonical source for episode tracklists is text files in `src/tracklists/`. Run `node scripts/generate-tracklists.js` to produce `src/data/mixed-feelings.json`. As this has been done already, you are not expected to use this script unless you want to modify tracklist generation logic or add new episodes.
- Audio URL pattern: `https://audio.dimas.io/dimas_-_mixed_feelings_{slug}.mp3` (constructed by the generator). Keep this template when creating or validating `url` fields.
- Tracklist rendering: `Tracklist` component expects an `episode` shaped object (see [src/components/Tracklist.tsx](src/components/Tracklist.tsx#L1)). Note it strips numeric prefixes from track lines using the regex `/^\\s*\\d+\\s*[\\.):-]\\s*/` — preserve that logic when altering track display.
- TypeScript: `tsconfig.json` uses `strict: true` and `noEmit: true`. Do not rely on emitted JS from tsc; tests/build use `react-scripts`. (See [tsconfig.json](tsconfig.json#L1).)

**Integration points / external deps**
- Uses `react-router-dom@6` (note v6 route API). Import paths and Route element props follow v6 conventions (see [src/index.tsx](src/index.tsx#L1)).
- `gh-pages` is used for deployment (`npm run deploy`).
- Static audio hosting: external host `audio.dimas.io` expected for podcast MP3s.

**When making changes / PR guidance for an AI agent**
- Keep router changes minimal: add new route files under `src/routes/` and register them in [src/index.tsx](src/index.tsx#L1). Keep `Navbar` outside `Routes` to preserve site header behavior.
- Preserve TypeScript types where present; add explicit prop typings for new components (`React.FC<{}>` or specific prop types).
- Prefer editing existing CSS in `src/*.css` for site-wide changes; small, component-scoped inline styles are used in `Tracklist`.

**Files to inspect for context**
- Entry & routing: [src/index.tsx](src/index.tsx#L1)
- Main app shell: [src/App.tsx](src/App.tsx#L1)
- Tracklist logic: [src/components/Tracklist.tsx](src/components/Tracklist.tsx#L1)
- Tracklist generator: [scripts/generate-tracklists.js](scripts/generate-tracklists.js#L1)
- Docker/dev: [Dockerfile.dev](Dockerfile.dev#L1) and [docker-compose.yml](docker-compose.yml#L1)
- Build output / static: `build/` (generated)

If any section is unclear or you want additional examples (tests, a small RFC for adding a new page, or a sample PR checklist), tell me which area to expand. I'll iterate quickly.
