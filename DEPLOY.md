# DEPLOY.md — Portfolio (Netlify)

Netlify auto-deploys on push to `main`. The site is already linked and live at
https://shauna.digital (project "byshauna", personal account shauna.coy@gmail.com).

## Rule
NEVER push to `main` without Shauna's approval — a push IS a production deploy.

## Standard change flow
1. Make the change on a branch or on `main` locally (don't push yet).
2. `npm run build` — must be clean. The page count is DERIVED, so don't hardcode it here:
   1 home + 1 /blog index + one page per file in src/content/blog + one per entry in
   src/data/projects.json. (It was 20 on 2026-07-27. This line used to say a fixed "17",
   which silently went stale the moment a post or project was added.) What matters is that
   the count MATCHES that formula and never DROPS — a drop means something stopped
   generating. Growth just means you added content.
3. Preview it. Either:
   - `netlify deploy --build` → a DRAFT url (does NOT touch prod), or
   - the dev server: `preview_start` the `portfolio` (:4321) / `portfolio-alt` (:4333) config.
   Verify computed styles, not screenshots — the in-app pane freezes transitions (HANDOFF).
4. Show Shauna. STOP for approval.
5. On approval → ship to prod, either:
   - `git push origin main` (auto-build from GitHub — preferred; keeps repo == prod), or
   - `netlify deploy --build --prod` (CLI direct — faster, but then `main` lags prod until
     you also push; don't leave it out of sync).
6. Verify on https://shauna.digital, then update HANDOFF.md and
   /Users/shauna/Desktop/claudecode/NOW.md.

## Notes
- Theme accent + all colour tokens: src/styles/global.css :root (--primary-rgb / --ink-rgb).
- Contact form posts to Formspree (formspree.io/f/xvzwklgz), NOT Netlify Forms — see
  CLAUDE.md / DECISIONS.md. Don't re-add Netlify Forms attributes.
- Keep the blog intact.
- CLI login is per-machine: `netlify status` should show shauna.coy@gmail.com. If it shows
  the AAO account, `netlify logout` then `netlify login` — the portfolio site is not on AAO.

## History
The original redesign was shipped from branch `redesign-2026` via a preview-first CLI deploy
(2026-07-16), then the branch was merged to `main`. That one-time runbook has been retired;
use the standard flow above.
