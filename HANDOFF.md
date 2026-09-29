# HANDOFF — Portfolio  (overwrite each session; keep < 40 lines)
updated 2026-09-29

## State: SHIPPED & IN SYNC
- `main` == GitHub == prod. Netlify project "byshauna"
  (id f63775ef-f653-4328-bf37-d5270d1882f2), PERSONAL account shauna.coy@gmail.com, NOT AAO.
  Push to `main` = auto-deploy to prod (see DEPLOY.md). Build is 22 pages.
- Durable design rules + reasoning live in CLAUDE.md and DECISIONS.md. Read those first.
- GitHub repo is shaunagits/portfolio-2026; `origin` points at it directly.

## Domains — THE SWAP IS HALF DONE (verified live 2026-09-17)
- **THIS REPO SERVES shauna.dev AGAIN.** The 2026-08-13 move out to its own repo was
  REVERSED on 2026-08-19: the link-in-bio page is a real page here at
  `src/pages/links.astro` (data: `src/data/links.json`), the `shauna-dev` Netlify
  project is DELETED, and shaunagits/shauna.dev is a retired repo (not archived, so it
  is still pushable). CUTOVER-shauna-dev.md is double-superseded history; ignore it.
- **What is actually live:** shauna.dev, www.shauna.dev, shauna.digital and
  www.shauna.digital ALL serve this site. Canonical + og:url say `https://shauna.dev`
  on every page (`site:` in astro.config.mjs).
- **Two DOMAIN-SWAP.md steps never ran.** Netlify's `custom_domain` (primary) is STILL
  `shauna.digital`; shauna.dev + www are aliases. So shauna.digital answers 200 instead
  of 301-ing to shauna.dev, and the two domains are duplicate content, mitigated only by
  the canonical tag. Step 4 also never ran: shauna.dev is still PROXIED at Cloudflare
  (apex + www resolve to 172.67.137.65 / 104.21.86.222, `server: cloudflare`, and it is
  served on a Google Trust Services cert, not Netlify's). It works, but Netlify's own
  Let's Encrypt cert (all four names, expires 2026-10-31) is not what visitors get on
  shauna.dev. To finish: DOMAIN-SWAP.md steps 3 (Set as primary) and 4 (proxy to DNS
  only + Full strict). UI only, never the API, and mind the 3-aliases-per-hour quota.

## Done 2026-09-29 — SHIPPED
- NEW HERO COPY (Shauna's): eyebrow "Hi, I'm Shauna · Product designer + developer",
  H1 "I design software people can trust, and I build it too.", two subhead paragraphs,
  CTAs See My Work (primary) / Work With Me. Layout unchanged. Verified at 1440/1024/768/390,
  no horizontal overflow. Pushed to main from a cloud session (repo access granted).
- A "field-notes" full redesign was prototyped on branch redesign-field-notes (PR #1) and
  DROPPED by Shauna the same day. If that remote branch still exists, it is safe to delete.

## Done 2026-09-17 — SHIPPED
- ETSY REMOVED everywhere (abda02a): the social icon + its SVG, the LaunchKit bar tag
  ("Etsy & Shopify" -> "Shopify"), and the LaunchKit case study (summary, urlLabel,
  outcome, stats, tools) in projects.json + copy-final-local.md. `grep -ri etsy src/`
  is comments only; no "etsy" in dist/links or dist/work/launchkit.
- A11Y FIXED (approved, was flagged-not-fixed since 2026-08-12): white on --primary
  #2C8C99 is 3.95:1 and fails AA. The "Shop LaunchKits" bar at rest and the "Get in
  touch" hover/active/focus fill now use --primary-hover #1F6A75 = **6.22:1**. No new
  hue (DECISIONS.md palette lock holds). Verified by computed style, not screenshot.
- MOBILE SOCIALS grid was repeat(4, 1fr) with 6 icons (4+2). Now repeat(3, 1fr) = 3+3,
  no horizontal overflow at 375px.
- LINK AUDIT, all 13 URLs re-verified 200 over HTTPS, nothing dead, no Namecheap URL
  Forward parking pages. launchkit.us now RESOLVES (it did not on 2026-08-12) and 301s
  apex -> www. The Countdown Project naming mismatch is GONE: the site brands itself
  "The Countdown Project" now, so the bar label matches. Stale `_note` dates updated.
- Contact status "Taking a few projects for Q4" -> "Booking into Q4" (Shauna's call).

## Flagged, NOT changed (need Shauna's call)
- SAME CONTRAST BUG SITE-WIDE: `.btn-primary` and `.nav-cta` hover/focus fill white on
  #2C8C99 at 14px/500 = normal text = 3.95:1, fails AA. Three buttons on the homepage
  ("Work With Me" x2, "Get In Touch"). Same one-token fix would apply; not done because
  it changes the whole site's button gesture, not one page.
- CLAUDE.md's hosting block says @shauna.digital email is DreamHost. Live MX is
  `smtp.google.com` — the Google Workspace migration evidently HAPPENED. Confirm, then
  DreamHost can be cancelled (that was the blocker) and CLAUDE.md corrected.
- shaunagits/shauna.dev is not archived. Archiving is the last step of the retirement.

## Open / next (nothing broken)
- LAUNCHKIT: swap temp store screenshots for real product/kit shots (same 3 phoneImages
  paths). Apple project images are still the originals. GRADIENT: real shots when ready.
  nike-lenox-court.jpg + gradient-website-desktop.png are committed but UNUSED.
- Island Bound Hawaiʻi stays under "Building now" (Shauna's call 2026-09-17). No domain
  registered, repo pre-implementation.
- portal.shauna.digital still serves the client portal; its new home (likely
  portal.threadhawaii.com) is a separate decision.

## Gotchas (rest in CLAUDE.md)
- CSP is tight (form-action = Formspree only). If a font/form silently breaks, suspect netlify.toml.
- A child-component <svg> taking a `class` needs `:global(...)` or Astro scopes its size to height:0.
- Preview pane freezes transitions + resets scroll on screenshot — verify via computed styles / DOM.
- Smartypants is ON: `--`/`---` in blog prose renders as en/em dashes. No em/en dashes anywhere (AI tell).
- PUSH 403 "denied to PeopleEngineer"? gh has 3 accounts; active can flip. Only `shaunagits` pushes here.
- Portfolio dev server is portfolio-alt :4333 (launch.json also defines portfolio :4321).
