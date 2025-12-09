// @ts-check 
//import { defineConfig } from 'astro/config';

// https://astro.build/config 
//export default defineConfig({});


//SSR using vercel as adapter
//npm install @astrojs/vercel
// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: "server",
  adapter: vercel(),
  site: "https://printedonline.ca",
  integrations: [sitemap()],
});
