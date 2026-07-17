# HANDOFF — Portfolio  (overwrite each session; keep < 40 lines)
updated 2026-07-16 (end of session)

## Shipped this session
- ✅ LIVE at https://shauna.digital, and main/GitHub/prod are all IN SYNC at ec3a12b.
  Netlify project "byshauna" on the PERSONAL account shauna.coy@gmail.com (NOT AAO).
- Brand colour LOCKED: black + white + #2C8C99. Neutrals hue-shifted to match
  (--ink #0B1416, --ink-soft #55656A). Three RGB triplets are the only colour literals;
  every component references a token. Accent ramp --primary-50/100/200; stages tint-1/2/3.
- Buttons: offset-shape treatment (solid shape behind, slides home on hover). Primary
  fills teal; secondary's hollow ring becomes a teal outline; nav CTA uses the primary
  treatment at 5px offset, swapping its shape to ink on the teal footer bar.
- Nav flips to teal/white only at the footer. Hero line lost its period; "& AI tools"
  wraps as a unit. About lost the Nike/Apple/Independent list.
- New S-mark favicon in teal + regenerated .ico + apple-touch-icon, all declared in head.
- ProjectFrame.astro is now the single source of truth for card + case-study media.
- FIXED 4 live bugs: contact form posted into a void (Netlify Forms never registered →
  restored Formspree); og:url/og:image pointed at work.shauna.digital which does NOT
  resolve, so every link preview was broken; theme-color was still cream; site had NO
  security headers (netlify.toml now adds CSP + headers + cache rules).

## In-flight / unfinished
- ⚠️ CONTACT FORM STILL UNTESTED END-TO-END. Formspree endpoint (formspree.io/f/xvzwklgz)
  was restored from the old site but nobody has confirmed that account still accepts mail.
  SEND A TEST SUBMISSION — this is the highest-value 60 seconds available.
- LaunchKit triptych is empty placeholders. Fill via launchkit `phoneImages` in
  projects.json (3 paths). Nike/Apple still on old images.
- og-image.jpg loads but is still the OLD cream artwork — redo it in the teal palette.
- GitHub/LinkedIn footer glyphs still custom — swap for OFFICIAL marks.
- S mark in the nav wordmark: explored and parked, see DECISIONS.md. If revisited, a
  simplified S (fewer speed-lines) would hold better at 24px.
- Blog components (BlogTable/BlogCallout/blog/*) still use the old green #0D6B4A. They are
  DEAD CODE — never bundled (verified: no off-palette hex ships). Delete or restyle someday.

## Single next task (paste-and-go)
Send a test through the contact form at https://shauna.digital/#contact and confirm it
lands. If it doesn't, the Formspree account needs re-activating (or switch to Netlify
Forms, which needs form detection enabled in the Netlify dashboard — Claude can't do that).

## Gotchas
- Two Netlify accounts: AAO (shauna@alohaanimaloutreach.org) has NO portfolio site.
- CSP is tight (form-action = Formspree only). If a font/form silently breaks, suspect
  netlify.toml first.
- .btn secondary's ring needs a --paper background. Don't put it on a tinted/dark band.
- Elements with .container must not use the `padding` shorthand — it zeroes the inline
  padding. Use padding-block.
- node_modules are mac-arm; a Linux rollup binary was added in-sandbox (inert on your Mac).
