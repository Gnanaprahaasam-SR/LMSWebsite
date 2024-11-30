import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Automatically update service worker
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'], // Cache matching patterns
      },
      manifest: {
        name: 'Your App Name',
        short_name: 'App',
        description: 'Your App Description',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa-192x192.png', // Path to icon
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
