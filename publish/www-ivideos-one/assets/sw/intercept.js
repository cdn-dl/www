// 缓存图片
self.addEventListener('install', function (evt) {
 /*   evt.waitUntil(
       caches.open('my-test-cahce-v1').then(function (cache) {
           return cache.addAll(cacheFiles);
       })
   ); */
   console.info("===========install===xx");
   console.info("req============");
   fetch("https://www.qq.com").then(res=>{
      console.info("fetch====qq 0", res.status)
   })
});
self.addEventListener("fetch", function (evt) {
   console.info("interect=========== new req", request);

   var request = evt.request.clone();
   event.respondWith(() => {
      console.info("new req", request);
      return fetch(request);
   });
});

