const CACHE_NAME = "rishabh-anand-v1";
const URLS_TO_CACHE = [
  "/",
  "/index.html",
  "/style.css",
  "/bundle.js",
  // "/assets/Hero_dark_jpg.jpg",
  // "/assets/Hero_light_jpg.jpg",
  "/assets/Hero_dark_jpg_black.jpg",
  "/assets/Hero_light_jpg_white.jpg",
  "/assets/RA_Final_logo.png",
  "02afb26fe72fcc05298817491c044b7b.ttf",
  "3cd786652b8a2e9d41f210cb1a527ff6.ttf",
  "5dd5aa0269395f0ea92763e6cb3bc07a.ttf",
  "9919edff6283018571add043109dc20b.ttf",
  "fa8441f345d83a0bc4ec345a6948dbb0.ttf",
  "01923cbbba31d9cb7f29626b20775cdd.ttf",
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
