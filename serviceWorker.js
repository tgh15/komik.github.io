self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("static").then((cache) => {
      return cache.addAll(["./", "./assets/logo.png", "./assets/styles.css"]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  console.log(e.request.url);
});
