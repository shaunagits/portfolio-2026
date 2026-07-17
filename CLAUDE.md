# CLAUDE.md — Shauna.Digital Portfolio (Astro)

Durable rules for this repo. Edit only with Shauna's approval.

## What this is
Personal portfolio at work.shauna.digital. Astro static site. Goal: personal brand
+ a lasting record of work first; freelance/FTE second. The work is the hero.

## Design system (source of truth: src/styles/global.css :root)
- Near-monochrome: warm off-white paper (--paper) + near-black ink (--ink).
- ONE accent used sparingly (--primary / --accent). Currently #9ECE9A (soft green).
  Change the theme from the :root token block only — everything references it.
- Text on the accent fill uses --on-accent (dark ink), because the accent is light.
- Type: Fraunces (display), Inter (body), JetBrains Mono (labels/meta). Sentence case.
- Logo: "Shauna." wordmark (teal/accent period). Favicon = "S." monogram (public/favicon.svg).

## Structure / conventions
- Homepage sections are components: Nav, Hero, Work, About, ServiceCards, Contact, Footer.
- Hero line: "I build websites, web apps, & AI tools." ("build" emphasized + accent underline).
- Work is DATA-DRIVEN from src/data/projects.json. Each project has an id, frame
  ("browser"|"photo"), tint, role/timeline/scope, problem/whatIDid/outcome, stats, tools.
- Case studies generate from src/pages/work/[slug].astro (one page per project).
  To add a project: add a JSON entry — the card AND case-study page appear automatically.
- Blog (src/content/blog + src/pages/blog) is untouched by the redesign. Keep it intact.
- Icon set: custom line icons (outline default, solid = active). Use OFFICIAL GitHub/
  LinkedIn marks in production; custom set for everything else.

## Deploy
- Netlify, auto-deploys on push to `main`. Preview via Netlify CLI before promoting.
- NEVER push to main without Shauna's approval. See DEPLOY.md.
