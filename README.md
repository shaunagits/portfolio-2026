# Shauna Digital · Portfolio

Source for [shauna.digital](https://shauna.digital), Shauna Arnold's personal portfolio. Astro static site: a home page, a case study per project, and a blog.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/ (17 pages: home + 5 /work/* case studies + 11 blog posts)
npm run preview
```

## Design system

Black + white + one teal accent (`--primary` #2C8C99), token-driven from `src/styles/global.css :root`. Fraunces for display type, Inter for body, JetBrains Mono for labels. The full rules, and the reasoning behind each locked decision, live in `CLAUDE.md` and `DECISIONS.md`: read those before making visual changes.

## Contact form

Wired to Formspree, not Netlify Forms.

## Deploy

Netlify project "byshauna" (personal account, not the AAO account). Auto-deploys on push to `main`, so a push to `main` is a production deploy. See `DEPLOY.md` for the preview-first flow, and `HANDOFF.md` for current state and open threads.
