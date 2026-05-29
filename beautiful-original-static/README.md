# ORIGINAL BEAUTIFUL STATIC HTML REFERENCE

**This is the exact visual design the user loved and repeatedly said the Astro version failed to match.**

These are the original single-file / simple-folder static HTML pages (with embedded Tailwind CDN + Font Awesome + full custom CSS + JS modals) that were built first and shown in screenshots.

## Why this folder exists

The project attempted to migrate to Astro for long-term maintainability (260+ chapters, sharing with friends). Despite multiple aggressive attempts to port the exact hero treatments, glass cards, teal accents, numbered movement cards, modals, typography, and every visual detail, the user reported that the localhost Astro version "utterly failed" and "still doesn't look anything like the beautiful html pages."

Per the user's explicit final instruction: do not make any more development changes. This folder preserves the beloved original static experience exactly as it was when the user was happy with the visuals.

## Contents

- `index.html` — Homepage with two illustrated chapter cards (Mark 12 & Mark 13)
- `mark-12/index.html` — Full beautiful page for Mark 12 (Questions in the Temple) with hero, CORE THEME, SUMMARY + CONTEXT cards, 6 movement cards, rich interactive modals containing exact ESV Study Bible commentary + reformed-emphasis key truths + reflection prompts
- `mark-13/index.html` — Full beautiful page for Mark 13 (The Olivet Discourse) — the original reference implementation
- `assets/images/` — All custom generated illustration images used in the cards and modals

## How to view the beautiful original version

Simply open any of the .html files directly in a browser (double-click or `open index.html`).

- They are completely self-contained (CDNs for Tailwind + Font Awesome + local images).
- Dark theme, vibrant teal (#5EEAD4) accents, cream/white text, glass morphism, dramatic image overlays, smooth modals, keyboard (Escape) support.
- No progress tracking (user requested it removed).
- Strict adherence to: exact ESV Study Bible commentary only (no added fluff), reformed theology emphasis when interpretive (election, preservation of the elect, centrality and sufficiency of Christ and the gospel).

## Theology & Content Rules (enforced in these files)

- Keep the ESV Study Bible commentary as the core commentary — do not add fluff.
- When theology appears: stick to reformed theology, amplify Jesus and the gospel, emphasize election and the preservation of the elect.
- Two-sentence chapter summary (user request replacing "enter" buttons).
- SUMMARY + CONTEXT side-by-side cards.
- Six movements as illustrated cards with simple arrow icons only.
- Teal pills, numbered badges, arrow icons on cards.

## Status (as of user's last message)

User: "this utterly failed and it still doesn't look anything like the beautiful html pages. ... do not make any more dev changes - i give up"

These files are the canonical reference for what "beautiful" meant in this project.

Future work (if resumed): Any new implementation (Astro or otherwise) must achieve **pixel-level visual parity** with these pages before being considered successful.

---

Generated from the full project conversation history for archival purposes.