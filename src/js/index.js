if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/sw.js").then(
      function (registration) {
        console.log(
          "Registration done of service worker: ",
          registration.scope
        );
      },
      function (err) {
        console.log("Service worker registration failed: ", err);
      }
    );
  });
}
window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
  if (e.matches) {
    // User Prefers Light Mode
    // Do stuff here
    document.getElementById('heroimg').src = 'assets/Hero_light_png.png';
  }
  else {
    // Proceed with dark mode enabled
    document.getElementById('heroimg').src = 'assets/Hero_dark_png.png';
  }
});