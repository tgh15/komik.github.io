self.addEventListener("install", (e) => {
  console.log("install");
  caches.waitUntil(
    caches.open("static").then((cache) => {
      return cache.addAll(["./", "./assets/logo.png", "./assets/tailwind.css"]);
    })
  );
});
