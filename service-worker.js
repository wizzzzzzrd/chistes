self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/help.html',
                '/styles.css',
                '/scripts.js',
                '/assets/icons/logo-192.png',
                '/assets/icons/logo-512.png',
                '/assets/icons/logo-384.png',
                '/assets/icons/logo-256.png',
                '/assets/icons/logo-96.png'
            ]).catch((error) => {
                console.error('Error al agregar recursos a la caché:', error);
            });
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request).catch((fetchError) => {
                console.error('Error al obtener el recurso:', fetchError);
            });
        })
    );
});
