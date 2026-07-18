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
