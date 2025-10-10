import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';


export default defineConfig({
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