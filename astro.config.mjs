import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://thb-l85.github.io',
  base: 'Portfolio',
  integrations: [tailwind()]
});