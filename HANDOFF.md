# HANDOFF — Portfolio  (overwrite each session; keep < 40 lines)
updated 2026-10-07 late (composer demo, Hawaiʻi 311, /card without Call; session closing)

## HOSTING CHANGED 2026-10-07 (read first)
- shauna.digital is now a SEPARATE site: repo folder `../shauna-digital`, Netlify project
  "shauna-digital" (personal account). Business site: home, services, results + stories, about,
  contact, /links, /card. Its README has the deploy command.
- THIS repo (Netlify "byshauna") now serves **shauna.dev only** (primary domain set 2026-10-07,
  shauna.digital removed from this project). shauna.digital/work/* 301s here.
- /links and /card are LIVE from the shauna-digital site now. Edits here to links.json,
  card.json or card.astro do NOT reach shauna.digital; make them in ../shauna-digital too.
- No blog on shauna.digital. The old posts stay here on shauna.dev for now.

## State (end of session 2026-10-07)
- `main` == prod for shauna.dev (Netlify "byshauna"). Push to `main` = prod deploy.
- `redesign-v2` on GitHub is AHEAD of main and approved by Shauna for prod:
  ad8f30c Hawaiʻi 311 card + résumé line, 4327384 composer demo, then notes commits.
  If main has not moved: `git checkout main && git pull && git merge --ff-only origin/redesign-v2 && git push`.
  Check https://shauna.dev/work/composer/ after (~1 min).
- LIVE on shauna.dev: homepage (H1 "Design systems drawn by hand and shipped in code.", lead heading
  "Three apps, one design language."), /resume + PDF, /system, X-ray toggle, /work/rescue-platform/,
  /work/ui-checks/ ("Can a design system check itself?"). After the push: /work/composer/ and the
  Hawaiʻi 311 card.
- Design rules + checks: tokens/tokens.json -> scripts/tokens.mjs -> src/styles/tokens.css; DESIGN.md;
  scripts/check-ui.mjs runs on every build (6 checks incl. type tokens and hover). New v2 pages must be
  added to its srcFiles regex. `npm run resume:pdf` rebuilds the PDF (needs playwright symlinked).
- Still TEMPORARY in netlify.toml: /work and /work/ -> /#work. Other case studies are the OLD design.
- Local copy on Shauna's Mac (claudecode/shauna.digital/portfolio) is behind and has two uncommitted
  note edits that are now committed here: `git checkout -- DECISIONS.md DOMAIN-SWAP.md && git pull`.

## Business card (print)
- LOCKED + SENT TO PRINTER 2026-10-06 (v2 file). Do not change card copy; /card must match it.
- v2 print file made 2026-10-06 (in chat, not in the repo): 3.75x2.25in (3.5x2 trim + 0.125
  bleed), vector, font set B, new copy, QR -> https://shauna.digital/card (decoded + checked).
  The original PDF was a flat 288dpi JPEG. Fonts embed as Type 3; if the printer wants outlines,
  re-export. The QR URL is printed: /card must never move. Scan a proof before the print run.
- Card font set B = Funnel Display (name, tagline) / Archivo (title) / Space Grotesk (contact).

## Contact QR (lock screen) updated 2026-10-07
- NEW Shauna-lockscreen-QR.png (1320x2868, headshot, card copy) + Shauna-contact-QR.png, made in chat.
  The QR now opens https://shauna.digital/shauna-arnold.vcf, so the contact arrives WITH the photo
  (needs signal). The old offline QR held the vCard text itself and could never carry a photo.
  Testing tip: delete an existing "Shauna Arnold" contact first, then Create New Contact.

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

## Next (in order)
1. Collaboration section on shauna.dev: copy drafted (see DECISIONS 2026-10-07), ON HOLD by Shauna.
2. Rebuild the other case studies in v2; then drop the /work redirect.
3. 808alerts.com card next to Hawaiʻi 311 in Selected work, plus a résumé line (Shauna OK 2026-10-07).
   Pitch: official Hawaiʻi alerts (NWS, HCCDA, Hawaiian Electric) in one feed; warnings pin; level
   colours; grouped multi-zone alerts; quiet, source-unreachable and possibly-stale states; says it is
   not an official alert system. Read ../808-alert/CLAUDE.md for facts. Preview before prod.
   TMK Reports stays OFF until Shauna says it is fixed (she reported it broken; not yet diagnosed).
4. Optional: a Hawaiʻi 311 case study page (archive + privacy rules; not the 62% finding).
5. Canvas Home2 lead heading still old; asked Shauna whether to update to "Three apps, one design language."
6. Client portal off app.threadhawaii.com (DNS, Supabase auth URLs, tell users). Own task.
- Shauna to push: AAO website/app, FAF app, Gradient, recruiting site (ThreadCredit edits, local), and
  merge Fireside branch credit-shauna-digital. Gradient Supabase service_role key rotation: TABLED.
- Design file: https://claude.ai/artifact/CRouzXr7KHiGQ6yNnwELaD. AEO-PLAN-2026-09-17.md untracked, unstarted.

## Flag for the faf session (not this repo)
- shauna.digital DNS (Namecheap) has TWO CNAME records for host `faf-app` (cname.vercel-dns.com. and
  73ee9b52ac9d146e.vercel-dns-017.com.). A host can only have one CNAME; one is ignored or erroring.
  Keep whichever Vercel's project domain settings ask for and delete the other. Not touched here.

## Gotchas
- No em/en dashes in customer-facing copy. Title case on buttons. CSP: fonts.googleapis/gstatic.
- Git in the VM needs delete permission on the folder or it strands .lock files.
