# CLAUDE.md — Shauna.Digital Portfolio (Astro)

Durable rules for this repo. Edit only with Shauna's approval.

## What this is
Personal portfolio at shauna.digital. Astro static site. Goal: personal brand
+ a lasting record of work first; freelance/FTE second. The work is the hero.

## Design system (source of truth: src/styles/global.css :root)
- Palette is STRICTLY black + white + one teal accent (plus shades of those).
  White paper (--paper #FFFFFF), black ink (--ink #0B1416 — a hue-shifted near-black,
  NOT pure #000000), grey --ink-soft for muted text.
  Change the theme from the :root token block only — everything references it.
- ONE accent used sparingly: --primary / --accent = #2C8C99 (teal).
  Dark bands (About, Footer, case-study next-project) use --primary-deep = black.
- Text on the accent fill uses --on-accent (WHITE) — the accent is dark enough for it.
- Two teal shades, on purpose: --primary (#2C8C99) for fills, underlines and large text;
  --accent-ink (#1F6A75) for SMALL teal text on white. #2C8C99 on white is only 3.95:1
  and fails AA at small sizes; --accent-ink is 6.2:1. Don't use --primary for small labels.
- Type: Fraunces (display), Inter (body), JetBrains Mono (labels/meta). Sentence case.
- Logo: the "S" logomark (src/components/LogoS.astro) in the nav, teal at rest. Same
  artwork as the favicon (public/favicon.svg), but viewBox-trimmed to its ink bounds
  (1237x1185+136+166 of a 1500x1500 canvas — the raw file is ~20% padding, so a CSS
  height on it would lie) and fill="currentColor" instead of a hardcoded #2C8C99, so it
  inherits .nav-logo's colour and flips to white on the teal footer bar for free.
  NOTE: the svg is rendered by a child component, so it never receives Nav.astro's scope
  attribute — its size rule MUST be `:global(.nav-mark)` or it silently computes to
  height:0 and the logo disappears.
  The "Shauna." wordmark (black/white with a teal accent period) is retained in the
  FOOTER — it's where the full name now lives.
- The nav mark carries no name, so the hero reintroduces it: the eyebrow reads
  "Hi, I'm Shauna". It replaced "Designer · Developer · AI App Builder", which was
  already the opening of the subhead directly beneath it.
- Buttons: .btn-primary is outlined at rest (white fill, black label/border) with a solid
  teal shape of the same silhouette offset up-right behind it; on hover/focus the shape
  slides home and the button takes the teal fill. The shape is a zero-blur box-shadow, NOT
  a pseudo-element — it inherits border-radius so it can never drift from the button's
  shape. Offset is tunable via --btn-offset.
- Nav: translucent white by default; swaps to a teal bar with white logo/links (and the CTA
  inverted to a white pill) once you reach the FOOTER. Keyed to the footer coming into view,
  not to overlapping a dark section — the nav is fixed to the top and a short desktop footer
  never physically reaches it. Do not re-add mid-page flips; Shauna rejected that.
- Motion: respect prefers-reduced-motion (global.css already guards it).

## Structure / conventions
- Homepage sections are components: Nav, Hero, Work, About, ServiceCards, Contact, Footer.
- Hero line: "I build websites, web apps, & AI tools" — no trailing period. "build" is
  emphasized + accent underline. "& AI tools" is wrapped in a .nb (white-space: nowrap)
  span so it wraps to line 2 as a unit — don't replace this with a hard <br>.
- Work is DATA-DRIVEN from src/data/projects.json. Each project has an id, frame, tint,
  role/timeline/scope, problem/whatIDid/outcome, stats, tools.
- Media treatments live in ONE place: src/components/ProjectFrame.astro. Both the homepage
  card (ProjectCard) and the case-study hero (work/[slug].astro) render it, so the two can
  never show different screenshots. Add treatments there, not in either consumer.
  frame = "browser" | "photo" | "combo" | "triptych":
    browser  — single image in browser chrome (uses `image`)
    photo    — single framed image (uses `image`)
    combo    — website in browser chrome + overlapping phone (`laptopImage` + `phoneImage`)
    triptych — three phones, centre raised (`phoneImages` array; empty slots render
               "screen N" placeholders, ready for screenshots)
- Case studies generate from src/pages/work/[slug].astro (one page per project).
  To add a project: add a JSON entry — the card AND case-study page appear automatically.
- Elements that carry .container must NOT use the `padding` shorthand — its 0 inline values
  override .container's horizontal padding (Astro scoped selectors outrank .container) and
  the content goes flush to the viewport edge. Use padding-block / padding-top instead.
- Blog (src/content/blog + src/pages/blog) is untouched by the redesign. Keep it intact.
- Icon set: custom line icons (outline default, solid = active). Use OFFICIAL GitHub/
  LinkedIn marks in production; custom set for everything else.

## Deploy
- Netlify, auto-deploys on push to `main`. Preview via Netlify CLI before promoting.
- Netlify project is "byshauna" (id f63775ef-f653-4328-bf37-d5270d1882f2) on the PERSONAL
  account shauna.coy@gmail.com — NOT the AAO account, which has no portfolio site.
- NEVER push to main without Shauna's approval. See DEPLOY.md.
