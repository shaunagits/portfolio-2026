# HANDOFF — Portfolio  (overwrite each session; keep < 40 lines)
updated 2026-10-06 (card session: business card, /card, email signature, docs)

## State
- `main` == GitHub == prod (Netlify "byshauna", PERSONAL account shauna.coy@gmail.com). Push to
  `main` = prod deploy. Cloud/VM sessions CANNOT push (no GitHub creds): Shauna runs the push.
- LIVE 2026-10-06: https://shauna.digital/card, the digital business card (QR target, verified).
  Save Contact (/shauna-arnold.vcf, text/vcard), Call/Text/Email. /cards 301s to /card/.
  Content: src/data/card.json (drives the page AND the vCard). Live copy: "Designer + developer",
  tagline "Software that fits how your business actually runs." ("fits" teal + bold).
- Branch `card-fonts-b` (local, NOT pushed): /card switched to card font set B + these docs.
  Ship = `git switch main && git merge --ff-only card-fonts-b && git push origin main`.

## Business card (print)
- LOCKED + SENT TO PRINTER 2026-10-06 (v2 file). Do not change card copy; /card must match it.
- v2 print file made 2026-10-06 (in chat, not in the repo): 3.75x2.25in (3.5x2 trim + 0.125
  bleed), vector, font set B, new copy, QR -> https://shauna.digital/card (decoded + checked).
  The original PDF was a flat 288dpi JPEG. Fonts embed as Type 3; if the printer wants outlines,
  re-export. The QR URL is printed: /card must never move. Scan a proof before the print run.
- Card font set B = Funnel Display (name, tagline) / Archivo (title) / Space Grotesk (contact).

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
- Domains: shauna.digital = business site + main address; shauna.dev = personal portfolio + job
  applications. Thread is out. Netlify primary is already shauna.digital; code canonicals still
  say shauna.dev; shauna.dev still Cloudflare-proxied (DOMAIN-SWAP.md step 4). og-image.jpg is
  stale (Fraunces, old headline, an em dash).
- Redesign design file: https://claude.ai/artifact/CRouzXr7KHiGQ6yNnwELaD. AEO-PLAN-2026-09-17.md
  untracked, unstarted, predates the 09-29/09-30/10-06 decisions.

## Flag for the faf session (not this repo)
- shauna.digital DNS (Namecheap) has TWO CNAME records for host `faf-app` (cname.vercel-dns.com. and
  73ee9b52ac9d146e.vercel-dns-017.com.). A host can only have one CNAME; one is ignored or erroring.
  Keep whichever Vercel's project domain settings ask for and delete the other. Not touched here.

## Gotchas
- No em/en dashes in customer-facing copy. Title case on buttons. CSP: fonts.googleapis/gstatic.
- Git in the VM needs delete permission on the folder or it strands .lock files.
