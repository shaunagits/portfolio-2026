// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // shauna.digital is the primary address again (Shauna's call, 2026-09-29).
  // shauna.dev is being split off as a separate dev/building portfolio.
  // Layout.astro derives every page's canonical and og:url from this value.
  site: 'https://shauna.digital',
  integrations: [mdx()],
});
