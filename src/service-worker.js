const CACHE_NAME = "rishabh-anand-v1";
const URLS_TO_CACHE = [
  "/",
  "/index.html",
  "/style.css",
  "/bundle.js",
  "/assets/Hero_dark_jpg.jpg",
  "/assets/Hero_light_jpg.jpg",
  "/assets/RA_Final_logo.png",
];
self.addEventListener("install", function (event) {
  // Perform install events
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Cache Opened");
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        // Cache Hit
        return response;
      }
      return fetch(event.request);
    })
  );
});
