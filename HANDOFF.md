# HANDOFF — Portfolio  (overwrite each session; keep < 40 lines)
updated 2026-07-17

## State: LOCAL CHANGES — awaiting approval to ship
- Uncommitted (tree dirty): (1) footer GitHub/LinkedIn swapped to OFFICIAL marks;
  (2) blog components restyled off the retired green onto teal tokens. Build clean (17 pages),
  verified on dev :4333 via computed styles. NOT pushed. See "Done this session".
- Live at https://shauna.digital. Before these edits: main == GitHub == prod at latest commit.
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
- Eyeball: is the client credit line on the cards loud enough for Nike/Apple? (Shauna's call.)
- DONE this session (LOCAL, not yet shipped — awaiting approval):
  - Footer GitHub/LinkedIn now use OFFICIAL marks (octicon mark-github 16x16 + LinkedIn "in"
    bug 24x24), filled via .brand class; Blog keeps the custom .line stroke icon. All inherit
    footer colour (white on dark) and flip teal on hover.
  - Blog components RESTYLED off the retired green. CORRECTION: the prior handoff's "never
    bundled / no off-palette hex ships" was WRONG — #0D6B4A (plus #0a5239, cream #ece9e0,
    pale-green tints) shipped live on 5 blog pages. Not dead code; the components are imported
    by 5 .mdx posts. Kept the blog intact and remapped every hardcoded hex to teal tokens
    (--primary fills/borders, --accent-ink for small text incl. the step-number badge → white
    text now 6.22:1 AA, --primary-50/100 tints). Semantic red/amber status colours in the cost
    table left as-is (not the retired accent). Verified: retired hexes gone from dist.
- DONE earlier: og-image redrawn in teal (live); hosting topology documented.

## Gotchas (the rest are in CLAUDE.md)
- CSP is tight (form-action = Formspree only). If a font/form silently breaks, suspect netlify.toml.
- A child-component <svg> that takes a `class` needs `:global(...)` for its size rule, or
  Astro scoping computes it to height:0 and it vanishes (bit the nav logo once).
- The in-app preview pane freezes CSS transitions and blanks screenshots — verify CSS by
  reading computed styles (set transition:none first), or use a Netlify draft in a real browser.
- Two dev servers in launch.json (portfolio :4321, portfolio-alt :4333) because separate
  sessions each start one; either serves the same site.
