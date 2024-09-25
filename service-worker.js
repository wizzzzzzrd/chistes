self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/help.html',
                '/styles.css',
                '/scripts.js',
                '/assets/icons/logo-192.png', // Icono de 192x192
                '/assets/icons/logo-512.png', // Icono de 512x512
                '/assets/icons/logo-384.png', // Icono de 384x384
                '/assets/icons/logo-256.png', // Icono de 256x256
                '/assets/icons/logo-96.png'    // Icono de 96x96
            ]);
        }).catch((error) => {
            console.error('Failed to cache:', error);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
