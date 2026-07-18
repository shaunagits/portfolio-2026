# HANDOFF — Portfolio  (overwrite each session; keep < 40 lines)
updated 2026-07-17

## State: SHIPPED & IN SYNC
- Live at https://shauna.digital. main == GitHub == prod at the latest commit; tree clean.
  Push to `main` = auto-deploy to prod (see DEPLOY.md). Netlify project "byshauna"
  (id f63775ef-f653-4328-bf37-d5270d1882f2), PERSONAL account shauna.coy@gmail.com — NOT AAO.
- Durable design rules + reasoning live in CLAUDE.md and DECISIONS.md. Read those first.
- NOTE: GitHub repo renamed to shaunagits/portfolio-2026; `origin` still points at the old URL
  (push works via redirect). Update the remote when convenient.

## Done this session (all live)
- HERO: centres on large screens (>=1024px) to kill the empty right-half; left-aligned below.
  Snappier reveal (--dur 0.7s->0.45s, translateY 24->14px, delays halved). CTA hierarchy
  swapped — "Work With Me" is now the teal primary (goal = contact), "See the Work" secondary.
  Availability badge -> "Booking Q4 · limited spots" (date-bound; refresh after Q4).
- DASHES REMOVED site-wide (Shauna: em/en dashes read as an AI tell). All 17 built pages are
  dash-free — prose -> commas/periods/colons; "NN —" section labels -> "NN ·"; ranges -> "to";
  titles/badges/meta -> "·". Blog prose + blog/case-study title templates included. KEPT
  compound-word hyphens (full-stack, 60-day) and code comments. If re-adding copy, no em dashes.
- LAUNCHKIT triptych filled: 3 mobile shots of the live LaunchKit store (product / home centre /
  collection) at public/images/launchkit-phone-1..3.jpg, wired via projects.json phoneImages.
  TEMP PLACEHOLDERS until Shauna does real product screenshots. Captured via Playwright login
  (store is password-gated); optimised to ~150KB each.
- Earlier this session (also live): footer GitHub/LinkedIn OFFICIAL marks; blog components
  restyled off the retired green #0D6B4A onto teal tokens (they ship on 5 blog pages — the old
  "dead code / no off-palette hex" note was WRONG). og-image teal; hosting topology documented.

## Open / next (nothing broken, nothing urgent)
- LAUNCHKIT: swap the temp store screenshots for real product/kit shots when ready (same 3 paths).
  Nike/Apple project images are also still the originals.
- EMAIL MIGRATION (decided, not started): @shauna.digital DreamHost -> Google Workspace. DNS +
  mailbox only; Netlify web unaffected. Order: (1) Workspace signup + verify TXT; (2) in NAMECHEAP
  swap MX to Google's 5 + set SPF/DKIM/DMARC; (3) import old mail via Google IMAP tool; (4) only
  then cancel DreamHost email. Do 3 before 4. Claude supplies exact records; Shauna applies them.
- Eyeball: is the client-credit line on the cards loud enough for Nike/Apple? (Shauna's call.)

## Gotchas (rest in CLAUDE.md)
- CSP is tight (form-action = Formspree only). If a font/form silently breaks, suspect netlify.toml.
- A child-component <svg> taking a `class` needs `:global(...)` for its size rule or Astro scopes
  it to height:0 (bit the nav logo once).
- Preview pane freezes transitions + resets scroll on screenshot — verify via computed styles /
  DOM, or a Netlify draft in a real browser.
- Markdown has smartypants ON: `--`/`---` in blog prose would render as en/em dashes. Avoid them.
- Portfolio dev server is portfolio-alt :4333 (launch.json also defines portfolio :4321, but
  another local project may occupy 4321 — check the tab title says "Shauna").
