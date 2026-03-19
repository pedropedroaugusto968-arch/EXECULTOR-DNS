self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // Faz o app carregar mais rápido
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
