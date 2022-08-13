import { defineConfig } from 'vite'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import monacoEditorPlugin from 'vite-plugin-monaco-editor';

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
        monacoEditorPlugin({
            forceBuildCDN: true,
            languageWorkers: ['json', 'editorWorkerService'],
            customWorkers: [
              {
                label: 'graphql',
                entry: 'monaco-graphql/dist/graphql.worker',
              },
            ],
          }),
    ],
})
