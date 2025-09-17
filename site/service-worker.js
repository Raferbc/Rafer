const CACHE_NAME = 'rafer-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './assets/logo-site.svg',
  './assets/background-pattern.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
