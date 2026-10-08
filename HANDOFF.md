# HANDOFF: Portfolio (overwrite each session; keep it short)
updated 2026-10-08 (Waikīkī homepage designed on the canvas, header fix live; session closing)

## Hosting (since 2026-10-07)
- THIS repo = shauna.dev only (Netlify "byshauna"). Push to `main` = prod deploy. Never without Shauna's OK.
- shauna.digital is a separate repo `../shauna-digital` (Netlify "shauna-digital"): home, services, results,
  stories, about, contact, /links, /card. Edits to links/card here do NOT reach shauna.digital.
- shauna.digital/work/* 301s to shauna.dev. No blog on shauna.digital; old posts stay here.

## State (verified 2026-10-08)
- origin/main == edee71d. LIVE: Dusk theme (day/dusk switch), composer demo, Hawaiʻi 311 card, and the
  header fix (edee71d: header stays clear at the top on short windows; it went solid at scrollY 0 because
  the marker sat inside the 90px rootMargin). Shauna pushed these herself (`git push origin redesign-v2:main`).
- Local redesign-v2 is 1 ahead of origin/redesign-v2 (edee71d only went to main). Harmless; next push of
  the branch syncs it: `cd ~/Desktop/claudecode/shauna.digital/portfolio && git push origin redesign-v2`
- check-ui: all 6 checks pass on source. Its dist/ step needs a build, which fails in the Cowork VM
  (rollup linux module); run on the Mac: `cd ~/Desktop/claudecode/shauna.digital/portfolio && npm run build`
- Still TEMPORARY in netlify.toml: /work and /work/ -> /#work. Other case studies are the OLD design.

## NEW: Waikīkī homepage (designed, NOT built)
Design file: https://claude.ai/artifact/CRouzXr7KHiGQ6yNnwELaD, page "shauna.dev", row "Homepage option ·
Waikīkī painting": desktop board, phone board, and a SCROLL BEHAVIOUR spec board under the desktop one.
The boards are the spec; their current Tweak defaults are the chosen settings. Summary:
- Hero = Shauna's own Waikīkī painting (hers, OK to use), animated in layers: inpainted base, water
  ripple (SVG feTurbulence), 4 boats (drift/bob/rock), palm crown (sway + displacement bend + flutter).
  Pause button; reduced motion = still image. Painting runs past the fold, ends in a torn paper edge.
- Scroll (decided 2026-10-07): painting scrolls at HALF speed (transform, rAF) while the page slides over
  it, and the wind/boats/ripple settle from 100% to 15%; all animation pauses once covered. Full rules on
  the spec board.
- Header transparent over the painting; white name/logo with a tight shadow; Direction C nav icons.
- 4 paint chips on the torn edge = links: Deep End #0263AC -> Work, Trade Wind Blue #5193CF -> System,
  Coconut Frond #25461D -> About, Pink Palace #F3B2B5 -> Résumé. Hover lifts the chip and floods its colour.
- Palette "one accent + one": accent #0263AC, bands #EEF4FA, ink #0B1416 for pKoa/footer, #E26D7E only as
  "live" dots. Background white.
- Type: hero + intro headline Boldonse; headings Cal Sans; "Shauna" in Vujahday Script (About heading and
  footer wordmark). Body unchanged.
- Intro headline: "I love designing and building software, especially the systems that make products work
  better and feel more considered." Paragraph: "Recent work includes software for an animal rescue,
  mobile-first field tools, and AI-augmented workflows, building on a decade of retail brand marketing
  work for Nike and Apple." (Highlighter layout.)
- Selected work: rescue platform is the featured full-width first card; the separate "Three apps, one
  design language" lead section is REMOVED (folded in). Sections numbered 01 to 04.
- Phone board is capped at 8000px by the canvas, so its footer is clipped; footer = desktop footer.
- Nav icons, Direction C: design/icons-direction-c/ (SVG, currentColor). They replace the same-named
  entries in src/data/icons-v2.json when this ships.

## Queued: "Paint a theme" (approved 2026-10-07)
Curated gallery of Shauna's paintings that re-themes the whole site. Step 0 (Dusk) is live. Remaining
plan is in DECISIONS 2026-10-07. Needs Shauna's paintings (ask where they are).

## Next (in order; Shauna to confirm item 1)
1. Build the Waikīkī homepage on a preview branch from the canvas boards; preview before prod.
2. Paint a theme (above). 3. Rebuild other case studies in v2, then drop the /work redirect.
4. 808alerts.com card + résumé line (read ../808-alert/CLAUDE.md). TMK Reports OFF until Shauna says fixed.
5. Collaboration section: drafted, ON HOLD. 6. Optional Hawaiʻi 311 case study (no 62% finding).
7. Client portal off app.threadhawaii.com (own task). AEO-PLAN-2026-09-17.md untracked, unstarted.

## Done, for reference
- Business card: LOCKED, at the printer (v2, QR -> https://shauna.digital/card, which must never move).
- Email (hello@shauna.digital, Google Workspace): SPF/DKIM/DMARC pass, signatures in Gmail, Apple Mail,
  iPhone. Later: DMARC p=none -> quarantine after ~2 clean weeks; drop DreamHost once it goes.
- Lock-screen contact QR opens https://shauna.digital/shauna-arnold.vcf (contact with photo).

## Flags
- faf session: shauna.digital DNS has TWO CNAMEs for `faf-app`; keep the one Vercel asks for. Not touched.
- No em/en dashes in customer-facing copy. Title case on buttons. CSP: fonts.googleapis/gstatic
  (Boldonse, Cal Sans, Vujahday Script are Google Fonts: fine under the current CSP).
- Git in the Cowork VM needs delete permission on the folder or it strands .lock files.
