import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'three-vendor': ['three'],
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'icons': ['lucide-react']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
});
