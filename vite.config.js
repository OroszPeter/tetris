import { defineConfig } from 'vite';
import svelte from '@sveltejs/vite-plugin-svelte';

//vite.config.js:
export default defineConfig({
    plugins: [svelte()],
    base: '/tetris/',
    build: {
        outDir: 'docs',
        emptyOutDir: true
    }
})