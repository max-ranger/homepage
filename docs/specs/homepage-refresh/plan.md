# Plan: homepage refresh

Status: approved
Spec: ./spec.md

The look is in the approved mockup: https://claude.ai/artifact/23vVAJe5LnXCcToBa7ZyxJ. If you can't open it, the spec and the copy brief below are enough.

## Files to change

- `src/content.ts`: data shape and values (steps 1, 2).
- `src/i18n/en.ts`, `src/i18n/de.ts`: all copy (steps 1, 2).
- `src/composables/useContent.ts`: merged shape, no more month parsing (step 1).
- `src/components/Hero.vue`, `About.vue`, `Projects.vue`, `Services.vue`, `ServiceDialog.vue`, `Experience.vue`, `Education.vue`, `Contact.vue`, `TopBar.vue`, `StatusFooter.vue`, `SectionHead.vue`, `LegalDialog.vue`: markup (step 3).
- `src/components/Shell.vue`, `CustomCursor.vue`, `src/composables/useReveals.ts`, `useTheme.ts`, `useFocusTrap.ts`: scroll, reveal and the modal scroll lock (step 5).
- `src/style.css`: all styling (steps 3, 5).
- `index.html`: meta tags, fonts, icon links (steps 2, 4).
- `src/main.ts`, `package.json`, `pnpm-lock.yaml`: fonts (step 4).
- `public/`: add `favicon.svg`, `apple-touch-icon.png`, `portrait.webp`, remove `portrait.png`, edit `og-image.svg`, regenerate `og-image.png` (step 4).
- `scripts/render-og.mjs`: also render the touch icon (step 4).
- `README.md`, `docs/architecture.md`: match the result (step 6).

## Order

1. Data shape, no visible text change beyond what the shape forces.
   - `ProjectData` becomes `{ id, group: 'own' | 'work', year, stack: string[], url?, status?: 'live' | 'testing' | 'building' | 'daily', org?: string }`. Rows in the work group use `org` and show no status.
   - `ServicePricingTier` becomes `{ id, range, unit?: 'hour' | 'day' | 'month' }`. `ServiceData` gains `from: { price: string, unit?: same }`. Units are translated under `services.units`, and `services.from` holds "from {price}" and "ab {price}".
   - Price strings stay in `content.ts` with a decimal point. `useContent` swaps the point for a comma on the German page, so "€2.5k" reads "€2,5k". The € sign stays in front and the k stays.
   - `ExperienceData` and `EducationData` keep only `id`. Each locale entry gains `years` and `yearsShort`. Delete `yearsOnly` and its regexes.
   - `Skills` keys become `daily` and `also`.
   - Consumes: nothing. Produces: `useContent()` returning `projects` with `group`, translated `statusLabel` and `statusKey`, `services` with `fromLabel`, `experience` and `education` with locale dates.
2. Facts and copy, both locales, using the brief below. Includes meta tags in `index.html`, legal changes, and the new `cads` experience entry with a `current: true` flag on its data.
   - Consumes: the shape from step 1.
   - Produces: final strings. Later steps add markup, not words.
3. Components and CSS for R11 to R17. Remove `.proj-peek*`, `.svc-flow*` and `.proj-idx` rules and the `// 0X` tags. `SectionHead` renders `//` only. Project groups get `//` comment labels: "my own" and "at work", German "meine eigenen" and "beruflich". Service cards lose their number, the dialog head shows `//`, and `s.id` stays in the mail subject. `.dialog-continuation` gets a full 1px gold border instead of the side stripe. Org names use `--muted`. The hero hint hides under `@media (hover: none)`. Prose in `.md` and its list use Inter at 16px, capped at 68ch.
   - Consumes: steps 1, 2.
   - Produces: the page matches the mockup, still on the inner scroller.
4. Assets. `pnpm add @fontsource-variable/inter @fontsource-variable/jetbrains-mono`, import them in `src/main.ts`, rename the families in `style.css` to `'Inter Variable'` and `'JetBrains Mono Variable'`, and remove every Google Fonts tag. Write `public/favicon.svg` from drawn shapes, not text, so it needs no font. Have `scripts/render-og.mjs` also write a 180 by 180 `apple-touch-icon.png` from it. Make the portrait with `cwebp`, resized to 680 px wide, under 150 KB. Update the card label to `me.webp`, and the `img` attributes to the new size. In `og-image.svg`, replace the em dash in the top line and make the pill say "taking small side projects", wide enough to fit. Run `pnpm og:render`.
5. Scroll and reveal.
   - Remove the inner scroller: `.root` stops being fixed with hidden overflow, `.scroll` loses its overflow and offset, `.topbar` becomes `position: fixed`, `.scroll` gets `padding-top: 34px`, sections get `scroll-margin-top: 34px`. Move the scrollbar and `scroll-behavior` rules to `html`. Hero and root height use `svh`, not `dvh`, so the page does not jump when the phone address bar collapses. Remove `height: 100%` from `html, body, #app`.
   - `CustomCursor`: use `clientX` and `clientY` directly, because the root's rect moves with scroll now. Check the ring too.
   - `useReveals`: observe with the viewport as root and threshold 0. Restoring focus after a modal uses `preventScroll`, so it cannot cancel a palette jump. Set a `data-reveals` attribute on the root once observing starts, and hide `[data-reveal]` only under it. Without `IntersectionObserver`, mark everything revealed.
   - `useTheme`: set the document background to the theme's ground on every change, so overscroll matches. Keep the inline script in `index.html`.
   - `Shell.scrollTo` keeps `scrollIntoView`, without an explicit `behavior`, so reduced motion applies. `HeroRipple` needs no change.
   - Modals: backdrops are fixed and already fine. The background did move, so `useFocusTrap` locks document scroll while any modal is open, and `scrollbar-gutter: stable` on `html` stops the layout shifting.
6. Docs. README layout, deploy notes and the placeholder note. `docs/architecture.md` external systems no longer lists Google Fonts. Update this plan and the spec if the build departs from them.

## Copy brief

Voice: first person, plain words, short sentences, dry where it fits. One idea per sentence. No em dash, en dash or semicolon. Words to avoid: the stock AI list in the writing rules, plus "funnelling", "hand-off" as a noun in prose, "glue", "survive contact with code". Keep the dry WU line. Keep real numbers. German: first person "ich", the reader is "Sie", real German words where they exist (Übergabe, Angebot, Zeiterfassung). Keep `// comment` labels lowercase.

Use these strings where given, and write the German to match:

- Hero: "I build web apps from database to screen. .NET and Postgres on the server, Vue in the browser, Flutter on phones." and "I work full-time at CADS and take on small side projects when I have the time."
- Hero rows: now "Software Developer @ CADS, since Aug 2026". Status "● taking small side projects". Location stays.
- Readme intro: "Software developer from Upper Austria. I work full-time at CADS. In my free time I build my own products and take on small side projects."
- How I work: "We start with a short call. Before I write code, I write down what we agreed. You see small, regular commits, and a preview when there is something to show. At the end you get a short document, so you can carry on without me."
- Good at: "Turning a vague idea into a spec someone can build from." "Designing systems that survive changing requirements, without building for problems you don't have." "Explaining technical things to people who don't write code."
- Own projects:
  - Argos, Live, 2026, Web app, .NET Vue Postgres Zitadel: "Draw Rally Obedience courses on a 30 by 20 m field. Numbering and sign holders follow the ÖKV and FCI rulebooks, and the course is checked as you draw."
  - WHK website, Live, 2026, Website, Vue Hono TypeScript Docker: "Website of the Welser Hundesportklub, the dog sport club I am active in. People sign up for courses online and get the payment details by mail."
  - Pegasus, In testing, 2026, Mobile app, Flutter Dart Supabase: "App for show-jumping riders to record and review tournament courses. The course builder works fully offline."
  - Cerberus, In progress, 2026, Web app, .NET Vue Postgres Zitadel: "Club software for the Welser Hundesportklub. Members, courses and participants move out of spreadsheets into one place."
  - Manticore, In progress, 2026, Web app, .NET Vue Postgres: "Service reports, clients, contracts and time entries for installer and maintenance companies. Documents come in through an LLM import that a person reviews."
  - Kitsune, Daily use, 2026, Developer tool, Claude Code Bash: "My setup for Claude Code. One conversation shapes a change, then agents build it, review it and open a pull request."
- Work rows, keep year values from today's data:
  - Invoice extraction SaaS, codebeam: "Reads inboxes, finds invoices, runs OCR and files them for accounting. I built and led it."
  - Energy insights platform, codebeam: "Metering data, dashboards and reports for energy management."
  - Sales-talent marketplace, codebeam: "Book sales people for a fixed term, with buyer flows, contracts and billing."
  - Time-tracking suite, COUNT IT: "Time tracking under Austrian collective agreements, across complex shift patterns."
- Services hint: "// side projects only. start anywhere. fees credit toward the next step."
- Service cards:
  - Consulting & reviews, from €75 / h: "Tech advice, architecture and code reviews, and turning an idea into a spec. A second opinion when you need one."
  - Prototyping, from €600: "Working draft code in days. Good enough to test an idea, cheap enough to throw away. No hosting included."
  - Small web apps & websites, from €2.5k: "Marketing sites and small apps, from first idea to live product."
  - Maintenance, from €375 / month: "Bug fixes, dependency updates, small features and deploys for an app you already run."
- Rewrite each service dialog (details, included, delivery, continuation) in the same voice, keeping every fact and boundary. Price ranges keep their values and use a hyphen, for example "€75-125".
- Experience: CADS "Full-time." codebeam "Full-time, hybrid in Wels. Full-stack work on the codebeam SaaS products." COUNT IT "Full-time in Hagenberg. Blazor and .NET systems for clients, mostly time tracking and expenses." Internship "Five months, focused on Blazor and software architecture." Tutor "Taught software architecture basics to undergraduates."
- Education: FH "University of Applied Sciences Upper Austria. My thesis was a code editor plugin for Moodle." WU degree "Bachelor, not finished", note "Business Informatics. I tried it, decided software was the better fit and moved to Hagenberg." Matura stays.
- Contact sub: "Two sentences and a rough timeline get the fastest reply."
- Meta: title "Max Ranger, software developer". Description "Software developer in Upper Austria, full-time at CADS. Small side projects: consulting, prototyping, builds and maintenance."
- Legal: remove dashes with commas or full stops and change no meaning. Remove the tax block and the dispute section from the component and the locale files. Privacy: replace the Google Fonts sentence with nothing, since fonts are now part of the site.

## Tests

No test runner exists and none is added.

- R1 to R7, R10 to R18: run the page, read both locales, both themes.
- R8, R9: throwaway script, not committed.
- R19, R20, R24: build output and network log.
- R21 to R23: drive the page at desktop and phone size.

## Review focus

- German page shows no English left over in dates, units or status labels. It would look careless to the Austrian clients the site is for.
- After scrolling, the custom cursor sits exactly on the pointer. An offset would be visible on every page view on desktop.
- A palette jump to about from the very top shows the section. It stayed blank once in a programmatic test.
- A visitor with the OS on light and a stored dark choice sees no flash and no wrong overscroll colour.
- No private detail: no customer names, deal status or anything from the handbook's brief in code, copy or docs.

## Risks

- Variable font packages change family names and could miss a rule. Grep for the old family names after step 4.
- `cursor: none` stays on the root, so a broken custom cursor leaves desktop visitors with no pointer. Check it after step 5.
- Removing `.root` overflow can expose horizontal overflow from the hero ripple. Check at phone width.
