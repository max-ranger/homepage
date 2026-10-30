# Rulings: homepage refresh

Decisions made without Max, or by "go" accepting a recommendation.

| Date | Decision | Why | Cost if wrong |
|---|---|---|---|
| 2026-10-30 | Keep services and prices, say "taking small side projects" | Accepted recommendation. The dialogs and the OG image already speak of side projects | The site offers work he can't take. Removing the section is a small change |
| 2026-10-30 | CADS entry is "Software Developer", note "Full-time.", no product claims | Accepted recommendation. The only company description found is from a data aggregator | A wrong title on a public page. One-line fix |
| 2026-10-30 | Public email is max@ranger.ac | Accepted recommendation. The handbook names it as the mailbox | Mail to the new address gets lost if the mailbox changes |
| 2026-10-30 | Remove the VAT line from the imprint | Accepted recommendation. A placeholder was live | Imprint incomplete if a UID exists and is used for billing |
| 2026-10-30 | Build D1 to D9 in this PR | Max said go on the mockup | Rework of one section at a time |
| 2026-10-30 | Failure tests: not job hunting, CADS no footnote, not generated, "Sie" stays | Accepted recommendation | Wrong tone, fixed in review |
| 2026-10-30 | Remove the online dispute resolution section | The link returns 404 and the EU platform closed in July 2025 | None known |
| 2026-10-30 | Replace the OSS badge by dropping the card for this site | The repo has no license and the footer says all rights reserved, so OSS was wrong | None. The footer still links the source |
| 2026-10-30 | Thesis note on the FH entry, naming the Moodle code editor plugin | The repo is public and gives the site a real work sample | A dated project gets attention. One-line fix |
| 2026-10-30 | Stack order and groups as in R3 | Matches what the handbook says he uses now. Git and CI/CD are not worth a daily slot | Max prefers another order. One-line fix |
| 2026-10-30 | Hero shows the same daily stack as stack.json, including Dart | One list is simpler than a shorter copy for the hero. Departs from the mockup by one word | None |
| 2026-10-30 | Own project order: Argos, WHK website, Pegasus, Cerberus, Manticore, Kitsune | Live things first, then by how far along they are | Max prefers another order. One-line fix |
| 2026-10-30 | Status labels: Live, In testing, In progress, Daily use | Each states what the project's overview says now | A label goes stale. One-line fix |
| 2026-10-30 | Keep arrows, `//`, `·` and `●` | They are the terminal interface of the approved design, not sentence punctuation | None |
| 2026-10-30 | Date ranges use "to" and "bis", price ranges use a hyphen | The writing rules ban dashes, and a hyphen reads the same in both languages | None |
| 2026-10-30 | German prices use a decimal comma, with € in front and k kept, through one replace in the content helper | Found by the builder check. Prices stay in one place, as the repo guide says, and German gets the comma it expects | Max prefers "2.500 €". The strings then move to the locale files |
| 2026-10-30 | Fonts come from the two fontsource variable packages | Maintained, handled by the bundler, no files to vendor by hand. No sibling repo pins a version | Two small dependencies. Swappable |
| 2026-10-30 | No test runner, no new tests | The repo has none and this is static content. Typecheck, build and the running page are the proof | A later regression is caught by eye |
| 2026-10-30 | The product brief and design system stay in the handbook and are not updated here | They are deliberately outside this public repo | The handbook's design system drifts until updated |
| 2026-10-30 | Do not add an alternative dispute resolution statement | Nothing was there before and it is a legal call outside this ask | Max may need one if he sells to consumers |
| 2026-10-30 | Project year ranges in `content.ts` use a hyphen, "2025-2026", not "to" | They are not translated, and "to" would be English on the German page | None. One-line fix |
| 2026-10-30 | Work rows show title, employer, year, description and a plain stack line, with no kind or status | The brief gives no kind for them, and the plan says they show no status | Max wants more on a row. Small markup change |
| 2026-10-30 | Employer time-tracking stack reads "SQL Server", not "MSSQL" | Matches the name R3 uses | None |
| 2026-10-30 | Group labels: "my own" and "at work", German "meine eigenen" and "beruflich", shown as `//` comments | R5 names the groups, and comment labels stay lowercase | Max prefers other words. One-line fix |
| 2026-10-30 | Moved leftover English and dashes into the locale files: service card aria label, close button label, "shipped with zero", mail subject now "[01] title: inquiry". The legal dialog tag is now `//` | R8 and R10 cover every string a reader sees. Screen readers read these too | None |
| 2026-10-30 | Own project cards are articles with a real link stretched over the card. Only linked cards get the hover border | Gold is for interactive things, and a card with no link is not one | Max wants hover on all cards. One-line fix |
| 2026-10-30 | Portrait crop is square, 340 px wide, with the readme on the left | The mockup could not be opened: claude.ai asks for a browser check. Spec and plan set the rest | The side column differs from the mockup. Small CSS fix |
| 2026-10-30 | Timeline date column widened to 170 px, 104 px on phones, and timeline titles 14 px on small phones | "Juni 2024 bis Juni 2026" wrapped, and "Softwareentwickler" pushed the phone page sideways | None |
| 2026-10-30 | Document scrollbar thumb is a neutral grey in both themes | Theme variables sit on `.root`, and the scrollbar now belongs to `html` | A slightly different thumb colour. Small fix |
| 2026-10-30 | Hero and root height use `svh`, not `dvh` | With `dvh` the hero resizes while the phone address bar collapses, and the page jumps | Hero is slightly short of full height with the bar collapsed. One-word fix |
| 2026-10-30 | Reveal threshold 0, already revealed elements are not observed again, and focus restore uses `preventScroll` | No reveal target can stay hidden because it is too tall, and restoring focus cannot cancel a palette jump. This is the likely cause of the blank section seen once, though I did not reproduce it | Reveals start a little earlier. One-line fix |
| 2026-10-30 | Palette jumps drop the explicit smooth `behavior` | An explicit value ignored reduced motion. The `html` rule now decides | None |
| 2026-10-30 | `body` and `#app` lost their background, only `html` has one | A dark `body` would cover the light background the inline script sets | None |
| 2026-10-30 | Gold link classes fixed with a `.root` prefix (`.root .proj-link`, `.legal-link`, `.dialog-cta` and its hover), not by lowering `.root a` | `.root a` stays the one reset for plain links and the prefix beats it on specificity | A future link class needs the same prefix |
| 2026-10-30 | Theme names live in `common.themes.dark` and `common.themes.light`. German uses "Farbschema" and "dunkel" and "hell" | "Thema" means topic. The palette label became "farbschema umschalten" to match | None |
| 2026-10-30 | WHK card keeps "the dog sport club I am active in" | No handbook page says it. The wording was in the mockup Max approved with go | One clause to cut |
| 2026-10-30 | Light theme gold darkened to reach AA on the panel colour | The site targets WCAG AA and the new project link made the gap visible. Small departure from the design system's value | The handbook's value is out of date until updated |
| 2026-10-30 | Title and meta tags stay English on the German page | They are static in index.html, as before, and not part of this ask | A German tab reads English |

## Blockers

- The approved mockup could not be opened. claude.ai answers an automated browser with a Cloudflare check, and I did not try to get around it. I built from the spec and the copy brief, as the plan allows. Max should compare the page with the mockup.
- `pnpm typecheck` checks nothing. `tsconfig.json` has `files: []` and only references, so `vue-tsc --noEmit` passed with type errors in the code. I used `vue-tsc -b`, which `pnpm build` runs, as the real signal. I left the script alone because it is outside this plan. The fix is `vue-tsc -b` in `package.json`.
