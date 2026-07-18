# HANDOFF — Portfolio  (overwrite each session; keep < 40 lines)
updated 2026-07-17

## State: SHIPPED & IN SYNC
- Live at https://shauna.digital. main == GitHub == prod at the latest commit; tree clean.
  Push to `main` = auto-deploy to prod (see DEPLOY.md). Netlify project "byshauna"
  (id f63775ef-f653-4328-bf37-d5270d1882f2), PERSONAL account shauna.coy@gmail.com — NOT AAO.
- Durable design rules + reasoning live in CLAUDE.md and DECISIONS.md. Read those first.
- GitHub repo is shaunagits/portfolio-2026 (renamed); `origin` now points at it directly — the
  old redirecting URL is gone.

## Done this session (all live)
- HERO: centres on large screens (>=1024px) to kill the empty right-half; left-aligned below.
  Snappier reveal (--dur 0.7s->0.45s, translateY 24->14px, delays halved). CTA hierarchy
  swapped — "Work With Me" is now the teal primary (goal = contact), "See the Work" secondary.
  Availability badge -> "Booking Q4 · limited spots" (date-bound; refresh after Q4).
- DASHES REMOVED site-wide (Shauna: em/en dashes read as an AI tell). All 17 built pages are
  dash-free — prose -> commas/periods/colons; "NN —" section labels -> "NN ·"; ranges -> "to";
  titles/badges/meta -> "·". Blog prose + blog/case-study title templates included. KEPT
  compound-word hyphens (full-stack, 60-day) and code comments. If re-adding copy, no em dashes.
- NAV LOGO animates on load: LogoS.astro now SPLITS the artwork into the S body (keeps its two
  interior counters + fill-rule evenodd) and the 6 speed-streaks, so the streaks fly in from the
  left, staggered 0.055s apart, 0.5s each, one-shot (`both`). Driven by the `animate` prop, which
  only Nav passes — any other use of the mark stays static. All paths inherit currentColor, so the
  entrance survives the teal->white footer flip (verified both states). Hover still deepens
  --primary -> --accent-ink. Reduced-motion handled globally. Verify animations in a REAL browser
  (Playwright/headless): the in-app preview pane holds the page hidden so the clock never advances.
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
- PUSH 403 "denied to PeopleEngineer"? The `gh` CLI has 3 accounts and the ACTIVE one can flip.
  Only `shaunagits` can push here. Fix: `gh auth switch --user shaunagits`, push, then switch back
  (`gh auth switch --user PeopleEngineer`) so the rest of the machine is left as found. Ask first.
- Portfolio dev server is portfolio-alt :4333 (launch.json also defines portfolio :4321, but
  another local project may occupy 4321 — check the tab title says "Shauna").
