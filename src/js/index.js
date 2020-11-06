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
if (window.matchMedia("(prefers-color-scheme: light)").matches) {
  document.getElementById("heroimg").src = "assets/Hero_light_jpg_white.jpg";
  document.getElementById("aboutimg").src = "assets/About_light_jpg.jpg";
  document.getElementById("reha-img").src = "assets/Reha.png";
}
window
  .matchMedia("(prefers-color-scheme: light)")
  .addEventListener("change", (e) => {
    if (e.matches) {
      // User Prefers Light Mode
      // Do stuff here
      document.getElementById("heroimg").src =
        "assets/Hero_light_jpg_white.jpg";
      document.getElementById("aboutimg").src = "assets/About_light_jpg.jpg";
      document.getElementById("reha-img").src = "assets/Reha.png";
    } else {
      // Proceed with dark mode enabled
      document.getElementById("heroimg").src = "assets/Hero_dark_jpg_black.jpg";
      document.getElementById("aboutimg").src = "assets/About_dark_jpg.jpg";
      document.getElementById("reha-img").src = "assets/Reha.jpg";
    }
  });
