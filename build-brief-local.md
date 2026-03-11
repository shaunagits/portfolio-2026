# Portfolio Site — Complete Build Brief
> work.shauna.digital — Built in Astro, deployed to Vercel
> Read copy-final.md for all content. This file covers everything else.

---

## DESIGN DIRECTION

### Aesthetic
Bold, editorial, confident — but in white/light. Think Devon Stank (devonstank.com) translated to a warm white palette. Strong typographic hierarchy, direct copy, clean sections with intentional breathing room. Premium without being cold. The work does the talking — the design gets out of the way.

Keywords: editorial, confident, warm-minimal, high-contrast typography, purposeful whitespace.

### Color Palette
- Background: #FFFFFF (pure white)
- Text: #111111 (near-black)
- Text muted: #6B6B6B
- Surface/subtle: #F8F7F5 (warm off-white, used sparingly for section breaks)
- Border: #E5E5E5
- Accent: A single warm accent — use #C9A96E (antique gold/warm brass) for:
  - CTA button backgrounds or underlines
  - Hover states on links
  - Active filter tab indicator
  - Small decorative details
  - Keep usage restrained — one or two touches per section maximum

### Typography
- Display / Headings: Fraunces (Google Fonts) — weights 400, 700, 900
- Body / UI: Inter (Google Fonts) — weights 400, 500, 600
- Load via Google Fonts in Layout.astro (already implemented)

### Type Scale
- Hero H1: clamp(5rem, 11vw, 9rem) — Fraunces 900
- Section headings H2: clamp(2.5rem, 5vw, 4rem) — Fraunces 700
- Card/service headings H3: clamp(1.25rem, 2vw, 1.75rem) — Fraunces 400
- Body: 1.125rem / 1.8 line-height — Inter 400
- Section labels: 0.75rem, Inter 600, letter-spacing 0.12em, uppercase
- Nav links: 0.875rem, Inter 500

---

## ANIMATIONS & MOTION

Premium, purposeful — nothing decorative for its own sake.

- **Scroll reveal:** Elements fade up (translateY 24px → 0, opacity 0 → 1) as they enter the viewport. Use IntersectionObserver with data-animate attributes (already in codebase). Stagger delay on grouped elements using data-delay="1", data-delay="2" etc.
- **Hover on project cards:** Subtle lift (translateY -4px) + image scale (1.0 → 1.03). Transition 300ms ease.
- **Hover on nav links:** Underline slides in from left. No color change.
- **CTA button hover:** Background darkens slightly or accent color shifts. No bounce or jump.
- **Nav on scroll:** Backdrop blur appears after 60px scroll. Transition 200ms.
- **Page load:** Hero content fades in with a slight delay sequence — eyebrow first, then H1, then subhead, then CTAs. Use CSS animation-delay, not JS.
- **No page transitions** for now — single page, smooth scroll between sections is sufficient.
- **Performance rule:** All animations use transform and opacity only. No animating layout properties.

---

## NAVIGATION

- Fixed top, full width
- Left: Logo "Shauna." in Fraunces — links to #home
- Right: Nav links (Work · About · Services · Contact) + "Work With Me" CTA
- "Work With Me" styled as a small outlined button with accent color border — not filled
- No background at top of page
- On scroll past 60px: white background + subtle box-shadow appears, transition 200ms
- Mobile (< 768px): Hamburger right side, full-screen overlay menu when open, links centered vertically, large size

---

## SECTION 01 — HERO

Layout: **Asymmetric — large type left, editorial image right**

Inspired by Devon Stank's bold direct hero, but with a two-zone split:

- Left zone (~55% width): 
  - Small eyebrow label (section-label style, uppercase)
  - H1 "Shauna." in Fraunces 900 — very large, nearly full zone width
  - Subhead paragraph below
  - Two CTA buttons below subhead (primary filled, secondary text-link style)
  - Social proof line at bottom in muted small text
- Right zone (~45% width):
  - Single portrait/editorial photo, full height of the hero zone
  - Image slightly overflows top of section (negative margin top) for editorial tension
  - No border, no shadow, no rounded corners

- Section height: 100vh minimum
- Vertical rhythm: content block is vertically centered in the left zone
- Image sits flush right edge of the container

Placeholder: Use a solid warm gradient (#F0EBE3) as image placeholder until real photo is available.

---

## SECTION 02 — WORK

Layout: **Masonry-style project grid with filter tabs**

Header:
- Section label "Selected work." left-aligned, H2
- Subhead below in muted body text
- Filter tabs below subhead: All · Web Development · Brand & Marketing · Digital Products · Nonprofit
- Active tab has accent color underline indicator

Grid:
- Default (All): Asymmetric 2-column grid
  - First card: spans full width (featured) — landscape image, project info overlaid at bottom left on hover
  - Remaining cards: 2-column equal grid
  - On filter: fade transition between states (opacity + scale)
- Each card:
  - Image fills card, no padding
  - Category tag top-left on hover (small, uppercase, accent color)
  - Project name bottom-left on hover (Fraunces, white, large)
  - No borders, no shadows, slight rounded corners (4px) optional
  - Hover: image scales to 1.03, overlay fades in, card lifts 4px
- Expand on click: panel slides down below the card (max-height animation) showing:
  - Problem / What I did / Outcome in three columns
  - Tools used as small tags
  - Live link if available
  - Close button
- "View all work" text link below grid, right-aligned, accent color

Data source: src/data/projects.json (already implemented — do not hardcode)

---

## SECTION 03 — ABOUT

Layout: **Two-column — text left, image right**

- Left (~55%): 
  - Section label "About" uppercase small
  - H2 heading
  - Three paragraphs body copy
  - Stats strip below copy: four stats in a row separated by thin vertical rules
- Right (~45%):
  - Single editorial portrait photo
  - Image slightly taller than the text column — creates offset
  - Optional: thin accent-color vertical rule to the left of the image

Placeholder: warm gradient for image until headshot is ready.

---

## SECTION 04 — SERVICES

Layout: **Numbered list — full width, stacked rows**

Inspired by Devon Stank's services section — clean, direct, no cards.

Each service is a full-width row:
- Left: Large number (01, 02...) in Fraunces, very large, muted color
- Center: Service name as H3 + short description paragraph
- Right: Tags as small pills (outline style, no fill)
- Thin border-bottom rule separating each row
- Hover: row background shifts to warm off-white (#F8F7F5), number shifts to accent color
- Rows animate in staggered on scroll

Section header:
- H2 "What I can help you build." left-aligned
- Subhead below in muted text

---

## SECTION 05 — CONTACT

Layout: **Two-zone — large heading left, form right**

Background: Inverted — dark (#111111) background, white text. Creates strong visual break at bottom of page.

- Left zone (~50%):
  - Section label in muted/accent color
  - H2 "Tell me what you're building." in Fraunces, white
  - Body paragraph, white/muted
  - Email address as styled link
  - Currently accepting list (small, muted)
  - LinkedIn + GitHub icon links

- Right zone (~50%):
  - Contact form with qualifying questions:
    - Name (text input)
    - Email (email input)
    - Project type (select: Web Development / Brand & Marketing / Digital Products / Other)
    - Budget range (select: Under $5k / $5k–$15k / $15k–$30k / $30k+)
    - Timeline (select: ASAP / 1–3 months / 3–6 months / Flexible)
    - Tell me about your project (textarea, 4 rows)
    - Submit button (accent color background)
  - Form submits to Formspree (action URL to be added later — use placeholder for now)
  - Success message replaces form on submission

---

## FOOTER

Layout: **Minimal, single row**

- Light background (#F8F7F5) or white
- Left: "© 2026 Shauna. All rights reserved."
- Center: "Built with Astro."
- Right: LinkedIn · GitHub links
- Very generous top padding (80px), standard bottom padding
- Thin top border rule

---

## INTEGRATIONS

- **Fathom Analytics:** Add script tag to Layout.astro head. Site ID to be added later — use placeholder comment.
- **Formspree:** Contact form action attribute. Endpoint to be added later — use placeholder.
- No other integrations for now.

---

## RESPONSIVE BREAKPOINTS

- Mobile: < 768px
- Tablet: 768px–1024px
- Desktop: > 1024px

### Mobile behavior:
- Hero: Image moves below text, both full width, stacked
- Work grid: Single column, all cards full width
- About: Single column, image below text
- Services: Number above name, tags wrap below description
- Contact: Single column, form below heading content
- Nav: Hamburger, full-screen overlay

---

## TECHNICAL REQUIREMENTS

- Astro framework (already scaffolded)
- TypeScript strict mode
- Mobile-first CSS
- WCAG AA accessibility minimum
- Lighthouse 90+ performance target
- Smooth scroll behavior on anchor links
- All section IDs preserved: #home, #work, #about, #services, #contact
- Content data in src/data/projects.json — do not hardcode project content
- CSS custom properties (design tokens) in src/styles/global.css
- No external CSS frameworks — vanilla CSS only
- Animations via IntersectionObserver (already implemented) + CSS transitions
- No GSAP unless a specific interaction requires it

---

## FILE STRUCTURE (preserve existing)
```
src/
  components/
    Nav.astro
    Hero.astro
    Work.astro
    ProjectCard.astro
    About.astro
    Services.astro
    Contact.astro
  data/
    projects.json
  layouts/
    Layout.astro
  pages/
    index.astro
  styles/
    global.css
public/
  favicon.svg
```

---

## ASSETS — PLACEHOLDERS TO USE UNTIL REAL ASSETS ARRIVE

- Hero image: warm gradient rectangle #F0EBE3 → #E8DFD4, portrait orientation
- About headshot: same warm gradient
- Project thumbnails: use thumbGradient values already in projects.json
- Favicon: keep existing SVG placeholder
- All placeholder images should have correct aspect ratios for their slots

---

## WHAT NOT TO DO

- Do not use any CSS framework (Tailwind, Bootstrap)
- Do not hardcode copy — all content from copy-final.md and projects.json
- Do not add sections not listed in this brief
- Do not use rounded corners larger than 4px on any element
- Do not use drop shadows heavier than 0 2px 8px rgba(0,0,0,0.08)
- Do not animate layout properties (width, height, padding) — transforms and opacity only
- Do not add a blog section
- Do not add social media feeds
