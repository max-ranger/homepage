# ranger.ac homepage: overview

**What:** Max Ranger's personal site at ranger.ac. One page with about, projects, services, experience, education and contact, in English and German, for clients, engineers and recruiters who arrive from a link.
**State:** Live. Every push to `main` builds the Docker image and publishes it to GHCR. Deploying that image with Zero is a separate step.
**Stack:** Vite, Vue 3, TypeScript, vue-i18n. Hand-written CSS. Static bundle served by `serve` in a Docker container, behind Zero on Max's server.
**Load:** A static page served to a handful of visitors at a time. No backend, no database, no accounts.

## Where things are

- Architecture: [architecture.md](architecture.md)
- Decisions: [decisions/](decisions/)
- Specs in flight: [specs/](specs/)
- Review policy: [review.md](review.md)
- Layout and how to edit content: [../README.md](../README.md)

## Conventions worth knowing

- This repo is public. The product brief and the design system stay in the private `handbook` repo on purpose. Do not copy them here, and keep private project details out of specs and rulings.
- Static data lives in `src/content.ts`. Every translatable string lives in `src/i18n/en.ts` and `src/i18n/de.ts`. English is the fallback.
