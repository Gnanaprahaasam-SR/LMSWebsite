import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Automatically update service worker
      injectRegister: 'auto', // Inject registration to index.html
      // strategies: 'injectManifest',
      // injectManifest: {
      //   swSrc:"/src/sw.js",
      //   swDest: 'dist/sw.js',
      // },
      // srcDir:'src',
      // filename:'sw.js',    
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg', 'robots.txt'],
      devOptions: {
        enabled: true,
      },
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        globPatterns: ['**/*.{js,css,html,jsx,ico,png,svg,xml,webmanifest,pptx,json,mp3,wav,mp4,webm,ogg,woff,woff2,eot,ttf,otf}'],
      },

      manifest: {
        name: 'Learning Management System',
        short_name: 'LMS App',
        description: 'Learning Management System',
        scope: '/',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        orientation: 'portrait',
        icons: [
          {
            src: 'pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png'
          },
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ],
      },
    }),
  ],
  build: {
    minify: false
    // rollupOptions: {
    //   input: {
    //     main: 'index.html',
    //   },
    // },
  },
  assetsInclude: ['**/*.{js,css,html,ico,png,svg,xml,webmanifest,pptx,json,mp3,wav,mp4,webm,ogg,woff,woff2,eot,ttf,otf, pdf,doc}'],
  optimizeDeps: {
    include: ['@pnp/sp'],
  },

});
