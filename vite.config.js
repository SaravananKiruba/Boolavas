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
          // Bundle all vendor dependencies together to avoid React instance conflicts
          vendor: ['react', 'react-dom', 'react-router-dom', '@chakra-ui/react', '@emotion/react', '@emotion/styled', 'framer-motion', 'react-helmet-async', 'react-icons']
        }
      }
    }
  }
})
