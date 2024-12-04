
import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from "workbox-routing";
import { CacheFirst, NetworkFirst } from "workbox-strategies";
import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';


// Clean up old caches
cleanupOutdatedCaches();

// Precache assets (self.__WB_MANIFEST is replaced by the injected manifest during build)
precacheAndRoute(self.__WB_MANIFEST);

ServiceWorkerGlobalScope.skipWaiting();

// Ensure the service worker activates immediately after installation
self.skipWaiting();
clientsClaim();




// Cache images with CacheFirst strategy
registerRoute(
    ({ request }) => request.destination === 'image',
    new CacheFirst({
        cacheName: 'images',
        plugins: [
            new ExpirationPlugin({
                maxEntries: 50, // Limit the number of images to cache
                maxAgeSeconds: 30 * 24 * 60 * 60, // Cache images for 30 days
            }),
        ],
    })
);

// Cache API responses (content data) with NetworkFirst strategy
registerRoute(
    ({ url }) => url.origin === import.meta.env.VITE_API_BASE_URL,
    new NetworkFirst({
        cacheName: 'api-responses',
        networkTimeoutSeconds: 5,
    })
);

// Cache navigations with NetworkFirst strategy for offline support
registerRoute(
    ({ request }) => request.mode === 'navigate',
    new NetworkFirst({
        cacheName: 'pages',
        networkTimeoutSeconds: 5,
    })
);




// Optional: Add custom service worker functionality
self.addEventListener('install', (event) => {
    self.skipWaiting()
    console.log('Service worker installing...');
    event.waitUntil(
        caches.open('my-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/favicon.ico',
                '/apple-touch-icon-180x180.png',
                '/mask-icon.svg',
                '/pwa-192x192.png',
                '/pwa-512x512.png',
                '/pwa-64x64.png',
                '/src/index.html',
                '/src/App.css',
                '/src/main.jsx',
                '/src/index.css',
            ]);
        })
    );
});

self.addEventListener('activate', (event) => {
    console.log('Service worker activating...');
    // Take control of uncontrolled clients (e.g., open tabs)
    event.waitUntil(self.clients.claim());
});

// Optional: Listen for fetch events (custom logic can be added here)
self.addEventListener('fetch', (event) => {
    console.log('Fetching:', event.request.url);
    if (event.request.mode === 'navigate') {
        event.respondWith(
            caches.match(event.request).then((response) => {
                return response || fetch(event.request)
                    .catch(() => {
                        return caches.match('/index.html'); // Serve a fallback offline page
                    });
            })
        );
    }
});


