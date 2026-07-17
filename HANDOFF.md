# HANDOFF — Portfolio  (overwrite each session; keep < 40 lines)
updated 2026-07-16

## Shipped this session
- ✅ LIVE at https://shauna.digital — teal redesign deployed via `netlify deploy --build --prod`.
  Site "byshauna" (id f63775ef-…) on the PERSONAL Netlify account shauna.coy@gmail.com.
- Palette locked: black + white + #2C8C99. Neutrals are hue-shifted toward the brand
  (--ink #0B1416, --ink-soft #55656A) so black/grey/teal read as one family. Three RGB
  triplets (--primary-rgb/--ink-rgb/--paper-rgb) are the ONLY colour literals; every
  component references a token. Accent ramp --primary-50/100/200; stages = tint-1/2/3.
- Buttons: primary = outlined + solid teal shape offset up-right (zero-blur box-shadow),
  hover slides it home + fills teal. Secondary = same but a hollow teal ring that becomes
  the button's outline. Nav flips to teal/white only at the FOOTER.
- Case-study heroes + homepage cards now share ProjectFrame.astro (can't drift again).
- FIXED live bugs: contact form (see below); og:url/og:image pointed at
  work.shauna.digital which does NOT resolve — every link preview was broken; theme-color
  was still the old cream. Added netlify.toml: CSP + security headers + cache rules
  (site previously had NONE).

## In-flight / unfinished
- ⚠️ `main` is BEHIND prod. Prod was deployed from branch `color-teal-2026` via the CLI;
  those 8 commits are NOT merged/pushed. Any push to `main` triggers a GitHub auto-build
  that would REGRESS prod to the old build. Merge color-teal-2026 -> main and push SOON.
- ⚠️ CONTACT FORM NOT YET TESTED END-TO-END. The redesign had swapped the working
  Formspree form for Netlify Forms, which was never detected (0 forms registered), so the
  form posted into a void. Restored the old endpoint (formspree.io/f/xvzwklgz). Nobody has
  confirmed that Formspree account still accepts mail — SEND A TEST SUBMISSION.
- LaunchKit triptych is empty placeholders. Fill by setting launchkit `phoneImages` in
  projects.json to 3 image paths. Nike/Apple still on old images.
- .btn secondary's hollow ring is faked with a --paper knockout: it only renders correctly
  on a --paper background (fine today — hero only). Don't put .btn on a tinted/dark band.
- GitHub/LinkedIn footer glyphs still custom — swap for OFFICIAL marks. og-image art not
  refreshed (the file loads, but it's the old cream design).
- Blog components (BlogTable/BlogCallout/blog/*) still use the old green #0D6B4A — they are
  DEAD CODE (never bundled; verified no off-palette hex ships). Delete or restyle someday.

## Single next task (paste-and-go)
Merge `color-teal-2026` -> main and push, so GitHub matches what's live and a future
auto-build can't regress prod. Then send a test through the contact form.

## Gotchas
- Two Netlify accounts: AAO (shauna@alohaanimaloutreach.org) has NO portfolio site.
- CSP is tight (form-action = Formspree only). If a font/form silently breaks, suspect
  netlify.toml first.
- node_modules are mac-arm; a Linux rollup binary was added in-sandbox (inert on your Mac).
