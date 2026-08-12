# CUTOVER — serving the link-in-bio page at shauna.dev

Status: **NOT EXECUTED.** Nothing has been pushed or deployed to prod.
Written 2026-08-12. Approach: Option A (host rewrite, one codebase), canary on
`www` first. Approved by Shauna.

## What this does

`shauna.dev` currently 301s to `shauna.digital`. After cutover it serves
`/links` at its own URL via a **200 rewrite**, so the page keeps the
`shauna.dev` address. `shauna.digital` is untouched; `/links` stays reachable
there too and points its canonical at `shauna.dev`.

No DNS change. No new certificate. The existing Let's Encrypt cert already
covers all four hostnames (expires **2026-10-31**).

## Why the rules look the way they do

Netlify takes the **first matching rule**, so order is load-bearing. Three
things bite here, and all three are already handled in `netlify.toml`:

1. **The root rewrite needs `force = true`.** `/` exists in the deploy as the
   portfolio homepage, so without force Netlify serves that and the rewrite
   never fires. Same reason the original 301s needed force.
2. **Assets must stay same-origin.** `/links` loads two real stylesheets from
   `/_astro/` (Astro inlined nothing), and the CSP in `netlify.toml` is
   `style-src 'self'` / `script-src 'self'`. If the catch-all 301 caught those
   files and sent them to `shauna.digital`, the browser would block them and
   the page would render **completely unstyled**. The `/_astro/*` passthrough
   sits above the catch-all specifically to prevent this.
3. **Everything else must still bounce.** Without the catch-all, `/blog`,
   `/work/*` etc. would serve on `shauna.dev` as duplicate content.

## Known limitation, read before step 1

A host-keyed rule **cannot be proven on a Netlify draft deploy**, because the
draft is served on a different hostname (`<hash>--byshauna.netlify.app`) and
the rule never matches there. A draft proves the *page*; only prod proves the
*rule*. That is exactly why step 1 is a canary on `www` while the apex keeps
its existing 301 — if host-matching misbehaves, the address people actually
use is unaffected.

---

## Step 1 — canary on www.shauna.dev

Already staged in `netlify.toml` on branch `links-page` (commit 2). Ship it:

```bash
git push origin links-page
```

Merge to `main` only with Shauna's approval, or deploy directly:

```bash
netlify deploy --build --prod
```

Then verify. Expect `HTTP/2 200` and `content-type: text/html`, **not** a 301:

```bash
curl -sS -o /dev/null -D - https://www.shauna.dev/ | egrep -i '^(HTTP/|location:|content-type:)'
```

Confirm the stylesheets load same-origin (this is the failure mode that
renders the page naked, so do not skip it):

```bash
CSS=$(curl -sS https://www.shauna.dev/ | grep -o '/_astro/[^"]*\.css' | head -1)
curl -sS -o /dev/null -D - "https://www.shauna.dev$CSS" | egrep -i '^(HTTP/|location:|content-type:)'
```

`content-type: text/css` and no `location:` means it stayed same-origin. A
`location:` pointing at `shauna.digital` means rule 1 is being skipped and the
page will render unstyled. (The `_astro` filenames are content-hashed and
change every build, so read the current one out of the HTML rather than
hardcoding it.)

Confirm other paths still bounce, and the apex is still redirecting:

```bash
curl -sS -o /dev/null -D - https://www.shauna.dev/blog | egrep -i '^(HTTP/|location:)'
curl -sS -o /dev/null -D - https://shauna.dev/ | egrep -i '^(HTTP/|location:)'
```

Then open `https://www.shauna.dev/` in a browser and check the page is styled.

## Step 2 — apex

Only after step 1 is verified. In `netlify.toml`, replace the single apex block

```toml
[[redirects]]
  from = "https://shauna.dev/*"
  to = "https://shauna.digital/:splat"
  status = 301
  force = true
```

with the same six blocks used for `www`, `s/www.shauna.dev/shauna.dev/`.
Keep them in the same order. Deploy, then:

```bash
curl -sS -o /dev/null -D - https://shauna.dev/ | egrep -i '^(HTTP/|location:|content-type:)'
```

Decide at this point whether `www.shauna.dev` should 301 to the apex so there
is one canonical address rather than two live copies. Recommended, but it is a
separate call.

---

## Rollback

Fully reversible, no DNS or cert involvement.

- **Undo step 2 only:** restore the single apex 301 block, redeploy.
- **Undo everything:** revert the `netlify.toml` commit and redeploy.

```bash
git revert <netlify.toml commit sha>
netlify deploy --build --prod
```

- **Undo the page as well:** revert the page commit too. `/links` disappears
  and the build returns to 21 pages. Nothing else references it.

Propagation is a Netlify deploy, not DNS, so rollback is live within a minute.

## Still open at time of writing

- Seven URLs never supplied, shipping as visible placeholders: LaunchKit shop,
  Instagram, TikTok, Pinterest, Substack, Etsy shop, Amazon storefront.
- Five social icons are approximations, not official brand marks. `CLAUDE.md`
  requires official marks in production. Instagram, TikTok, Pinterest and
  Substack all publish brand kits with usage rules; the Etsy glyph is currently
  a Georgia "E". Swap before or shortly after cutover.
- `shauna.dev` now has Namecheap email-forwarding MX records
  (`eforward1-5.registrar-servers.com`). `HANDOFF.md` said it had none. Nothing
  here touches mail, but the note was stale and those records would collide
  with any future real mail host on that domain.
