# SPEC — getting launchkit.us live

Written 2026-08-12. The LaunchKit site itself is a separate project.

> **Updated 2026-08-14.** Two things changed since this was written.
>
> **The links page left this repo.** It and `src/data/links.json` now live in
> `shaunagits/shauna.dev`. Nothing in *this* repo depends on launchkit.us any
> more, so the reason this file sits here is historical. Any instruction below
> to edit `src/data/links.json` means **that repo, not this one.**
>
> **launchkit.us resolves.** Verified 200 on 2026-08-14, redirecting to
> `https://www.launchkit.us/`. The "link is dead until step 2 lands" warning
> further down is no longer current.

**Claude does not edit DNS, touch billing, or change another project's Netlify
settings.** Everything below is for Shauna to apply. The exact records are
specified so nothing has to be guessed.

## Current state, measured 2026-08-12

| Thing | Finding |
|---|---|
| Registration | Registered at **NameCheap**. Created 2025-04-21, expires 2027-04-21. |
| Nameservers | `dns1.registrar-servers.com`, `dns2.registrar-servers.com` (Namecheap DNS, same as shauna.dev). |
| Apex `launchkit.us` | **No A record.** Does not resolve at all. |
| `www.launchkit.us` | CNAME → `launchkit-app.netlify.app`. Resolves. |
| `www` over HTTPS | **Fails.** `no alternative certificate subject name matches target host name`. Netlify serves only its `*.netlify.app` cert. |
| `www` over HTTP | **404 from Netlify.** |
| `launchkit-app.netlify.app` | **200. The site itself is live and fine.** |

## Diagnosis

The site is built and deployed. The custom domain was never attached to it in
Netlify. Because Netlify does not recognise `www.launchkit.us` as belonging to
any site, it cannot route the host (hence the 404) and never requested a
certificate for it (hence the TLS name mismatch). The apex is a second,
independent gap: it simply has no record pointing anywhere.

Nothing is broken in DNS propagation terms. Two configuration steps are
missing.

## BLOCKER, do this first

`launchkit-app` is **not on the Netlify account this machine is logged into.**
`netlify sites:list` under `shauna.coy@gmail.com` ("Shauna's team") returns
exactly two sites: `shauna-portal` and `byshauna`. No `launchkit-app`.

So the site lives on a different Netlify login, most likely the AAO account.
**Identify which account owns `launchkit-app` and log into that one before
attempting step 1.** Doing this from the personal account will not work, and
the failure mode is confusing: the domain will simply not be addable.

If it turns out to be on an account you no longer want it on, the cleaner move
is to transfer the site to the personal team first, then do step 1 there.

## Step 1 — attach the domain in Netlify

On the **launchkit-app** site, under Domain management, add both:

- `launchkit.us`
- `www.launchkit.us`

Netlify will report both as misconfigured until step 2 is done. That is
expected; do step 2 and come back.

## Step 2 — Namecheap DNS

Advanced DNS on `launchkit.us`. Add the apex record; the `www` record already
exists and is correct.

| Type | Host | Value | TTL |
|---|---|---|---|
| `A Record` | `@` | `75.2.60.5` | Automatic |
| `CNAME Record` | `www` | `launchkit-app.netlify.app.` | Automatic |

`75.2.60.5` is Netlify's apex load balancer, the same address shauna.digital
and shauna.dev already use.

### Two Namecheap traps, both already cost time on shauna.dev

1. **Delete any URL Redirect Record on this domain first.** A leftover one
   silently serves a *second* apex A record alongside Netlify's, which breaks
   roughly half of all requests and blocks Let's Encrypt validation. It
   identifies itself by `X-Served-By: Namecheap URL Forward`. Check for it
   before blaming anything else.
2. **Namecheap does not bump the zone SOA serial on edits.** An unchanged
   serial does **not** mean your edit failed. Verify by querying the
   authoritative servers directly, not by watching the serial.

Verify the record set landed:

```bash
dig +short @dns1.registrar-servers.com launchkit.us A
dig +short @dns2.registrar-servers.com launchkit.us A
```

Both must return exactly `75.2.60.5` and **nothing else**. Two addresses means
trap 1 above.

## Step 3 — certificate

Once DNS resolves, Netlify provisions a Let's Encrypt cert covering both names
automatically, usually within a few minutes. If it stalls, trigger it from the
dashboard, or via API against the **launchkit-app** site id:

```bash
curl -X POST -H "Authorization: Bearer $NETLIFY_AUTH_TOKEN" \
  "https://api.netlify.com/api/v1/sites/{LAUNCHKIT_SITE_ID}/ssl/renew"
```

Note the path: a bare `POST /sites/{id}/ssl` returns **422 "certificate
parameter is required"**, because that endpoint is for *uploading* a custom
certificate. `/ssl/renew` is the one that provisions.

## Step 4 — verify

```bash
for u in https://launchkit.us https://www.launchkit.us; do printf '%-30s ' "$u"; curl -sSL -o /dev/null -w '%{http_code}\n' "$u"; done
echo | openssl s_client -servername launchkit.us -connect launchkit.us:443 2>/dev/null | openssl x509 -noout -dates -ext subjectAltName
```

Success looks like: both URLs `200`, and the SAN listing **`launchkit.us` and
`www.launchkit.us`** rather than `*.netlify.app`.

Decide at this point whether `www` should 301 to the apex, so there is one
canonical address. Recommended, and it is a one-line redirect rule.

## Impact on the links page while this is outstanding

**Resolved 2026-08-14 — launchkit.us returns 200.** This section is kept for the
recovery instruction at the end, which still works if the domain ever goes down.

`https://shauna.dev/` links "Shop LaunchKits" to `https://launchkit.us`. When
this was written the host did not resolve, so that link produced a browser-level
"can't find the server" error rather than a 404.

To revert the bar to a visible placeholder if that recurs, set the LaunchKit
entry's `href` to `null` and add `"placeholder": true` in `src/data/links.json`
— **in the `shaunagits/shauna.dev` repo**, not this one. One line each, then push
to `main`; that repo auto-deploys.
