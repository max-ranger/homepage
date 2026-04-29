# homepage

Personal site — Vite + Vue 3 + TypeScript + Tailwind v4. Terminal-inspired
single-page layout with auto-switching **Amber Forest** (dark) and
**Ivory & Sage** (light) palettes.

## Run

```sh
pnpm install
pnpm dev        # http://localhost:5173
pnpm build      # outputs to ./dist
pnpm preview    # serve the built bundle
pnpm typecheck  # vue-tsc --noEmit
```

## Edit content

All site content lives in [`src/content.ts`](./src/content.ts) — the `MAX`
object holds name, role, skills, services, projects, experience, testimonials,
and socials. Edit there, save, hot-reload picks it up.

## Layout

```
src/
├── App.vue
├── main.ts
├── style.css                     ← global theme + utilities
├── content.ts                    ← typed site data
├── composables/
│   ├── useTheme.ts               ← auto / dark / light, persists to localStorage
│   ├── useReveals.ts             ← IntersectionObserver fade-in for [data-reveal]
│   └── useCommandPalette.ts      ← ⌘K / Ctrl+K state + filtering
└── components/
    ├── Shell.vue                 ← root, wires everything together
    ├── TopBar.vue                ← window dots, UTC clock, ⌘K, theme toggle
    ├── Hero.vue                  ← whoami typing animation, name, summary
    ├── HeroRipple.vue            ← mouse-tracking radial gradient
    ├── About.vue                 ← readme.md + stack.json cards
    ├── Projects.vue              ← project grid with hover peek
    ├── Services.vue              ← three offer cards
    ├── Experience.vue            ← timeline of roles
    ├── Testimonials.vue          ← three quote cards
    ├── Contact.vue               ← mailto + social links
    ├── StatusFooter.vue          ← bottom status bar
    ├── SectionHead.vue           ← `// 0X title` heading row
    ├── Palette.vue               ← ⌘K command palette modal
    └── CustomCursor.vue          ← dot + trailing ring
```

## Theme

`<Shell initial-theme="auto" />` follows `prefers-color-scheme` by default. The
◐ button cycles `auto → dark → light → auto` and persists to localStorage.

Palettes are CSS variables on `.root` / `.root[data-theme="light"]` in
[`src/style.css`](./src/style.css):

- Dark — `#0b0c0a` bg, `#e5b94a` gold, `#3a7a6b` forest, `#4ba89a` teal
- Light — `#f5f1e6` bg, `#b8943a` gold, `#4a7a6a` forest, `#5a8a7a` teal

## Keyboard

- `⌘K` / `Ctrl+K` — open command palette (nav + theme + mailto)
- `Esc` — close palette
- `↑` / `↓` — move selection in palette, `Enter` to run

## Deploy

The build is fully static — `pnpm build` produces a `dist/` folder you can
serve from anywhere (GitHub Pages, Cloudflare Pages, Netlify, Vercel, S3,
plain nginx). No server runtime needed.
