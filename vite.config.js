import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor dependencies for better caching and parallel loading
          reactCore: ['react', 'react-dom'],
          router: ['react-router-dom'],
          chakra: ['@chakra-ui/react', '@emotion/react', '@emotion/styled'],
          motion: ['framer-motion'],
          utils: ['react-helmet-async', 'react-icons']
        }
      }
    }
  }
})
