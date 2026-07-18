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
- EMAIL MIGRATION (decided, not started): move @shauna.digital email DreamHost -> Google
  Workspace. Web hosting (Netlify) is unaffected — this is DNS + mailbox only. Order:
    1. Sign up for Google Workspace, add shauna.digital, verify (a TXT record).
    2. In NAMECHEAP (the DNS host — not Netlify/DreamHost) swap MX to Google's 5 records,
       and set SPF/DKIM/DMARC TXT records Google provides.
    3. Import old mail from DreamHost via Google's IMAP/data-migration tool.
    4. Only after mail flows + old mail imported: cancel DreamHost email.
  Do steps 3 before 4 (don't lose old mail); do the MX swap in a quiet hour (brief split-delivery
  window). Claude must NOT edit live DNS or billing — hand Shauna the exact records to paste.
- LaunchKit triptych = empty "screen 1/2/3" placeholders. Fill via launchkit `phoneImages`
  (3 image paths) in projects.json. Nike/Apple project images are also still the originals.
- Footer GitHub/LinkedIn glyphs are custom — swap for OFFICIAL marks before relying on them.
- Eyeball: is the client credit line on the cards loud enough for Nike/Apple? (Shauna's call.)
- Dead code: blog components (BlogTable/BlogCallout/blog/*) use old green #0D6B4A but are
  never bundled (verified — no off-palette hex ships). Delete or restyle someday.
- DONE this session: og-image redrawn in teal (live); hosting topology documented.

## Gotchas (the rest are in CLAUDE.md)
- CSP is tight (form-action = Formspree only). If a font/form silently breaks, suspect netlify.toml.
- A child-component <svg> that takes a `class` needs `:global(...)` for its size rule, or
  Astro scoping computes it to height:0 and it vanishes (bit the nav logo once).
- The in-app preview pane freezes CSS transitions and blanks screenshots — verify CSS by
  reading computed styles (set transition:none first), or use a Netlify draft in a real browser.
- Two dev servers in launch.json (portfolio :4321, portfolio-alt :4333) because separate
  sessions each start one; either serves the same site.
