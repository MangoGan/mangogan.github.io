//新增了一个install事件监听器
this.addEventListener('install', function(event) {
  //使用ExtendableEvent.waitUntil方法确保Service Worker不会在wU里面的代码执行完之前，安装完成
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

//使用fetch事件监听器来劫持http响应
this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).catch(function() {
      return fetch(event.request);
    })
  );
})