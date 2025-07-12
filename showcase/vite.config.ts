import { defineConfig } from 'vite';

export default defineConfig({
  base: "/Showcase/showcase", // important for GitHub Pages
  
  // Build configuration
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Set to true if you want source maps in production
    rollupOptions: {
      input: {
        main: './index.html',
        // Add other HTML entry points if you have multiple pages
      }
    }
  },

  // Development server configuration
  server: {
    port: 3000,
    open: true, // Automatically open browser on dev server start
    cors: true
  },

  // Preview server configuration (for 'npm run preview')
  preview: {
    port: 4173,
    open: true
  },

  // CSS configuration
  css: {
    devSourcemap: true // Enable CSS source maps in development
  }
});

