if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("serviceWorker.js")
    .then((registration) => {
      console.log("Registered");
      console.log(registration);
    })
    .catch((err) => {
      console.log("failed");
    });
}
