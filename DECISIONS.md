# DECISIONS.md — Portfolio Redesign

Locked reasoning. Append new decisions; don't rewrite history.

## 2026-07-16 — Redesign direction
- Homepage is HYBRID: short identity hero, then the work takes over as the spine.
  Rationale: brand/record is priority #1; old site buried the work under a sales pitch.
- Positioning: designer + developer (rare hybrid who ships), not agency/pedigree-first.

## Hero headline
- Chose plain "I build websites, web apps, & AI tools." over clever options
  (e.g. "Designed. Built. Shipped."). Reason: Shauna wanted clear > clever.
  "build" emphasized in accent with an animated underline.

## Palette
- Near-monochrome (paper + near-black) with ONE accent used sporadically.
- Accent history: terracotta+teal pair → deep teal #246167 (single) → #9ECE9A (soft green)
  → **#2C8C99 teal, LOCKED 2026-07-16**.
- Dark bands (About/footer) are near-black, so the accent stays a pop, never floods.
- RESOLVED (was: "#9ECE9A is low-contrast as text"): the move to #2C8C99 fixed it.
  White-on-accent went 1.4:1 → 3.95:1. Two teal shades now, deliberately:
  --primary #2C8C99 for fills/underlines/large text; --accent-ink #1F6A75 (6.2:1) for
  SMALL teal text, because #2C8C99 on white fails AA below large sizes.

## 2026-07-16 (evening) — Colour system refinement
- Palette is strictly black + white + #2C8C99. Warm cream is gone.
- Neutrals are NOT pure greyscale: --ink #0B1416 and --ink-soft #55656A are pulled toward
  the brand hue (~192°). Rationale: pure #000 + neutral grey share no hue with the accent,
  so the teal read as *applied* rather than native. Still black to the eye (18.65:1).
- Three RGB triplets (--primary-rgb / --ink-rgb / --paper-rgb) are the ONLY colour literals.
  Lines, shadows and tints derive from them, so re-theming is a one-line change.
- Card stage tints renamed tint-teal/sand/cream → tint-1/2/3 (warm names, teal palette).

## Buttons — offset shape
- Chosen from a set of hover treatments (sweep, text-roll, magnetic, ripple, reveal…).
  Shauna picked the offset "hard shadow" family: a solid shape of the SAME silhouette
  sits behind and up-right; on hover it slides home and the button takes the fill.
- Variant B ("shape travels") over A ("button travels"): if the button moves under the
  cursor it can flicker-loop on fast hovers. B is flicker-proof.
- Implemented as a zero-blur box-shadow, NOT a pseudo-element: it inherits border-radius,
  so the shape can never drift from the button, and it always paints behind the fill with
  no stacking-context work. Offset via --btn-offset (7px page, 5px nav).
- Primary = solid teal shape → fills teal. Secondary = hollow teal ring → BECOMES the
  button's teal outline (fill stays white). Rationale: a black-filled secondary competed
  with the primary; giving the secondary the outline and the primary the fill keeps the
  hierarchy without inventing a second colour.
- Secondary's ring is faked with a --paper knockout, so it ONLY works on a --paper
  background. That's why the nav CTA uses the primary treatment instead.
- SUPERSEDED (later 2026-07-16): the hollow teal ring was dropped. Secondary is now a SOLID
  INK offset shape → fills ink on hover (Shauna found the ring weaker beside the solid
  primary). Ink, not teal, so the accent stays exclusive to .btn-primary. See CLAUDE.md for
  the current spec. The knockout-needs-white constraint no longer applies to the secondary.

## Nav
- Wordmark is black with a teal period (not all-teal): stops the logo competing with the CTA.
- Nav flips to a teal bar with white content ONLY at the footer. Rejected: flipping over
  every dark band — it flipped mid-page at About and back, which read as a glitch.
- Keyed to the footer coming INTO VIEW, not to overlapping the nav: the nav is fixed to the
  top and a short desktop footer (~394px) never physically reaches it, so an overlap test
  never fired at the bottom on desktop.

## Contact form — Formspree, not Netlify Forms
- The redesign had swapped the old site's working Formspree form for Netlify Forms. Netlify
  never detected it (0 forms registered), so the live form posted into a void.
- Restored Formspree (the endpoint the old site used). Reasons: already provisioned and
  proven; needs no Netlify dashboard access to enable form detection; portable off Netlify.
  Netlify Forms' only real edge is "no third party"; free tier 100/mo vs Formspree 50/mo.
- Kept native action=/method= so it still submits without JS; added a real error state and
  fixed the old bug where a 4xx still showed the success message.

## Favicon / S mark
- New S mark filled #2C8C99, not the source's #000000: pure black is no longer in the
  palette, and a black mark disappears on dark browser chrome (verified by rendering
  16/32/64 on light and dark).
- Old favicon drew its "S" with a <text> element in Fraunces — favicons don't load
  webfonts, so it had been falling back to Georgia. The new mark is a path.
- REJECTED (for now): putting the S mark into the nav wordmark. Options explored —
  mark-as-S, oversized, lockup, tile. The lockup stutters (two S's); mark-as-S makes a
  geometric object sit next to a high-contrast serif; and on the teal footer bar the mark
  must go white, surrendering the accent that the teal period currently carries in BOTH
  states. Mark stays where it has room: favicon, touch icon, og-image, footer.

## Logo
- "Shauna." wordmark (Logo direction A) + matching "S." monogram for favicon/avatar/portal.

## Case studies
- Data-driven content model: one src/pages/work/[slug].astro template, content from
  projects.json. Chosen over inline expanders for shareable per-project URLs + SEO.

## Client Portal (separate app, shauna-portal)
- Bento dashboard + floating dock nav; its own visual identity; distinct from green apps.
- Header = "Project Portal" + shauna.digital subtitle. "+ New" is a picker.


## 2026-07-16 (evening) — Project naming
- Headers lead with the WORK, not the client. Rationale: for a portfolio whose goal is
  "the work is the hero", the client is proof, not the headline; leading with a logo reads
  like a CV of employers, not a body of work.
- Client (incl. Nike/Apple) moved to a credited meta line — on the card under the name, and
  as the lead item in the case-study meta row. Shauna's call: don't headline the client,
  even Nike/Apple; list them in the info.
- Client stripped from category chips too (Retail & Brand · Nike -> Retail & brand), else
  it re-appears one line up.
- Names (all): AAO "A website, a store, and a field app"; Portal "A client portal, built
  from scratch"; Nike "Store-design programs, nationwide"; Apple "Retail builds for a
  global brand"; LaunchKit "Bespoke brand kits, ready to launch".
- "Bespoke" for LaunchKit = each kit is purpose-built for a niche (still a product, still
  sold from a catalog). Chosen over "productized template system", which is factory-speak
  that undersells it. Summary reworded to match.
- Portal's client is Shauna herself, labelled "Built for" — kept as a flex (builds
  production tools for her own business), not hidden.

## 2026-07-16 — Email host: Google Workspace (planned)
- Migrating @shauna.digital email off DreamHost. Chose Google Workspace over Fastmail/Zoho/
  self-hosting. Reason: Shauna already lives in Gmail (shauna.coy@gmail.com); Workspace puts
  domain email in that same interface, is what clients expect, and bundles Drive/Calendar.
  Fastmail was the close runner-up (cheaper, alias-friendly, the "developer" pick) but the
  familiar Gmail UI won. Self-hosting rejected outright (deliverability is a full-time fight).
- NOT started as of this note. Web hosting stays on Netlify regardless; this is DNS + mailbox.
- Rule: Claude supplies the exact Namecheap DNS records; Shauna applies them. Claude does not
  edit live DNS or billing.

## 2026-09-29 — Hero copy + positioning (SHIPPED)
- Hero is Shauna's copy: "Hi, I'm Shauna · Product designer + developer" / "I design software
  people can trust, and I build it too." Positioning: product designer + developer who serves
  two audiences, product teams (hiring) and small/growing businesses (clients).
- A full "field notes" redesign (Geist, warm paper) was prototyped and DROPPED the same day.
- shauna.digital is the main address again; shauna.dev will be a separate dev portfolio.

## 2026-09-30 — Homepage redesign, designed on a canvas first (NOT built yet)
- Work happens in the design file (https://claude.ai/artifact/CRouzXr7KHiGQ6yNnwELaD) before
  code. Every section goes on BOTH desktop and phone artboards.
- Fonts (design): Funnel Display headings, Archivo body, Space Grotesk labels. Palette lock
  holds: white, ink #0B1416, one teal #2C8C99. Title case on buttons. No em dashes.
- Hero: Booking Q4 pill and the eyebrow's leading rule REMOVED. S mark in the nav.
- Selected work = "Feature + Index" (chosen after an independent design/UX review over
  equal rows, before/after ledger, sticky casebook): 2 to 3 featured projects with device
  frames on a grey plate, a before → after line (the ONLY teal per project), problem line,
  role, what was built, whole block clickable; everything else in a "More work" table.
  Rationale: ranking beats six identical rows, scales to any project mix, shortest on phone.
  No forced metrics or placeholders. No section intro line.
- Device frames by product type: website+app = browser + overlapping phone; web app =
  browser; mobile-first = 2 to 3 phones (centre raised); physical work = plain photo.
- Featured titles are generic "[what it is] for [what it serves]", no leading "A"/"An",
  no client or product names (Shauna's call).
- New sections (Shauna's copy, em dashes swapped): What I do (For product teams / For
  businesses split), How I work (six questions), Experience (Independent, Nike, Apple +
  résumé link), About ("I'm Shauna."), Client services (replaces "What I build").

## 2026-09-30 (later) — Two sites, split by audience (Shauna)
- shauna.dev = personal portfolio + professional identity (hiring managers, product/eng
  leaders, collaborators). shauna.digital = business site that turns owners into clients.
  Rationale: one homepage talking to both audiences forced the "For product teams / For
  businesses" split everywhere; two sites let each speak plainly.
- The redesigned homepage in the design file becomes the SHAUNA.DEV homepage. Client services
  and the contact form were removed from it and replaced by a "Need something built?" band;
  every "Work With Me ↗" on .dev points to shauna.digital (selling lives on one site).
  .dev nav: Work, About, Résumé + Work With Me ↗. Lab/Notes only once they have real entries.
- shauna.digital gets a NEW, leaner business homepage (not designed yet): outcome hero,
  problems solved, offers, how it works, proof, one CTA. One strong /services page first.
- Same project, different story: .dev case studies go deep (constraints, reasoning, what I
  learned); .digital versions lead with the business problem and result. Titles stay generic.
- Free Assessment: a real concept, still being developed. LEFT OFF both sites for now.
- Blog: ARCHIVED (taken off the site for now; may return). Keep the content in the repo.
- /links stays on shauna.digital.
- Selected work on phone = swipe cards (next card peeks); desktop stays stacked, 3 featured.
  Client portal moved to More work. Rescue platform (featured 03) uses three phone screens,
  an exception to "website + app = browser + phone" (Shauna has 3 high-impact app screens).
- REPOS (approved 2026-09-30): portfolio-2026 becomes SHAUNA.DEV (it holds the case studies,
  projects.json and /work). A NEW repo `shauna-digital` + its own Netlify project holds the
  business site and /links. The retired shaunagits/shauna.dev repo stays retired and gets
  ARCHIVED on GitHub at cutover. Domain cutover happens LAST, in one planned step, with
  Shauna's go-ahead; shauna.digital/work/* redirects to shauna.dev/work/* so shared links survive.
- Order: design .digital homepage → build .dev (branch, preview) → build .digital (new repo,
  preview) → domain cutover → résumé + job-facing extras → Shauna applies. UI quality check
  (contrast/em dash) waits until the sites are ready to ship.

## 2026-10-06 — Fonts: Funnel Display + Funnel Sans (match the business card)
- Live site swapped Fraunces (display) + Inter (body) for Funnel Display (headings, name,
  tagline) + Funnel Sans (body). JetBrains Mono stays for labels/meta. Reason: match Shauna's
  new business card, and she never loved Fraunces. Supersedes the 2026-09-30 HANDOFF line
  "switch fonts only when the redesign ships" for the live site.
- Weights are the card's, and ONLY these load: Display 500/700, Sans 400/500, Mono 400/500.
  Every CSS weight was moved onto that set (Display 400 -> 500, 600 -> 700; Sans 600 -> 500;
  Mono 700 -> 500). Asking for an unloaded weight makes Chrome fake a bold, so don't.
- Accent words: Funnel has no italic. The hero "build" and contact "building" were already
  upright teal in code; they are now teal + Display 700, as on the card. Underline kept.
- Funnel sets wider than Fraunces: hero H1 max-width 20ch -> 22ch (20ch left "too." alone on
  a third line at desktop), and h1-h3 get text-wrap: balance site-wide (stops one-word last
  lines on project card titles).
- CSP unchanged: it already allows fonts.googleapis.com (style-src) and fonts.gstatic.com
  (font-src).
- NOT changed: public/images/og-image.jpg is a static image with Fraunces and the OLD headline
  baked in (and an em dash); it needs regenerating separately.
- /card -> /links/ added to netlify.toml as a 302 (QR code on the business card). 302, not
  301, so the card's destination can change later without reprinting.

## 2026-10-06 — /card is a real page, not a redirect (business card QR)
- The printed card's QR decodes to https://shauna.digital/card (checked from the print PDF).
  That route is now permanent. Shauna asked for it to be a designed page, so it replaces the
  earlier /card -> /links/ 302 idea (that 302 is still in the parked fonts-funnel commit;
  drop it there if that branch ever ships, or it would shadow nothing but confuse).
- Page mirrors the card: Funnel Display/Sans on THIS page only, teal slash, mono contact
  lines, dark "back" band with the tagline. Actions: Save Contact (vCard), Call, Text, Email.
- One data file (src/data/card.json) drives the page AND /shauna-arnold.vcf, so the saved
  contact can never drift from the page. /cards 301s to /card. noindex (QR landing page).
- Branch `card-page` (7442ab5), off main, independent of the font swap.

## 2026-10-06 — Card copy, and the two sites re-stated (Shauna)
- Business card + /card: title "Designer + developer" (plain words for the people a printed
  card reaches; "product designer" is jargon to a business owner). Tagline "Software that fits
  how your business actually runs." with "fits" teal + bold. Replaces "I design software
  people can trust, and I build it too." on the card; it also fixed that line's stranded "too.".
- Sites: shauna.digital = the BUSINESS site and the main address (email + cards use it).
  shauna.dev = personal portfolio + job applications (e.g. Anthropic roles). Thread is OUT for
  now, to simplify. Reverses the 2026-08-19 "shauna.digital reads as an agency term" reasoning.
- Fonts: Shauna is keeping Funnel Display + Funnel Sans site-wide (branch fonts-funnel), and
  adding Funnel Sans 600 for bold body text.

## 2026-10-06 (later) — Card font set B; card v2; email
- Card + /card use font set B: Funnel Display (name, tagline) / Archivo (title, body) /
  Space Grotesk (contact lines, labels). Shauna's pick over the Funnel Sans + JetBrains Mono
  set. Reason: shauna.digital and the card speak to business owners; Space Grotesk is friendlier
  than a code-style mono, and B matches the redesign design file. Mono-flavoured type suits
  shauna.dev (job applications) better. Website fonts are the other session's call.
- Card v2 rebuilt as vector (the original export was a flat JPEG): same layout and size,
  new copy, balanced 3-line tagline, larger QR (Q error correction), QR verified by decoding.
- Email signature is text-only HTML with Helvetica/Arial: email clients cannot load web
  fonts, and image signatures get blocked or show as attachments.
- Email auth gap found: SPF lacks Google, and there is no Google DKIM (only a leftover DreamHost
  key). Records supplied to Shauna; she applies them (house rule: Claude doesn't edit live DNS).

## 2026-10-06 (late) — Two QR codes, two jobs
- Printed card QR -> https://shauna.digital/card (a URL): the page can change forever without
  reprinting. Lock-screen / digital QR -> the vCard itself: one scan, "Add to Contacts", works with
  no signal at events (the Gala), but it is frozen, so regenerate it if contact details change.
- No web page can add a contact by itself (iOS/Android don't allow it); /card's Save Contact is the
  one-tap path and opens the phone's own contact sheet.
- Signature currently has the teal "fits" (matches the card). Keep vs drop is Shauna's open call.
