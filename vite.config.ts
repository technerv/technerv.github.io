import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'

function spaFallback(outDir: string): Plugin {
  const resolvedOutDir = resolve(outDir)
  return {
    name: 'spa-fallback-404',
    apply: 'build',
    closeBundle() {
      copyFileSync(resolve(resolvedOutDir, 'index.html'), resolve(resolvedOutDir, '404.html'))
    },
  }
}

export default defineConfig({
  plugins: [react(), spaFallback('dist')],
  base: '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          motion: ['framer-motion', 'motion'],
        },
      },
    },
  },
})
