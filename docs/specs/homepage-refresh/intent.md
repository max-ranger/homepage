# Intent: homepage refresh

Status: ready
Author: Maximilian Ranger

## Problem

The site says Max works at codebeam and is available immediately for freelance work. Both stopped being true. His last day at codebeam was 30.06.2026 and he started at CADS on 03.08.2026. The text also reads as generated: long sentences, many dashes, words nobody says out loud. Parts of the design are stale or misleading: an old version number, status bar items with no meaning, a legal notice with a visible placeholder, a dead link and no favicon.

## Proposed outcome

A visitor sees within a minute that Max is a software developer employed at CADS, who builds his own products and takes small side projects. Every fact matches the handbook. The text is short, plain and sounds like a person. The design is the approved mockup, in both themes, both languages and on a phone.

## Affected users & systems

Prospective side project clients, fellow engineers and recruiters who arrive from a link. The change reaches the content data, both locale files, the components, the stylesheet, the meta tags, the Open Graph image and the static assets. There is no backend.

## Constraints

- The site must not read as job hunting, and CADS must not look like a footnote.
- The text must not sound generated.
- German keeps the formal "Sie" when addressing the reader.
- The repo is public. No private details go into code, docs or rulings.
- The design stays in the existing system: two palettes, gold for interactive things, teal for live things, monospace for structure, Inter for sentences.

## Open questions

None.
