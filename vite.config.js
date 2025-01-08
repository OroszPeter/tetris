//vite.config.js:
export default defineConfig({
    plugins: [svelte()],
    base: '/tetris/',
    build: {
        outDir: 'docs',
        emptyOutDir: true
    }
})