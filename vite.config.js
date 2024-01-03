// vite.config.js
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import ViteReactPlugin from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [ViteReactPlugin()],
  build: {
    outDir: 'build',
    cssCodeSplit: true,
    sourcemap: true,
    // Add your purge configuration here
    rollupOptions: {
      output: {
        manualChunks: () => 'everything.js',
      },
    },
    // PurgeCSS configuration
    // Ensure to include all necessary paths
    terserOptions: {
      compress: {
        keep_infinity: true,
        drop_console: true,
      },
    },
    // ...
  },
});

