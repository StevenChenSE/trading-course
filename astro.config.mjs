// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';

export default defineConfig({
  site: 'https://StevenChenSE.github.io',
  base: '/trading-course',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
  server: {
    host: '0.0.0.0',
    port: 4321,
  },
  vite: {
    server: {
      hmr: { overlay: false },
    },
  },
});
