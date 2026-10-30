# Architecture

## Entry points

`index.html` loads `src/main.ts`, which mounts `App.vue` and `Shell.vue`. `Shell.vue` wires the composables and renders the sections in page order.

## Module boundaries

- `src/content.ts` holds data that does not change per locale.
- `src/i18n/` holds every string that does.
- `src/composables/useContent.ts` merges the two, so components see one shape for the current locale.
- `src/style.css` holds all styling. Components carry no scoped styles.

## Data flow

Nothing is fetched from another host at runtime. Fonts are bundled from the fontsource packages. Locale and theme come from `localStorage`, then from defaults. All content ships in the bundle.

## External systems

- GHCR receives the image from `.github/workflows/docker.yml`.

## Known trade-offs

- There is no test suite. `pnpm typecheck` and `pnpm build` are the only automated signals, so content changes are checked by running the page.
- The Open Graph image is a rendered PNG. After editing `public/og-image.svg` or `public/favicon.svg`, run `pnpm og:render` and commit the source and the PNG.
