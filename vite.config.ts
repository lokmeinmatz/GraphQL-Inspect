import { defineConfig } from 'vite'
import path from 'node:path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: 'dist/firefox',
        sourcemap: 'inline',
        minify: false,
        rollupOptions: {
            input: {
                panel: path.resolve(__dirname, 'index.html'),
                devtools: path.resolve(__dirname, 'devtools.html')
            }
        }
    },
    plugins: [react()],
})
