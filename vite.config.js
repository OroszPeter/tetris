import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

//vite.config.js:
export default defineConfig({
    plugins: [sveltekit()],
    base: '/tetris/',
    build: {
        outDir: 'docs',
        emptyOutDir: true
    }
})
