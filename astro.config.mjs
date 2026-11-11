// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://longpaddock.tourground.com',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  image: { responsiveStyles: false },
  markdown: { smartypants: true },
});
