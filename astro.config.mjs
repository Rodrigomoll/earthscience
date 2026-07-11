import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://Rodrigomoll.github.io',
  base: '/earthscience/',
  integrations: [tailwind()],
});
