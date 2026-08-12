# HANDOFF — Portfolio  (overwrite each session; keep < 40 lines)
updated 2026-08-12

## State: PROD IS CLEAN; UNMERGED WORK ON BRANCH `links-page`
- Live at https://shauna.digital. `main` == GitHub == prod at commit a25ca62; tree clean.
  Push to `main` = auto-deploy to prod (see DEPLOY.md). Netlify project "byshauna"
  (id f63775ef-f653-4328-bf37-d5270d1882f2), PERSONAL account shauna.coy@gmail.com, NOT AAO.
- Durable design rules + reasoning live in CLAUDE.md and DECISIONS.md. Read those first.
- GitHub repo is shaunagits/portfolio-2026; `origin` points at it directly.
- BRANCH `links-page` (2 commits, NOT pushed, NOT deployed) holds the shauna.dev
  link-in-bio page. See "Done this session" below and CUTOVER-shauna-dev.md.

## Done this session (2026-08-12) — branch `links-page`, nothing shipped
- LINK-IN-BIO PAGE at src/pages/links.astro, data-driven from src/data/links.json
  (5c32618). Ported from links-mockups/03-editorial-bento.html. Destined for
  https://shauna.dev/. Build goes 21 -> 22 pages; NO existing file was modified.
- THE MOCKUP'S `--primary-deep` IS A TRAP: it redefined it as #1F6A75 deep teal, but
  global.css defines --primary-deep as var(--ink). A literal port fills every .dark/
  .tint hover BLACK. Used --primary-hover (same #1F6A75, already means "deeper teal
  for hover"). Verified live: focused bar computes background rgb(31,106,117).
- A11Y FIXED (approved): tag pills had opacity:.5 on the whole element, dimming the
  LABEL too — 3.5:1 on white bars, 2.2:1 on tint. Moved the fade to border-color only;
  now 18.65:1 and 5.75:1. Footer links were 18px tall; now min-height:44px.
- A11Y FLAGGED, NOT FIXED (Shauna's call, both inherited): LaunchKit bar at rest and
  the "Get in touch" hover fill are both white on #2C8C99 = 3.95:1.
- CUTOVER STAGED, NOT EXECUTED (3208bdd): Option A, host-based 200 rewrite, canary on
  www.shauna.dev only; apex still 301s. Rule ORDER is load-bearing — /_astro/* must
  pass through 200 BEFORE the catch-all 301, or the CSP (style-src 'self') blocks the
  two stylesheets and the page renders unstyled. Runbook: CUTOVER-shauna-dev.md.
- A host-keyed rule CANNOT be tested on a draft deploy (draft answers on a different
  hostname, so the rule never matches). Draft proves the page; prod proves the rule.
- STILL BLOCKED: 7 URLs never supplied (LaunchKit shop, Instagram, TikTok, Pinterest,
  Substack, Etsy, Amazon). They ship as non-anchor dashed placeholders. Also, 5 social
  icons are approximations, not official brand marks (CLAUDE.md requires official).
- STALE FACTS CORRECTED: shauna.dev DOES now have MX records (Namecheap email
  forwarding, eforward1-5.registrar-servers.com) — the 2026-08-02 note below says it
  has none. The "add Blog to the nav?" open question below was already shipped as
  68a76f9 ("Writing"). The leftover Namecheap 192.64.119.48 A record is confirmed GONE.

## Done this session (2026-08-02, live, pushed 8926823)
- SECOND DOMAIN shauna.dev (bought 2026-07-30 at Namecheap) now 301-redirects to shauna.digital,
  path-preserving, all four host/scheme combos. Two moving parts: (1) shauna.dev + www.shauna.dev
  added as Netlify domain ALIASES on "byshauna" so Netlify answers for them and can hold the TLS
  cert; (2) four `[[redirects]]` blocks in netlify.toml with `force = true` (needed, since the
  pages DO exist in the deploy, so without force Netlify would serve shauna.dev as duplicate
  content instead of redirecting). DNS in Namecheap is A `@` -> 75.2.60.5 and CNAME `www` ->
  byshauna.netlify.app, same as shauna.digital.
- SSL: nothing purchased. Netlify's existing Let's Encrypt cert was RENEWED to add the two new
  names (SAN now covers all four; expires 2026-10-31). The renew is NOT the provision endpoint:
  `POST /sites/{id}/ssl` returns 422 "certificate parameter is required" because bare POST means
  a CUSTOM cert upload. The one that works is `POST /sites/{id}/ssl/renew`, then poll until
  `domains` includes shauna.dev (took ~30s).
- GOTCHA that cost most of this session: the Namecheap zone kept serving a SECOND apex A record,
  192.64.119.48, alongside the Netlify one, so ~half of requests hit a Namecheap 404 and
  Let's Encrypt could not validate. It was a leftover URL Redirect Record (the IP self-identifies
  via `X-Served-By: Namecheap URL Forward`). Diagnosing by SOA serial was a DEAD END: Namecheap
  does NOT bump the zone serial on edits, so an unchanged serial does not mean the edit failed.
  Check the A record set at dns1/dns2.registrar-servers.com directly instead.
- shauna.dev has NO email records. If @shauna.dev mail is ever wanted that is a separate MX setup.
  [SUPERSEDED 2026-08-12: it now HAS MX records — Namecheap email forwarding,
  eforward1-5.registrar-servers.com. Untouched by this work, but they would collide with
  any real mail host on that domain.]

## Done 2026-07-27 (live, pushed 29739d6)
- NEW BLOG POST "What the World Has Learned About Stray Dogs, and What Oʻahu Can Do in Its Own
  Backyard" at src/content/blog/what-the-world-has-learned-about-stray-dogs.md. From Shauna's
  research draft on Bahrain / Netherlands / Bhutan / Turkey + 6 Oʻahu actions. 2,185 words,
  "9 min read" (longest post by far; others are 4-5 min). NEW CATEGORY "Community" — first post
  not in Personal/Process/Resources/Web Strategy. Source draft was full of em dashes; all removed
  (verified 0 in file AND 0 in rendered DOM). Formatted to the blog CSS limits: h2 only (no h3
  style exists), NO ordered lists (li::before dots every li, so numbered items are h2s instead),
  `---` rules between sections, 17 source links in a ul.
- COMPANION POST "Six Ways to Scale Spay and Neuter in Hawaiʻi, and What Each Would Actually Take"
  (7a3164b), Community, 11 min. Implementation brief to the essay above; links to it inline.
  Shauna will say later how/whether to merge the two. VERIFIED against primary sources first and
  CORRECTED her source research twice: (1) Bhutan is ~$58/animal ($3.55M / 61,680 sterilizations
  in the 2022-23 push), NOT the ~$24 that floats around — that divides the push's budget by the
  150,000 lifetime HSI-partnership figure; (2) the "70% TNR threshold" is a dog/rabies herd-
  immunity number misapplied to cats (feline lit: ~80% to stabilize, 93-95% sustained).
  HRS 471-2(8)/471-9.5/471-9.6 confirmed. UNVERIFIED and flagged in-post: The Fix Is In, RAVS.
- KNOWN NIT in post 1 (not fixed, Shauna reviewing): it bundles the 95% vaccination + 32,000
  microchip figures under "across the full project", but those belong to the 2022-23 accelerated
  phase; only the 150,000 sterilizations are lifetime.
- DEPLOY.md step 2 page count is now DERIVED, not a hardcoded 17 (0f92f7c). Build is 21 pages
  = 1 home + 1 blog index + 13 posts + 6 projects. A DROP is the real signal; growth is content.
- OPEN QUESTION — RESOLVED, shipped as 68a76f9: Blog is in the nav, labelled "Writing".
  (Original note kept for context.) Add Blog to the nav? Only footer-linked today. Rec was
  label it "Writing" now, keep "Library" for later if lead magnets land. NOTE: lead magnets need
  email capture and netlify.toml CSP is `form-action https://formspree.io` with no 'self' — a
  ConvertKit/Buttondown/Mailchimp form will be silently blocked until that line is updated.

## Done prior session (2026-07-25, live, pushed d1f8a38)
- LOGO ANIMATION (src/components/LogoS.astro): entrance made slower + bolder. The S BODY now
  arrives WITH the streaks (s-arrive: 0.8s slide -45% + scale 0.92->1 from the left), streaks
  TRAIL in after it settles (streak-in 0.65s, delay 0.18s + i*0.085s, from -320%). Added
  HOVER/FOCUS REPLAY via a small Astro-bundled (CSP-safe) script on any svg.is-animated (finds
  closest <a> as hotspot; strips inline animation, reflows, re-applies). Reduced-motion guarded
  (global CSS + the script bails). Verified live on prod via WAAPI (replay fires fresh at t:0).
- NIKE CASE STUDY: real Lenox photos replace the placeholder; detail section upgraded from a
  single stacked shot to a responsive 2-col CAPTIONED gallery (.cs-gallery, 3:2 object-fit
  cover, collapses to 1 col <720px). detailImages now carry an optional `caption`. Two shots
  used (mannequins, gold-hoop); public/images/nike-lenox-court.jpg is committed but UNUSED
  (safe to delete or use as a 3rd tile). This was uncommitted WIP in the tree, now shipped.

## Done earlier (2026-07-24, pushed 82e21ea) — condensed, see git log for detail
- Gradient project added to projects.json (2nd, COMBO frame); ProjectFrame alt text made
  data-driven (phoneAlts[] / laptopAlt / phoneAlt); "How This Site's Design System Works"
  blog post; Hawaii post time-zone fix (Hawaii runs BEHIND the mainland: calls in her morning,
  deep work afternoon/evening); GitHub profile README (separate repo shaunagits/shaunagits).
- gradient-website-desktop.png is committed but UNUSED (combo has 2 slots), safe to delete.
  To feature the website as laptop hero AND keep the app visible, need a PORTRAIT app shot.

## Open / next (nothing broken)
- LAUNCHKIT: swap temp store screenshots for real product/kit shots (same 3 phoneImages paths).
  Apple project images are still the originals. GRADIENT: real shots when ready. (Nike now has
  real Lenox photos; nike-lenox-court.jpg is committed-but-unused, ready as a 3rd gallery tile.)
- EMAIL MIGRATION (decided, not started): @shauna.digital DreamHost -> Google Workspace. DNS +
  mailbox only; Netlify web unaffected. Claude supplies exact Namecheap records; Shauna applies them.

## Gotchas (rest in CLAUDE.md)
- CSP is tight (form-action = Formspree only). If a font/form silently breaks, suspect netlify.toml.
- A child-component <svg> taking a `class` needs `:global(...)` or Astro scopes its size to height:0.
- Preview pane freezes transitions + resets scroll on screenshot — verify via computed styles / DOM.
- Smartypants is ON: `--`/`---` in blog prose renders as en/em dashes. No em/en dashes anywhere (AI tell).
- PUSH 403 "denied to PeopleEngineer"? gh has 3 accounts; active can flip. Only `shaunagits` pushes
  here (it was already active this session). Fix: `gh auth switch --user shaunagits`, push, switch back.
- Portfolio dev server is portfolio-alt :4333 (launch.json also defines portfolio :4321).
