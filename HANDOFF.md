# HANDOFF — Portfolio  (overwrite each session; keep < 40 lines)
updated 2026-07-16

## Shipped this session
- Full redesign PORTED into Astro. New global tokens (near-mono + single accent).
- Rewrote components: Nav, Hero, Work, ProjectCard, About, ServiceCards, Contact, Footer.
- Case studies now data-driven: src/pages/work/[slug].astro + fields added to projects.json
  (5 pages: aao-ecosystem, client-portal, nike-retail, launchkit, apple-retail).
- Homepage "Read the case study" links wired to /work/*. Favicon = S. monogram.
  Added JetBrains Mono. Contact form is Netlify-enabled (name="contact").
- Accent changed to #9ECE9A (soft green); buttons/nav use dark text for legibility.
- Build verified clean in sandbox: 17 pages. Blog untouched.

## In-flight / unfinished
- NOT deployed. Awaiting preview deploy (see DEPLOY.md, preview-first via Netlify CLI).
- Card media simplified (single framed image). AAO laptop+phone combo + LaunchKit
  3-phone treatments from the mockups NOT yet ported.
- New AAO/Kahu/portal screenshots + case-study hero/gallery images not yet in public/images
  (mockup-shots/ holds the raw screenshots).
- GitHub/LinkedIn footer glyphs are custom — swap for OFFICIAL marks. og-image not refreshed.
- CONTRAST: #9ECE9A is light — low-contrast as TEXT on cream (logo, hero "build",
  section numbers, links). Decide: darken those text usages, or accept.

## Single next task (paste-and-go)
Run the deploy runbook in DEPLOY.md (branch + Netlify CLI preview, then promote on approval).

## Gotchas
- node_modules are mac-arm; a Linux rollup binary was added in-sandbox (inert on your Mac).
- All redesign changes are UNCOMMITTED on `main`. First deploy step moves them to a branch.
