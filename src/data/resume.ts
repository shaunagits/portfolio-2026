// Résumé content for /resume and the PDF built from it (public/shauna-arnold-resume.pdf).
// Source: jobs/resume/resume-anthropic092926/...design-systems.md (Shauna's designer
// framing, 2026-09-29). Only facts from her résumé files: never add a claim here that
// is not in master-resume.md. No em dashes.

export const resume = {
  name: 'Shauna Arnold',
  headline: 'Product designer + developer',
  focus: 'Design systems',
  location: 'Honolulu, Hawaiʻi · Open to remote and relocation',
  contact: [
    { label: 'hello@shauna.digital', href: 'mailto:hello@shauna.digital' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shaunaarnold/' },
    { label: 'shauna.dev', href: 'https://shauna.dev' },
    { label: 'shauna.digital', href: 'https://shauna.digital' },
  ],
  summary: [
    'Product designer who builds the system and ships the product on top of it. I have spent my career making experiences consistent at scale: first a decade of retail brand work for Nike and Apple, including authoring Nike’s 200-page Retail Brand Marketing Guidelines, used across North America, a design system before I wrote software.',
    'Now I design and build production apps end to end for nonprofits and small businesses, each on a tokenized design system I created and maintain: color, type, spacing, icons, and components, landed in code alongside the screens that use them. I design in Claude Design and build in React, TypeScript, and Tailwind with Claude Code as my daily partner.',
  ],
  bring: [
    ['Design systems, foundations to components', 'tokens, theming, shared components, and a single-source rule for every vocabulary that appears on more than one screen.'],
    ['Accessibility built in', 'accent colors chosen so small text holds WCAG AA contrast, and motion that respects reduced-motion settings.'],
    ['Automated checks for UI quality', 'a repeatable audit script that measures design-system drift after every change, used to drive the debt down batch by batch.'],
    ['Expressive layer as system', 'an original icon set shared across map pins, filters, and lists; brand art direction applied through reusable components, not one-offs.'],
    ['Prototype in code and ship', 'changes land in the shared system alongside the product, using Claude Code in my own practice.'],
  ],
  work: {
    org: 'Shauna Digital',
    role: 'Founder, Product Designer and Developer',
    when: '2016 – Present',
    where: 'Hawaiʻi (remote)',
    intro: 'Design, build, and ship web products for small businesses and nonprofits, owning discovery, design, architecture, code, deployment, and support with no handoffs.',
    projects: [
      {
        name: 'Rescue operations platform',
        href: 'https://shauna.digital/results/rescue-platform/',
        text: 'for a 501(c)(3) animal rescue: an admin app in production use and a foster-facing mobile app in final testing, both on one tokenized design system.',
        points: [
          'Ran a measured UI audit of the admin app and fixed it in batches: cut hardcoded hex colors in components roughly in half, drove undefined (“ghost”) classes and tokens to zero, and converted hundreds of inline styles to system classes, re-measuring after every batch.',
          'Rolled a full visual redesign across the foster app in seven rounds behind an opt-in switch: new tokens lived beside the old ones, each screen opted in when it was ready, and no untouched screen moved.',
          'Replaced two bands of desktop navigation with one top bar after comparing alternatives in Claude Design, matching the phone’s bottom-nav grammar so the pattern reads the same on every device.',
          'Locked a rule after finding the same field labeled three different ways on three screens: any vocabulary used on more than one surface is one exported source, never a hand-typed copy.',
        ],
      },
      {
        name: 'HI Dog Maps',
        href: 'https://hawaiidogmap.com',
        text: '(hawaiidogmap.com): an interactive map of dog-friendly places across four Hawaiian islands. Recolored an open vector map style to the brand palette, and designed one set of category line icons (paw, tree, waves, mountain, utensils) shared by map pins, filters, and the list view.',
      },
      {
        name: 'Hawaiʻi 311',
        href: 'https://hawaii311.org',
        text: '(hawaii311.org): a permanent public archive and live map of Oʻahu’s 311 service requests, which the city’s own feed drops after 14 days. A twice-daily Python collector, a git-versioned archive, a self-hosted vector basemap, and tested privacy rules that keep report descriptions private and place any report about a person at block level.',
      },
      {
        name: 'shauna.dev',
        href: 'https://shauna.dev',
        text: ': this portfolio is itself a working design system. One token file generates every color, type, space, and motion value; a written rule set guides every change; and an automated check fails the build if text contrast, tokens, button language, alt text, or motion drift.',
      },
      {
        name: 'Commercial Shopify theme system',
        text: '(in development): 76 configurable sections and 34 composable blocks designed as one component vocabulary, so non-developers assemble on-brand pages in any combination.',
      },
      {
        name: 'Aloha Animal Outreach website redesign',
        text: '(Astro, Tailwind): art direction built from the organization’s brand guidelines, with an original hand-painted background style, a signature headline highlight, and photo treatments applied through shared components. Condensed 12 pages to 6.',
      },
      {
        name: 'AAO Outreach App',
        text: ': a phone-first field app for a volunteer nonprofit serving houseless pet owners on Oʻahu, redesigned around one core workflow and released to production in phases.',
      },
    ],
  },
  earlier: [
    {
      org: 'Nike, Inc.',
      role: 'Project Specialist, Retail Brand Marketing',
      when: 'January 2008 – October 2014',
      where: 'Portland, OR',
      note: 'Initially engaged through Winston Retail Solutions; hired as a full-time Nike employee in 2010.',
      intro: 'Led retail brand and experiential initiatives across a $10M+ annual portfolio supporting 5,000+ retail locations in North America.',
      points: [
        'Authored Nike’s 200-page Retail Brand Marketing Guidelines, establishing visual and execution standards used across North America.',
        'Owned design through execution of the UT Austin Gregory Gym “Victory” shop serving 10,000 students daily, winner of NABO’s “Reffie” award.',
        'Led the Macy’s Herald Square environment refresh credited with a 38% year-over-year sales increase and executive endorsement.',
        'Delivered flagship retail redesigns for Nike San Francisco and Nike Atlanta, coordinating designers, architects, construction, merchandising, digital, and retail leadership.',
      ],
    },
    {
      org: 'Apple',
      role: '2D/3D Producer, Marketing Operations',
      when: 'June 2016 – December 2016',
      where: 'North America',
      points: [
        'Directed retail brand initiatives from creative development through production and field installation for Apple Stores, Target, Best Buy, and Amazon.',
      ],
    },
  ],
  board: {
    org: 'Aloha Animal Outreach',
    role: 'Secretary, Board of Directors',
    text: 'Technology and financial leadership for a 501(c)(3) serving underserved pet owners across Oʻahu. Designed and built the organization’s field app and website.',
  },
  education: 'Associate of Applied Science, Web Development & Design · Portland Community College',
  skills: [
    ['Design', 'Design Systems, Design Tokens and Theming, Iconography, Accessibility (WCAG AA), Claude Design, Figma, Prototyping, Adobe Creative Suite'],
    ['Build', 'Claude Code, React, TypeScript, Tailwind CSS, CSS Architecture, Astro, Next.js, MapLibre GL, Supabase, Vercel, Git'],
  ],
};
