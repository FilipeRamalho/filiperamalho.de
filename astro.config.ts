import bun from '@hedystia/astro-bun';
import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';


export default defineConfig({
    output: "server",
    adapter: bun(),
    server: {
        "host": "0.0.0.0",
        "port": 3000,
    },
    vite: {
        ssr: {
            external: ["@myriaddreamin/typst-ts-node-compiler"]
        },
        plugins: [tailwindcss()],
    },
    integrations: [
        mdx()
    ]
});