import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'payload/node'

loadEnv()

export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [
        mdx()
    ]
});