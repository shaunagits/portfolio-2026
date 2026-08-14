# CUTOVER — serving the link-in-bio page at shauna.dev

> ## SUPERSEDED 2026-08-14 — everything below is history
>
> **This repo no longer serves shauna.dev, and `/links` no longer exists here.**
> On 2026-08-13 the page moved to its own repo and Netlify project
> (`shauna-dev`, from `github.com/shaunagits/shauna.dev`) with its own
> certificate. `src/pages/links.astro`, `src/data/links.json` and every
> host-keyed rule in `netlify.toml` were deleted; `/links` is now a 301 to
> `https://shauna.dev/`. The build is back to 21 pages.
>
> **Do not follow the rollback below.** It restores `netlify.toml` to a state
> that rewrites shauna.dev traffic here, and this site no longer holds that
> domain — the rules would be dead at best and confusing at worst.
>
> To change the link-in-bio page, edit `src/data/links.json` **in the other
> repo** and push. The current runbook is `CUTOVER.md` there.
>
> Kept because it records why the rules were shaped the way they were, and the
> asset-passthrough trap is still worth knowing if host rules ever come back.

Status (historical): **EXECUTED AND VERIFIED LIVE 2026-08-12** (prod commit e26a6a5).
shauna.dev and www.shauna.dev both serve `/links`. This file is now a record
plus the rollback procedure, not a pending runbook.
Approach: Option A (host rewrite, one codebase). Shauna's call: **both hosts at
once, no canary.**

Verified live at cutover: both roots `200 text/html`; both `/_astro/`
stylesheets `200 text/css` same-origin; `/blog` and `/work/*` still `301`;
shauna.digital unaffected; `http://` upgrades to the same host; canonical is
`https://shauna.dev/`; zero console errors under the live CSP; cert SAN still
covers all four names, expires 2026-10-31.

## What this does

`shauna.dev` and `www.shauna.dev` currently 301 to `shauna.digital`. After
cutover both **serve** `/links` at their own URL via a **200 rewrite**, so the
page keeps the `shauna.dev` address. `shauna.digital` is untouched; `/links`
stays reachable there too and points its canonical at `shauna.dev`.

No DNS change. No new certificate. The existing Let's Encrypt cert already
covers all four hostnames (expires **2026-10-31**).

## Why the rules look the way they do

Netlify takes the **first matching rule**, so order is load-bearing. Three
things bite here, and all three are handled in `netlify.toml`:

1. **The root rewrite needs `force = true`.** `/` exists in the deploy as the
   portfolio homepage, so without force Netlify serves that and the rewrite
   never fires. Same reason the original 301s needed force.
2. **Assets must stay same-origin.** `/links` loads two real stylesheets from
   `/_astro/` (Astro inlined nothing), and the CSP in `netlify.toml` is
   `style-src 'self'` / `script-src 'self'`. If the catch-all 301 caught those
   files and sent them to `shauna.digital`, the browser would block them and
   the page would render **completely unstyled**. The `/_astro/*` passthrough
   sits above the catch-all specifically to prevent this. **This is the check
   most worth running after deploy.**
3. **Everything else must still bounce.** Without the catch-all, `/blog`,
   `/work/*` etc. would serve on `shauna.dev` as duplicate content.

The `http://` rules now upgrade to the **same host** rather than jumping to
`shauna.digital`, which would have skipped the rewrite entirely.

## Known limitation, read before deploying

A host-keyed rule **cannot be proven on a Netlify draft deploy**, because the
draft is served on a different hostname (`<hash>--byshauna.netlify.app`) and
the rule never matches there. A draft proves the *page*; only prod proves the
*rule*. The page itself was verified on draft
`6a7cf1e84d0da69e424afb22--byshauna.netlify.app` (styled, correct CSP, zero
console errors). What is unverified until prod is the rewrite.

Since the canary was skipped, the first time these rules run is on the live
apex. Rollback is a `git revert` plus a redeploy and is live within a minute
(no DNS, no cert), so the exposure is short, but it is real.

---

## Deploy

Merge and let GitHub auto-deploy:

```bash
cd /Users/shauna/Desktop/claudecode/shauna.digital/portfolio && git checkout main && git merge links-page && git push origin main
```

Or deploy straight from the branch, then push so `main` doesn't lag prod:

```bash
cd /Users/shauna/Desktop/claudecode/shauna.digital/portfolio && netlify deploy --build --prod
```

## Verify, in this order

**1. Both roots serve the page.** Expect `HTTP/2 200` and
`content-type: text/html`, **not** a 301:

```bash
for u in https://shauna.dev/ https://www.shauna.dev/; do echo "== $u"; curl -sS -o /dev/null -D - "$u" | egrep -i '^(HTTP/|location:|content-type:)'; done
```

**2. The stylesheets stay same-origin.** This is the failure mode that renders
the page naked, so do not skip it. `content-type: text/css` and no `location:`
means it worked; a `location:` pointing at `shauna.digital` means the asset
passthrough is being skipped:

```bash
CSS=$(curl -sS https://shauna.dev/ | grep -o '/_astro/[^"]*\.css' | head -1)
curl -sS -o /dev/null -D - "https://shauna.dev$CSS" | egrep -i '^(HTTP/|location:|content-type:)'
```

**3. Other paths still bounce**, so there's no duplicate content:

```bash
curl -sS -o /dev/null -D - https://shauna.dev/blog | egrep -i '^(HTTP/|location:)'
```

**4. shauna.digital is unaffected:**

```bash
for u in https://shauna.digital/ https://shauna.digital/blog https://shauna.digital/links/; do printf '%-38s ' "$u"; curl -sSL -o /dev/null -w '%{http_code}\n' "$u"; done
```

**5. Open `https://shauna.dev/` in a browser** and confirm it is styled. If it
renders as unstyled text, that is check 2 failing: roll back and fix the rule
order rather than leaving it up.

---

## Rollback

Fully reversible, no DNS or cert involvement.

Restore the redirect config exactly as prod has it today, then redeploy:

```bash
cd /Users/shauna/Desktop/claudecode/shauna.digital/portfolio
git checkout a25ca62 -- netlify.toml    # a25ca62 = prod before this work
git commit -m "Roll back shauna.dev cutover"
netlify deploy --build --prod
```

That restores the plain 301s and shauna.dev goes back to redirecting. Deliberately
SHA-free on the cutover side: it resets `netlify.toml` to the known-good prod
state rather than assuming which commit introduced the problem.

To remove the page as well, delete `src/pages/links.astro` and
`src/data/links.json`; `/links` disappears and the build returns to 21 pages.
Nothing else references them.

Propagation is a Netlify deploy, not DNS, so rollback is live within a minute.

## Optional follow-up

Both hosts now serve the same page, which is two live copies. The canonical
tag points at `https://shauna.dev/`, so search engines consolidate on the
apex. If you'd rather have exactly one live copy, change the `www` root rule
in `netlify.toml` from the 200 rewrite to:

```toml
[[redirects]]
  from = "https://www.shauna.dev/"
  to = "https://shauna.dev/"
  status = 301
  force = true
```

## Still open at time of writing

- Seven URLs never supplied, shipping as visible placeholders: LaunchKit shop,
  Instagram, TikTok, Pinterest, Substack, Etsy shop, Amazon storefront.
- Five social icons are approximations, not official brand marks. `CLAUDE.md`
  requires official marks in production. Instagram, TikTok, Pinterest and
  Substack all publish brand kits with usage rules; the Etsy glyph is currently
  a Georgia "E". Swap before or shortly after cutover.
- Two known contrast failures, flagged and deliberately not fixed: the
  LaunchKit bar at rest and the "Get in touch" hover fill are both white on
  `#2C8C99` = 3.95:1.
- `shauna.dev` now has Namecheap email-forwarding MX records
  (`eforward1-5.registrar-servers.com`). `HANDOFF.md` said it had none. Nothing
  here touches mail, but the note was stale and those records would collide
  with any future real mail host on that domain.
