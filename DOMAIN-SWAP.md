# DOMAIN SWAP — shauna.dev becomes this site's primary domain

Status: **CODE READY, CUTOVER NOT STARTED.** Branch `domain-swap-shauna-dev`,
not yet merged. Nothing on Netlify or Namecheap has been touched.

Decided with Shauna 2026-08-19. shauna.dev is the primary personal domain
(shorter, and .dev says what the site is); shauna.digital reads as an agency
term now that Thread (threadhawaii.com) is the agency-facing brand, so it
becomes a 301 to shauna.dev and keeps carrying email only.

End state:

| Address | Serves |
|---|---|
| shauna.dev | this portfolio (primary domain on Netlify site `byshauna`) |
| shauna.dev/links | the link-in-bio page, back in this repo |
| shauna.digital | 301 → shauna.dev (Netlify domain alias, automatic) |
| @shauna.digital email | Google Workspace, MX at Namecheap — UNTOUCHED |
| shauna-dev Netlify project | retired after verification |

## What the branch changes

- `src/pages/links.astro` + `src/data/links.json` — the link-in-bio page,
  ported back from the `shaunagits/shauna.dev` repo (its current 7-bar
  version, not the copy this repo deleted on 2026-08-14). Internal targets
  (portfolio, blog, contact) are relative now and don't open new tabs; the
  Writing section is derived from the blog collection again instead of
  hardcoded, since the posts live beside it once more.
- `astro.config.mjs` — `site: 'https://shauna.dev'`.
- `src/layouts/Layout.astro` — per-page `<link rel="canonical">` and `og:url`
  derived from `site`; og:image URLs moved to shauna.dev.
- `src/components/Footer.astro` — the "shauna.dev" hub link is now the
  internal `/links`.
- `netlify.toml` — the `/links → https://shauna.dev/` 301s are gone (the page
  is real again). No host redirects added: Netlify 301s every non-primary
  domain to the primary automatically, path included.

Build verified 2026-08-19: 22 pages, canonicals correct on `/`, `/links/`,
blog and work pages; the only remaining shauna.digital reference in built HTML
is portal.shauna.digital, which is a live app and stays until the new portal
ships (destination TBD, likely portal.threadhawaii.com).

## Hard-won rules from the 2026-08-13 cutover (CUTOVER.md in the other repo)

1. **Domain moves go through the Netlify UI, never the API/CLI.** Two API
   calls are not atomic; the claim 422'd, stranded the domain and took the
   apex down for 3.5 minutes.
2. **The plan allows ~3 domain-alias changes per hour per site.** The rollback
   burned the quota and stretched a 3.5-minute mistake into an hour. Count the
   changes before starting; don't rehearse.
3. **Netlify treats apex and www as one domain.** Both must leave `shauna-dev`
   before `byshauna` can claim either.
4. **MX records are never part of this.** shauna.digital's Google Workspace MX
   and shauna.dev's Namecheap forwarding MX both stay exactly as they are.

## Order of operations

The apex `shauna.dev` A record (75.2.60.5, Netlify's shared load balancer)
never changes; only the `www` CNAME is site-specific. The gap between steps 3
and 4 is the only exposure, and only on www.shauna.dev.

### 1. Merge and deploy this branch — needs Shauna's approval

Push to `main` on `shaunagits/portfolio-2026`; the GitHub integration deploys
`byshauna`. Verify before touching domains: `https://shauna.digital/links/`
renders styled with 7 linked bars. (Canonicals will say shauna.dev while
shauna.dev still serves the old Linktree — harmless for the minutes it lasts,
neither site has traffic.)

### 2. Netlify UI: release the domains from `shauna-dev`

`shauna-dev` project → Domain management → remove `www.shauna.dev`, then
`shauna.dev`.

### 3. Netlify UI: claim them on `byshauna`

`byshauna` → Domain management → add `shauna.dev`, add `www.shauna.dev`, then
**Set as primary domain** on `shauna.dev`. `shauna.digital` (and its www)
stay listed as aliases — that listing is what produces the automatic 301.

### 4. Namecheap: repoint the www CNAME

Domain List → `shauna.dev` → Advanced DNS → CNAME `www`:
`shauna-dev.netlify.app.` → **`byshauna.netlify.app.`** (keep the trailing dot
if present). Leave the apex A record and all MX records alone. Nothing needs
to change on shauna.digital's DNS at all.

### 5. Let the certificate extend

`byshauna`'s cert must add the two shauna.dev names. Netlify does this on its
own once DNS resolves; Domain management → HTTPS → "Verify DNS configuration"
if it stalls. HTTPS errors on shauna.dev in the meantime are the expected
middle state.

### 6. Verify

```bash
# Portfolio serving on the new primary, links page real:
curl -sS -o /dev/null -D - https://shauna.dev/ | egrep -i '^(HTTP/|content-type:)'          # 200 text/html
curl -sS https://shauna.dev/ | grep -o 'rel="canonical" href="[^"]*"'                        # https://shauna.dev/
curl -sS https://shauna.dev/links/ | grep -o 'class="bar plain' | wc -l                      # 4 (grep -o, HTML is one line)

# Old domain redirecting, path preserved:
curl -sS -o /dev/null -D - https://shauna.digital/ | egrep -i '^(HTTP/|location:)'           # 301 → https://shauna.dev/
curl -sS -o /dev/null -D - https://shauna.digital/blog | egrep -i '^(HTTP/|location:)'       # 301 → shauna.dev/blog

# www variants:
curl -sS -o /dev/null -D - https://www.shauna.dev/ | egrep -i '^(HTTP/|location:)'           # 301 → apex
```

Telling old from new on the shauna.dev root: the Linktree's root had 7 link
bars; the portfolio's root has none (`class="bar` count 0 at `/`, 10 at
`/links/`).

### 7. Retire the old project — LAST, after step 6 passes

Until this step, rollback is: reverse steps 2–4 (same shape, same www gap,
mind the rate limit). After it, rollback also means recreating the project.

- Delete the `shauna-dev` Netlify project (or just leave it with no domains).
- Archive `shaunagits/shauna.dev` on GitHub with a README note pointing here.
  The repo history is the only other copy of the links page's evolution.
- Update this repo's CLAUDE.md / HANDOFF.md / DEPLOY.md to name shauna.dev as
  the primary domain, and mark this file's status line COMPLETE.

## Not part of this swap, tracked so it isn't lost

- portal.shauna.digital keeps serving the current client portal. The new
  portal's home (likely portal.threadhawaii.com) is a separate decision.
- aloha@threadhawaii.com is Namecheap forwarding only; consider a real Google
  Workspace mailbox before portal notification emails exist.
- shauna.digital stays registered indefinitely: email lives on it and the 301
  should outlive anyone's memory of the old address.
