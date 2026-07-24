# HANDOFF — Portfolio  (overwrite each session; keep < 40 lines)
updated 2026-07-24

## State: SHIPPED & IN SYNC
- Live at https://shauna.digital. main == GitHub == prod at commit 82e21ea; tree clean.
  Push to `main` = auto-deploy to prod (see DEPLOY.md). Netlify project "byshauna"
  (id f63775ef-f653-4328-bf37-d5270d1882f2), PERSONAL account shauna.coy@gmail.com, NOT AAO.
- Durable design rules + reasoning live in CLAUDE.md and DECISIONS.md. Read those first.
- GitHub repo is shaunagits/portfolio-2026; `origin` points at it directly.

## Done this session (all live, pushed 82e21ea)
- GRADIENT added to projects.json, placed 2nd (after AAO). "An AI recruiting platform, built
  solo"; client anonymized ("Independent tech recruiting firm"); Web App · AI. COMBO frame:
  laptop = back-end app (public/images/gradient-app-desktop.png), phone = front-end site on
  mobile (gradient-website-mobile.png). Copy uses only supplied facts, no metrics. Case study auto-gens.
- gradient-website-desktop.png is committed but UNUSED (combo has 2 slots) — kept for a possible
  frame swap, safe to delete. The app shot is desktop/landscape so it sits on the LAPTOP, not the
  phone; to feature the website as laptop hero AND keep the app visible, need a PORTRAIT app shot.
- ProjectFrame alt text is now DATA-DRIVEN: triptych phoneAlts[], combo laptopAlt/phoneAlt, each
  with the old `${name} …` fallback. LaunchKit got descriptive phoneAlts (was "… screen N").
- NEW BLOG POST "How This Site's Design System Works" (Process) at
  src/content/blog/how-this-sites-design-system-works.md. In index + own URL. No dashes.
- HAWAII POST time-zone fix: it was backwards. Hawaii runs BEHIND the mainland, so the mainland
  is already online during her morning; quiet deep-work window is afternoon/evening (calls = morning).
- GITHUB PROFILE README (separate repo shaunagits/shaunagits, pushed via API, not this repo):
  built from ~/Downloads/github-profile-README.md, footer stripped. Uses Hānai (kahakō) + Kahu (no marks).

## Open / next (nothing broken)
- LAUNCHKIT: swap temp store screenshots for real product/kit shots (same 3 phoneImages paths).
  Nike/Apple project images are also still the originals. GRADIENT: real shots when ready.
- EMAIL MIGRATION (decided, not started): @shauna.digital DreamHost -> Google Workspace. DNS +
  mailbox only; Netlify web unaffected. Claude supplies exact Namecheap records; Shauna applies them.

## Gotchas (rest in CLAUDE.md)
- CSP is tight (form-action = Formspree only). If a font/form silently breaks, suspect netlify.toml.
- A child-component <svg> taking a `class` needs `:global(...)` or Astro scopes its size to height:0.
- Preview pane freezes transitions + resets scroll on screenshot — verify via computed styles / DOM.
- Smartypants is ON: `--`/`---` in blog prose renders as en/em dashes. No em/en dashes anywhere (AI tell).
- PUSH 403 "denied to PeopleEngineer"? gh has 3 accounts; active can flip. Only `shaunagits` pushes
  here (it was already active this session). Fix: `gh auth switch --user shaunagits`, push, switch back.
- Portfolio dev server is portfolio-alt :4333 (launch.json also defines portfolio :4321).
