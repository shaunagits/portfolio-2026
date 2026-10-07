# HANDOFF — Portfolio  (overwrite each session; keep < 40 lines)
updated 2026-10-07 (card session wrap-up: card printed, /card, email + signature, contact QR)

## HOSTING CHANGED 2026-10-07 (read first)
- shauna.digital is now a SEPARATE site: repo folder `../shauna-digital`, Netlify project
  "shauna-digital" (personal account). Business site: home, services, results + stories, about,
  contact, /links, /card. Its README has the deploy command.
- THIS repo (Netlify "byshauna") now serves **shauna.dev only** (primary domain set 2026-10-07,
  shauna.digital removed from this project). shauna.digital/work/* 301s here.
- /links and /card are LIVE from the shauna-digital site now. Edits here to links.json,
  card.json or card.astro do NOT reach shauna.digital; make them in ../shauna-digital too.
- No blog on shauna.digital. The old posts stay here on shauna.dev for now.

## State
- `main` == GitHub == prod for shauna.dev (Netlify "byshauna"). Push to `main` = prod deploy.
  Cloud/VM sessions CANNOT push (no GitHub creds): Shauna runs the push.
- /card + Save Contact live on shauna.digital from ../shauna-digital (src/data/card.json drives the
  page AND the vCard). Copy: "Designer + developer", "Software that fits how your business actually
  runs." ("fits" teal + bold), card font set B. 2026-10-07: vCard carries a 400x400 photo (from
  links-avatar.jpg, 26 KB file); Instagram + TikTok removed on BOTH sites (socials: LinkedIn, GitHub).
- Local branches `card-page` and `card-fonts-b` are merged into main (safe to delete later).

## Business card (print)
- LOCKED + SENT TO PRINTER 2026-10-06 (v2 file). Do not change card copy; /card must match it.
- v2 print file made 2026-10-06 (in chat, not in the repo): 3.75x2.25in (3.5x2 trim + 0.125
  bleed), vector, font set B, new copy, QR -> https://shauna.digital/card (decoded + checked).
  The original PDF was a flat 288dpi JPEG. Fonts embed as Type 3; if the printer wants outlines,
  re-export. The QR URL is printed: /card must never move. Scan a proof before the print run.
- Card font set B = Funnel Display (name, tagline) / Archivo (title) / Space Grotesk (contact).

## Contact QR (lock screen) 2026-10-06
- Made in chat, not in the repo: Shauna-lockscreen-QR.png (1320x2868, iPhone 16 Pro Max) + Shauna-contact-QR.png.
  The QR holds the vCard ITSELF (name, title, email, phone, shauna.digital), so scanning offers Add to
  Contacts with no website or signal. It is static: if the phone/email/title changes, regenerate it.
  The printed card's QR is different on purpose: it points at /card, which can change any time.

## Email
- hello@shauna.digital is Google Workspace, in daily use (MX smtp.google.com).
- DONE 2026-10-06 (Shauna applied in Namecheap): SPF = `v=spf1 include:_spf.google.com
  include:mailchannels.net ~all`; Google DKIM TXT at google._domainkey (2048-bit), verified live
  on Namecheap NS + 8.8.8.8 + 1.1.1.1. Google Admin status: "Authenticating email with DKIM"
  (2026-10-06). VERIFIED by test send 2026-10-06: SPF PASS, DKIM PASS (shauna.digital), DMARC PASS.
  Shauna sends from Apple Mail as well as Gmail: the signature goes in both. Later: DMARC
  p=none -> p=quarantine after ~2 clean weeks; drop mailchannels + dreamhost key once DreamHost goes.
- Email signature (text-only HTML, Helvetica, matches card): ADDED to Gmail web for hello@ as "Shauna"
  2026-10-06 (default for new + reply, above quoted text). Also in Apple Mail (Mac, designed version)
  and iPhone Mail (plain line). All verified by test sends; iPhone also passes SPF/DKIM/DMARC. EMAIL DONE.

## Website (OTHER session owns it; not this one)
- Branch `fonts-funnel` (local): Funnel Display + Funnel Sans site-wide + a WIP commit pointing
  site/canonicals/OG at shauna.digital + an OLD /card -> /links/ 302 that MUST be dropped (it
  would fight the real /card page). Shauna then picked set B for the card; site fonts undecided.
- Domains: see HOSTING CHANGED above. shauna.dev still Cloudflare-proxied (DOMAIN-SWAP.md
  step 4). og-image.jpg is stale (Fraunces, old headline, an em dash).
- Redesign design file: https://claude.ai/artifact/CRouzXr7KHiGQ6yNnwELaD. AEO-PLAN-2026-09-17.md
  untracked, unstarted, predates the 09-29/09-30/10-06 decisions.

## Flag for the faf session (not this repo)
- shauna.digital DNS (Namecheap) has TWO CNAME records for host `faf-app` (cname.vercel-dns.com. and
  73ee9b52ac9d146e.vercel-dns-017.com.). A host can only have one CNAME; one is ignored or erroring.
  Keep whichever Vercel's project domain settings ask for and delete the other. Not touched here.

## Gotchas
- No em/en dashes in customer-facing copy. Title case on buttons. CSP: fonts.googleapis/gstatic.
- Git in the VM needs delete permission on the folder or it strands .lock files.
