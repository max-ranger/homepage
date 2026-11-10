# AGENTS.md

> Agent guide for this repo. `CLAUDE.md` only imports this file, so edit here. Keep it to what an
> agent can't infer from the code; per-stack conventions come from the global rules. When a
> correction reveals a project rule, record it here.

## Project

Max Ranger's personal site: a single-page Vite + Vue 3 + TypeScript app with EN and DE locales
(vue-i18n), a light and a dark palette and a ⌘K command palette. Every push to `main` builds the
Docker image and pushes it to GHCR (`.github/workflows/docker.yml`). Layout and content map:
`README.md`.

## Commands

- `pnpm install`
- `pnpm dev` (http://localhost:5173), `pnpm build`, `pnpm preview`
- `pnpm typecheck` runs vue-tsc. There is no `test` script.
- `pnpm og:render` turns `public/og-image.svg` into `og-image.png`.

## Knowledge

Knowledge lives in the brain, the Basic Memory project `brain` in the kitsune checkout (`~/Code/kitsune/brain`): the kitsune hooks bring the project note `projects/homepage.md` into the session, more comes from `bm tool search "<words>" --project brain`, and new facts (state, architecture, decisions, how to operate) go there through `bm tool write` and `bm tool edit`, never into a file here. This repo has no `docs/`. When the first feature-sized change needs a spec, it gets `docs/overview.md` (a pointer), `docs/specs/<feature>/` and `docs/review.md` from kitsune's repo template, and nothing else. A decision is a note under the brain's `decisions/`, written once Max approved it.

## Conventions & Gotchas

- Static data (ids, urls, technology names, prices) lives in `src/content.ts`. Every translatable
  string lives in `src/i18n/en.ts` and `src/i18n/de.ts`, with English as the fallback.
- All styling is hand-written in `src/style.css`.
- Never add `Co-Authored-By` lines to commits.
