# HANDOFF — Portfolio  (overwrite each session; keep < 40 lines)
updated 2026-07-16 (session close)

## State: SHIPPED & IN SYNC
- Live at https://shauna.digital. main == GitHub == prod at the latest commit; tree clean.
  Push to `main` = auto-deploy to prod (see DEPLOY.md). Netlify project "byshauna"
  (id f63775ef-f653-4328-bf37-d5270d1882f2) on the PERSONAL account shauna.coy@gmail.com —
  NOT the AAO account (which has no portfolio site).
- Durable design rules + the reasoning behind every choice live in CLAUDE.md and
  DECISIONS.md. Read those first; this file is just current state.

## Done this session (all live)
- Palette LOCKED: black + white + #2C8C99 teal; neutrals hue-shifted (--ink #0B1416,
  --ink-soft #55656A). Three RGB triplets are the only colour literals; ramp --primary-50/100/200.
- Offset-shape buttons: primary fills TEAL, secondary fills INK, nav CTA uses the primary
  treatment (its shape swaps teal→ink on the footer bar). All share one --btn-offset gesture.
- Nav flips to a teal bar at the FOOTER only; S logomark in nav; hero eyebrow "Hi, I'm Shauna".
- ProjectFrame.astro = single source of truth for card + case-study media.
- New S-mark favicon + .ico + apple-touch-icon in teal.
- Project names rewritten work-first; client (incl. Nike/Apple) moved to a credited meta line
  on card + case study, out of the header. New client/clientLabel fields in projects.json.
- Contact form = Formspree (VERIFIED end-to-end); og tags + theme-color fixed; netlify.toml
  adds CSP + security headers + caching.

## Open / next (nothing broken, nothing urgent)
- og-image.jpg loads but is still the OLD cream artwork — redo in teal (it's the share/link preview).
- LaunchKit triptych = empty "screen 1/2/3" placeholders. Fill via launchkit `phoneImages`
  (3 image paths) in projects.json. Nike/Apple project images are also still the originals.
- Footer GitHub/LinkedIn glyphs are custom — swap for OFFICIAL marks before relying on them.
- Eyeball: is the client credit line on the cards loud enough for Nike/Apple? (Shauna's call.)
- Dead code: blog components (BlogTable/BlogCallout/blog/*) use old green #0D6B4A but are
  never bundled (verified — no off-palette hex ships). Delete or restyle someday.

## Gotchas (the rest are in CLAUDE.md)
- CSP is tight (form-action = Formspree only). If a font/form silently breaks, suspect netlify.toml.
- A child-component <svg> that takes a `class` needs `:global(...)` for its size rule, or
  Astro scoping computes it to height:0 and it vanishes (bit the nav logo once).
- The in-app preview pane freezes CSS transitions and blanks screenshots — verify CSS by
  reading computed styles (set transition:none first), or use a Netlify draft in a real browser.
- Two dev servers in launch.json (portfolio :4321, portfolio-alt :4333) because separate
  sessions each start one; either serves the same site.
