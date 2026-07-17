# DECISIONS.md — Portfolio Redesign

Locked reasoning. Append new decisions; don't rewrite history.

## 2026-07-16 — Redesign direction
- Homepage is HYBRID: short identity hero, then the work takes over as the spine.
  Rationale: brand/record is priority #1; old site buried the work under a sales pitch.
- Positioning: designer + developer (rare hybrid who ships), not agency/pedigree-first.

## Hero headline
- Chose plain "I build websites, web apps, & AI tools." over clever options
  (e.g. "Designed. Built. Shipped."). Reason: Shauna wanted clear > clever.
  "build" emphasized in accent with an animated underline.

## Palette
- Near-monochrome (paper + near-black) with ONE accent used sporadically.
- Accent history: terracotta+teal pair → deep teal #246167 (single) → #9ECE9A (soft green).
- Dark bands (About/footer) are near-black, so the accent stays a pop, never floods.
- OPEN: #9ECE9A is light; low-contrast as text on cream. Buttons use dark text.
  Decide whether to darken text usages (logo/links/section numbers) or keep ink.

## Logo
- "Shauna." wordmark (Logo direction A) + matching "S." monogram for favicon/avatar/portal.

## Case studies
- Data-driven content model: one src/pages/work/[slug].astro template, content from
  projects.json. Chosen over inline expanders for shareable per-project URLs + SEO.

## Client Portal (separate app, shauna-portal)
- Bento dashboard + floating dock nav; its own visual identity; distinct from green apps.
- Header = "Project Portal" + shauna.digital subtitle. "+ New" is a picker.
