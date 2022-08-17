import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: 'dist/firefox',
        sourcemap: 'inline',
        emptyOutDir: false,
        minify: false,
    },
    plugins: [
        react(),
        visualizer({
          template: 'network'
        })
    ]
})
