// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import svelte from '@astrojs/svelte';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://marcusgasberg.github.io',
		base: 'marcgasberg',
    integrations: [mdx(), sitemap(), svelte(), tailwind()],
});
