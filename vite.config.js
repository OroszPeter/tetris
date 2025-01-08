import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [sveltekit()],
    base: '/tetris/',  // Ha GitHub Pages-en hosztolod
    build: {
        outDir: 'docs',  // Kimeneti könyvtár
        emptyOutDir: true  // Ürítse ki a docs mappát build előtt
    }
});
