# HANDOFF — Portfolio  (overwrite each session; keep < 40 lines)
updated 2026-07-16

## Shipped this session
- ✅ DEPLOYED TO PROD: live at https://shauna.digital (Netlify CLI `netlify deploy --build --prod`).
  Site = "byshauna" (id f63775ef…), on the shauna.coy@gmail.com Netlify account / "Shauna's team"
  (NOT the AAO account). Custom domain is the apex shauna.digital (no work. alias).
- All redesign work committed to branch `redesign-2026` (3 commits): base redesign +
  review tweaks + LaunchKit triptych. Branch is NOT merged to main and NOT pushed to GitHub.
- Review-round changes now live: hero background white; primary (accent-green) button text white
  (default+hover); Client Portal card uses real portal.png; AAO card = new "combo" frame
  (website laptop/browser + Kahu app phone) via aao-site.jpg + kahu-app.png, command-center
  dashboard kept as the AAO case-study hero; LaunchKit = new "triptych" frame (3 phones,
  center raised) with EMPTY "screen 1/2/3" placeholders ready for screenshots.
- New images optimized into public/images: project-portal.png (311KB), aao-site.jpg (364KB,
  converted from a 3.1MB PNG), kahu-app.png (114KB). Build verified clean: 17 pages.

## In-flight / unfinished
- Branch `redesign-2026` not merged to main. If you push to main, Netlify auto-build will
  redeploy from GitHub — make sure GitHub has these commits first or it'll overwrite prod
  with the OLD main. Safer: merge redesign-2026→main, push, let Netlify rebuild.
- LaunchKit triptych is placeholders only. To fill: set launchkit `phoneImages` in
  projects.json to 3 image paths (e.g. /images/launchkit-1.png…). Empty slots stay placeholder.
- Nike/Apple still on old images; no new screenshots exist for them. LaunchKit case-study hero
  still uses the old logo (project-launchkit.jpg).
- CONTACT FORM: markup is correct (name="contact", data-netlify, honeypot, hidden form-name).
  Verify it appears in Netlify → Forms (detection post-processes after deploy; may lag a few min).
- GitHub/LinkedIn footer glyphs still custom — swap for OFFICIAL marks. og-image not refreshed.
- CONTRAST: #9ECE9A is light; white-on-green buttons are low contrast. Shauna approved as-is.

## Single next task (paste-and-go)
Merge `redesign-2026` → main and push to GitHub so the repo matches the live CLI deploy
(and future auto-builds don't regress prod). Then add real LaunchKit screenshots.

## Gotchas
- Two Netlify accounts: AAO (shauna@alohaanimaloutreach.org) has NO portfolio site;
  portfolio lives on shauna.coy@gmail.com. `netlify link` is to id f63775ef-…-…-…-…d5270…? no:
  f63775ef-f653-4328-bf37-d5270d1882f2.
- node_modules are mac-arm; a Linux rollup binary was added in-sandbox (inert on your Mac).
