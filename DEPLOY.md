# DEPLOY.md — Portfolio (Netlify)

Netlify auto-deploys on push to `main`. To avoid replacing the live site before
review, deploy a PREVIEW via Netlify CLI first, then promote on approval.

## Paste-and-go prompt for Claude Code

```
You are deploying the Shauna.Digital portfolio (Astro) redesign. The repo
auto-deploys to Netlify on push to `main`, so DO NOT push to main until I approve
a preview. Use a branch + the Netlify CLI for a draft deploy first.

1. Read HANDOFF.md and CLAUDE.md first. Tell me the one next task and your plan.
   Do not touch anything until I say go.
2. Verify a clean build: run `npm install` if needed, then `npm run build`. Fix any
   errors. Report the page count (expect ~17: home, 5 /work/*, blog).
3. Create a branch: `git checkout -b redesign-2026`. Stage and commit ALL redesign
   changes with a clear message. Do NOT push to main.
4. Set up Netlify CLI: `npm i -g netlify-cli`, `netlify login`, then `netlify link`
   to the existing Portfolio-2026 site. Confirm you linked the correct site.
5. Draft deploy (NOT prod): `netlify deploy --build`. Give me the preview URL and
   STOP for my review + approval.
6. On my approval only: `netlify deploy --build --prod` (or merge redesign-2026 → main
   and let Netlify auto-build — your call, tell me which).
7. After live: confirm the "contact" form shows in Netlify > Forms, spot-check the
   homepage and /work/aao-ecosystem, then update HANDOFF.md (shipped: deployed) and
   /Users/shauna/Desktop/claudecode/NOW.md.

Notes: the single design accent lives in src/styles/global.css :root (--primary/--accent).
Keep the blog intact. Netlify Forms needs the built HTML form present (it is: name="contact").
```
