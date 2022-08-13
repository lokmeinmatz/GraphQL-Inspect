import { defineConfig } from 'vite'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: 'dist/firefox',
        sourcemap: 'inline',
        emptyOutDir: false,
        minify: false,
        rollupOptions: {
            input: {
                devtools: path.resolve(__dirname, 'devtools.html')
            }
        }
    }
})
