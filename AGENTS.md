# AGENTS.md

> Agent guide for this repo. `CLAUDE.md` only imports this file, so edit here. Keep it to what an
> agent can't infer from the code; per-stack conventions come from the global rules. When a
> correction reveals a project rule, record it here.

## Project

Max Ranger's personal site: a single-page Vite + Vue 3 + TypeScript app with EN and DE locales
(vue-i18n), a light and a dark palette and a ⌘K command palette. Every push to `main` builds the
Docker image and pushes it to GHCR (`.github/workflows/docker.yml`). Layout and content map:
`README.md`.

The site is live at ranger.ac: one page with about, projects, services, experience, education and
contact, for clients, engineers and recruiters who arrive from a link. The built bundle is served
by `serve` in a Docker container, behind Zero on Max's server. Deploying the image with Zero is a
separate step from the build.

This repo is public. The product brief and the design system stay in the private `handbook` repo on
purpose. Do not copy them here, and keep private project details out of specs and rulings.

**Load:** a static page served to a handful of visitors at a time. No backend, no database, no accounts.

## Commands

- `pnpm install`
- `pnpm dev` (http://localhost:5173), `pnpm build`, `pnpm preview`
- `pnpm typecheck` runs vue-tsc. There is no `test` script.
- `pnpm og:render` turns `public/og-image.svg` into `og-image.png`.

## Knowledge

Knowledge lives in the brain, the Basic Memory project `brain` in the kitsune checkout (`~/Code/kitsune/brain`): the kitsune hooks bring the project note `projects/homepage.md` into the session, more comes from `bm tool search "<words>" --project brain`, and new facts (state, architecture, decisions, how to operate) go there through `bm tool write` and `bm tool edit`, never into a file here. This repo keeps only `AGENTS.md` and `docs/specs/<feature>/`. Nothing else is written under `docs/`. A decision is a note under the brain's `decisions/`, written once Max approved it.

## Review

What `/code-review`, the verifier agent and a human reviewer check on every change in this repo.
Findings are **Blocking** (must fix before merge) or **Nit** (optional).

### Passes

1. **Correctness against the spec**: every requirement in `docs/specs/<feature>/spec.md` is met. Departures from `plan.md` are reflected in the plan.
2. **Bugs**: edge cases, error paths, concurrency, resource handling.
3. **Security**: untrusted input validated at the trust boundary, authz on every entry point, no secrets, no injection.
4. **Simplicity**: the simplicity ladder was climbed. No speculative abstraction, no drive-by refactor, no new dependency for one call. A `ranger: shortcut` marker that names its limit is a decision, not a finding, unless the expected load already crosses it.
5. **Load**: judged against the Load line above: check-then-write races, work every process repeats, lists that only grow, a query per item. The review says which load it assumed.
6. **Tests**: new behavior has tests that fail without the change, and existing tests pass.
7. **Docs**: `spec.md` and `plan.md` reflect the change. A change to the architecture or a decision reaches the brain (the project note or a decision note), never a new file under `docs/`.

### Exclusions

- Formatting (the formatter owns it), import order (lint owns it).
- Missing unit tests. This repo has no test suite, so the checks are `pnpm typecheck`, `pnpm build` and a look at the running page.

### Blocking by default

- Data loss or migration without rollback path
- Auth / permission changes without a test
- A string present in one locale and missing or different in meaning in the other
- A private detail in this public repo: the product brief, the design system, unannounced project details

## Conventions & Gotchas

- Static data (ids, urls, technology names, prices) lives in `src/content.ts`. Every translatable
  string lives in `src/i18n/en.ts` and `src/i18n/de.ts`, with English as the fallback.
- All styling is hand-written in `src/style.css`.
- Never add `Co-Authored-By` lines to commits.
