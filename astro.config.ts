import node from '@astrojs/node';
import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';


export default defineConfig({
    output: "server",
    adapter: node({
        mode: 'standalone'
    }),
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