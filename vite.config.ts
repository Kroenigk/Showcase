import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Showcase/',
  assetsInclude: ['**/*.pdf'],
  plugins: [react()],

  // Build configuration
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
  // Development server configuration
  server: {
    port: 3000,
    open: true,
    cors: true,
  },

  // Preview server configuration (for 'npm run preview')
  preview: {
    port: 4173,
    open: true,
  },

  // CSS configuration
  css: {
    devSourcemap: true,
  },
});
