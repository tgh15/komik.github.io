self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("static").then((cache) => {
      return cache.addAll([
        "./",
        "./assets/logo.png",
        "https://cdn.tailwindcss.com/3.1.8",
      ]);
    })
  );
});
