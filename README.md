# homepage

Personal site for Max Ranger — Vite + Vue 3 + TypeScript + vue-i18n. Terminal-inspired
single-page layout with auto-switching **Amber Forest** (dark) and **Ivory & Sage**
(light) palettes, EN / DE locales, and a ⌘K command palette.

## Run

```sh
pnpm install
pnpm dev          # http://localhost:5173
pnpm build        # outputs to ./dist
pnpm preview      # serve the built bundle
pnpm typecheck    # vue-tsc --noEmit
pnpm og:render    # rasterize public/og-image.svg → og-image.png
```

## Edit content

- **Static / non-translatable shape** — ids, urls, email, technology names,
  pricing ranges, year strings — lives in [`src/content.ts`](./src/content.ts)
  on the `MAX` export.
- **All translatable text** — section titles, hero copy, service / project /
  experience / education prose, palette commands, legal text — lives in
  [`src/i18n/en.ts`](./src/i18n/en.ts) and [`src/i18n/de.ts`](./src/i18n/de.ts).
  English is the source-of-truth fallback; German keys override per-locale.

The `useContent()` composable merges the two so components see one combined
shape regardless of locale.

## Layout

```
src/
├── App.vue
├── main.ts                          ← creates app, installs i18n, mounts
├── style.css                        ← all styling (~1200 lines, hand-written)
├── content.ts                       ← typed static data
├── i18n/
│   ├── index.ts                     ← createI18n, locale type
│   ├── en.ts                        ← English messages (source of truth)
│   └── de.ts                        ← German messages
├── composables/
│   ├── useTheme.ts                  ← dark ⇄ light toggle, system-pref initial, localStorage
│   ├── useLanguage.ts               ← en ⇄ de toggle, English default, localStorage
│   ├── useReveals.ts                ← IntersectionObserver fade-in for [data-reveal]
│   ├── useCommandPalette.ts         ← ⌘K state + keyboard handlers + filtering
│   ├── useContent.ts                ← merges content.ts with i18n messages
│   └── useFocusTrap.ts              ← shared trap (stack-based, inert-aware)
└── components/
    ├── Shell.vue                    ← root, wires composables and sections
    ├── TopBar.vue                   ← window dots, local clock, ⌘K, EN/DE, theme
    ├── Hero.vue                     ← whoami typing animation, name, kv block
    ├── HeroRipple.vue               ← mouse-tracking dot grid
    ├── About.vue                    ← readme.md + stack.json cards
    ├── Projects.vue                 ← 6 project cards, hover peek with optional URL
    ├── Services.vue                 ← engagement-flow row + 4 service cards
    ├── ServiceDialog.vue            ← modal opened from a service card
    ├── Experience.vue               ← continuous-spine timeline of roles
    ├── Education.vue                ← continuous-spine timeline of studies
    ├── Contact.vue                  ← mailto + social links
    ├── StatusFooter.vue             ← bottom status bar + imprint / privacy / source links
    ├── LegalDialog.vue              ← modal that renders Impressum or Datenschutzerklärung
    ├── SectionHead.vue              ← `// 0X title` heading row
    ├── Palette.vue                  ← ⌘K command palette modal
    └── CustomCursor.vue             ← dot + trailing ring (hover-capable devices only)
```

## Theme

The ◐ button toggles **dark ⇄ light**. First-load defaults to the user's
`prefers-color-scheme`; once toggled, the choice is stored in `localStorage`
under `homepage-theme-mode`. An inline script in [`index.html`](./index.html)
sets the page background pre-Vue-mount to avoid a dark flash for returning
light-mode users.

Palettes live as CSS custom properties on `.root` / `.root[data-theme="light"]`
in [`src/style.css`](./src/style.css):

- **Dark** — `#0b0c0a` bg, `#e5b94a` gold, `#3a7a6b` forest, `#4ba89a` teal
- **Light** — `#f5f1e6` bg, `#8a6e1f` gold, `#2f5a4c` forest, `#3d6657` teal
  (darker accents than dark mode to pass WCAG AA against cream)

## Languages

The **EN / DE** button toggles locale. Defaults to English; the choice persists
to `localStorage` under `homepage-language` and updates `<html lang>`. Missing
German keys fall back to English automatically.

## Keyboard

- `⌘K` / `Ctrl+K` — open command palette (nav + theme + language + mailto + legal)
- `Esc` — close any open modal (palette, service dialog, legal)
- `↑` / `↓` — move palette selection, `Enter` to run
- `Tab` / `Shift+Tab` — wraps inside the open modal; never escapes the trap

## Accessibility

- **Focus traps** on all modals (`useFocusTrap`) with a module-level stack so
  modals can be opened on top of each other and the topmost wins.
- **Inert background** — when any modal opens, the rest of the page is marked
  `inert` until close, so screen readers and keyboard nav can't reach it.
- **Focus restore** — the element that triggered a modal is re-focused when
  the modal closes.
- **`prefers-reduced-motion`** — disables the typing animation, reveal
  transitions, hover transforms, and smooth scroll.
- **Visible focus rings** on every interactive element (gold outline,
  `:focus-visible`); suppressed only on text inputs since the caret already
  signals focus.
- **Custom cursor** is disabled on `(hover: none)` devices.

## Open Graph image

The OG image used by LinkedIn / iMessage / Slack / Discord / WhatsApp / etc.
is sourced from [`public/og-image.svg`](./public/og-image.svg) and rasterized
to `public/og-image.png` via:

```sh
pnpm og:render
```

Edit the SVG, re-run the script, ship.

## Deploy

The build is fully static — `pnpm build` produces a `dist/` folder you can
serve anywhere. The included [`Dockerfile`](./Dockerfile) and
[`docker-compose.yml`](./docker-compose.yml) wrap that bundle in a small
Node + `serve` runtime listening on `:3000`, ready for an external reverse
proxy to terminate TLS and route to the container.

```sh
docker compose up --build
```

The compose file exposes `:3000` only — wire it into your proxy network
(Caddy / Traefik / your-reverse-proxy-of-choice) and route `ranger.ac` →
`ranger-homepage:3000`.

## Legal

Imprint and privacy-policy text live in the i18n message bundles
(`legal.impressum.*` and `legal.privacy.*`) and render via `LegalDialog.vue`
when triggered from the footer or palette. There are `[PLACEHOLDER]` markers
in both `en.ts` and `de.ts` for site-owner-specific data (street address,
GISA-Zahl, professional title) that need to be filled in before launch.
