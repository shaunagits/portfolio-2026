# HANDOFF — Portfolio  (overwrite each session; keep < 40 lines)
updated 2026-09-30

## State: live site SHIPPED & IN SYNC; homepage REDESIGN IN PROGRESS (design file only)
- `main` == GitHub == prod (Netlify "byshauna", PERSONAL account shauna.coy@gmail.com). Push to
  `main` = prod deploy. Only branch on GitHub: `main`. Live hero = Shauna's 2026-09-29 copy.
- NEXT BIG THING: build the redesigned homepage from the design file (Claude Design canvas
  "shauna.digital homepage", https://claude.ai/artifact/CRouzXr7KHiGQ6yNnwELaD). 4 artboards:
  desktop part 1/2, phone part 1/2 (canvas caps an artboard at 8000px tall, so pages are split).
  Sections: Hero, 01 Selected work (Feature + Index), 02 What I do, 03 How I work,
  04 Experience, 05 About ("I'm Shauna."), 06 Client services, 07 Work With Me, footer.
  Details + reasoning: DECISIONS.md 2026-09-30. Nothing from it is in code yet.
- Fonts IN THE DESIGN: Funnel Display / Archivo / Space Grotesk. LIVE SITE is still
  Fraunces / Inter / JetBrains Mono. Switch fonts only when the redesign ships.

## On hold (Shauna's call, do not chase)
- Where "Work With Me" in Client services goes (/services page vs contact form).
- Where "View Résumé" goes (no résumé exists yet). Experience dates (keep "6 years").
- New projects + images for Selected work (she will supply). Portal needs 3 phone
  screenshots (frames show placeholders). Featured titles are deliberately GENERIC: no
  client/product names (no AAO, Gradient, etc.); screenshots still show names.
- Unanswered: "faf" (which project?), genericise AAO problem line?, generic names in
  "More work" (LaunchKit/Nike/Apple)?, drop "What I do" intro line?

## Domains
- shauna.digital is the MAIN address again (Shauna, 2026-09-29); shauna.dev becomes a separate
  dev/building portfolio (other session). NOT DONE IN CODE: `site:` in astro.config.mjs and
  Layout og:image still say shauna.dev; links.astro canonical + footer label say shauna.dev/links.
  Netlify primary is already shauna.digital. Decide where /links lives before changing.
- Old DOMAIN-SWAP.md steps 3/4 are moot now that shauna.digital stays primary.

## Flagged, NOT changed
- Contrast: .btn-primary/.nav-cta hover white on #2C8C99 = 3.95:1 (fails AA). One-token fix.
- Email MX is Google (smtp.google.com); confirm, then DreamHost can go and CLAUDE.md be fixed.

## Gotchas (rest in CLAUDE.md)
- No em/en dashes in customer-facing copy (Shauna's rule). Title case on buttons.
- Cloud sessions can push branches/main but CANNOT delete remote branches (proxy blocks it).
- CSP is tight (Formspree only; fonts.googleapis/gstatic only). Dev server: portfolio-alt :4333.
- Design canvas: artboard max 8000px; measure with fallback fonts, fonts load late there.
