/**
 * Created by developer on 31.07.18.
 */
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('cache1').then(function(cache) {
            return cache.addAll([
//                "/",
                "/img/1.jpg",
                "/img/2.jpg",
                "/img/3.jpg",
                "/img/4.jpg",
                "/img/5.jpg",
                "/img/6.jpg",
                "/img/7.jpg",
                "/img/8.jpg",
                "/img/9.jpg",
                "/img/10.jpg",
//                "/js/main.js",
//                "/js/restaurant_info.js",
//                "/js/dbhelper.js",
                "/index.html",
                "/restaurant.html",
                "/css/styles.css"
//                "/data/restaurants.json"
                //test
            ]);
        })
    );
});


self.addEventListener('fetch', function(event) {
    event.respondWith(
    caches.match(event.request).then(function(resp) {
      return resp || fetch(event.request).then(function(response) {
        let responseClone = response.clone();
        caches.open('cache1').then(function(cache) {
          cache.put(event.request, responseClone);
        });

        return response;
      });
    }).catch(function() {
      return caches.match('/sw-test/gallery/myLittleVader.jpg');
    })
  );
});