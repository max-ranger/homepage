# Spec: homepage refresh

Status: approved
Intent: ./intent.md

## Requirements

### Facts

- R1 The experience timeline shows Software Developer at CADS from August 2026 to now, and Software Developer at codebeam from June 2024 to June 2026, in both locales. CADS is the only entry marked as current.
- R2 The hero and the about text say Max works full-time at CADS and takes small side projects. No visible text, meta tag or image says he is available immediately, open to contract work or bookable for a quarter.
- R3 The stack reads, in this order: .NET, C#, Vue, TypeScript, PostgreSQL, Flutter, Dart, Docker as daily tools, and React, Hono, Zitadel, SQL Server, MySQL, CI/CD as also used. The approach group is gone.
- R4 The public email is max@ranger.ac everywhere. The address max@ranger.co.at appears nowhere in the site.
- R5 The projects section has two groups. "My own" holds Argos, WHK website, Pegasus, Cerberus, Manticore and Kitsune. "At work" holds the invoice extraction, energy insights, sales-talent marketplace and time-tracking projects, each naming the employer. The travel-expense tool and the card for this site are gone.
- R6 Argos links to https://argos.ranger.ac and the WHK website links to https://welserhundesportklub.at. The other own projects have no link. Own project descriptions contain only what the handbook or the project's own overview supports, and name no customer.
- R7 The legal notice has no VAT or UID line and no online dispute resolution section. The privacy text no longer mentions Google Fonts, because the fonts are served by the site itself.

### Text

- R8 Every string a reader sees, in both locales and the meta tags, has no em dash, en dash or semicolon. Terminal symbols that are part of the interface stay: arrows on links, `//`, `·`, `●`.
- R9 Outside the legal notice, no sentence in the locale files runs over 25 words, and the words on the stock AI list in the writing rules do not appear.
- R10 Both locales say the same thing. German addresses the reader as "Sie" and stays natural German, not a word-for-word copy. Dates, price units and decimal commas read correctly in German, with no English month names, "now" or "month" on the German page.

### Design, as approved in the mockup

- R11 Hero: a new "now" row names the job at CADS, the status pill says small side projects are taken, and the keyboard hint is hidden on touch screens.
- R12 About: a small portrait crop and a short stack list sit in a side column, and the readme prose is set in Inter at reading size. On a phone these stack.
- R13 Projects: own products are cards with status badges and a visible link where one exists. Employer work is plain rows split by hairlines. The hover overlay is gone. Status badges show Live in teal and other states in the muted colour.
- R14 Services: the row of four steps is gone, and each card shows a starting price. The service dialog keeps its full price table and has no side stripe border.
- R15 Timelines: organisation names are muted instead of gold. The current job has a teal dot, the rest a muted dot.
- R16 Contact: the email row in the list of links is gone. The send button and the GitHub and LinkedIn rows stay.
- R17 Chrome: the top bar center says only "ranger.ac". The footer has no "ready", "utf-8", "vue" or "ln 99, col 1". The window dots are neutral outlines. Section heads and service cards show no numbers.
- R18 The browser tab shows a favicon, a gold `>_` on the dark ground, and iOS gets a touch icon. Both URLs return images.

### No visible change

- R19 The site loads no font or other resource from another host. Only JetBrains Mono and Inter are used.
- R20 The portrait is at most 150 KB.
- R21 The page scrolls on the document, so a phone browser's address bar collapses. The top bar stays fixed, palette jumps land below it, the custom cursor still follows the pointer after scrolling, and modals still lock the background.
- R22 A section is never left invisible. If reveal observing is unavailable the content shows without animation, and a palette jump shows its target section.

### Must not break

- R23 Palette commands, theme toggle, language toggle, the mail links with their subject, focus traps and reduced motion all still work. The overscroll background follows the active theme.
- R24 `pnpm typecheck` and `pnpm build` pass.

## Design

Data that does not change per locale stays in the content module. Everything a reader reads moves to the locale files, including date ranges and price units. The content helper stops parsing month names, because each locale states its long and short date range. Project status becomes a fixed key with a translated label, because a label cannot be a CSS class.

The mockup is the reference for the look: https://claude.ai/artifact/23vVAJe5LnXCcToBa7ZyxJ. It predates Pegasus and Manticore, which use the same card. It uses a shorter stack row in the hero, and R3 wins.

## Constraint mapping

| Constraint (from intent) | How the design satisfies it |
|---|---|
| Not job hunting, CADS not a footnote | The "now" row sits first in the hero list, the status pill says side projects only |
| Not generated | R8 and R9 are checkable, and the copy brief in the plan gives the voice |
| German keeps "Sie" | R10 |
| Public repo | R6 names no customer, rulings hold no private reasons |
| Existing design system | R13 and R15 apply the gold and teal rules, R12 applies the rule for sentences |

## Out of scope

- A new visual direction, new fonts or new colours.
- The dialog, palette and legal layouts, beyond what R7, R14 and R17 name.
- The services themselves and their price levels.
- A test runner. This repo has none, and a static page does not earn one.
- Deploying. Max merges and deploys.
- The handbook's copies of the brief and the design system.

## Areas of concern

- Moving the scroll from an inner element to the document touches the cursor, the reveals, the top bar and the overscroll colour. The plan names each one.
- The legal text is not legal advice. Removing the UID line and the dispute link is Max's call and current fact, and nobody has checked the rest.
- Text quality has no full automatic check. R8 and R9 catch the mechanical part, and Max reads the rest in the PR.

## Open questions

None.

## Acceptance

| Requirement | Seam |
|---|---|
| R1 to R7, R10 to R18 | The running page, in both locales and both themes, read through the browser, plus a grep of the source for the retired strings |
| R8, R9 | A throwaway script over the locale files and meta tags, run by the verifier, with its output in the report |
| R19 | Network requests of the built page, all same-origin |
| R20 | File size in the build output |
| R21, R22, R23 | The running page at desktop and phone size: scroll, palette jump, modal open, theme and language toggle |
| R18 | HTTP status and content type from `pnpm preview` |
| R24 | Command output |
