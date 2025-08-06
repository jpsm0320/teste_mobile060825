const CACHE_NAME = 'pwa-task-list-v1';
const urlsToCache = [
    '/teste_mobile060825/',
    '/teste_mobile060825/index.html',
    '/teste_mobile060825/style.css',
    '/teste_mobile060825/manifest.json',
    '/teste_mobile060825/icons/icon-192x192.png',
    '/teste_mobile060825/icons/icon-512x512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});

