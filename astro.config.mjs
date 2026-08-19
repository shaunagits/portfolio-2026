// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // Primary domain since the 2026-08-19 swap. shauna.digital is a Netlify
  // domain alias that 301s here; Layout.astro derives every page's canonical
  // and og:url from this value.
  site: 'https://shauna.dev',
  integrations: [mdx()],
});
