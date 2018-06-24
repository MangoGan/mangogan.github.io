this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/service_workers/',
        '/service_workers/index.html',
        '/service_workers/app.js',
        '/service_workers/img/lalala.png'
      ]);
    })
  );
});