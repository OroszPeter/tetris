//vite.config.js:
export default defineConfig({
    plugins: [svelte()],
    base: '/myproject/',
    build: {
        outDir: 'docs',
        emptyOutDir: true
    }
})