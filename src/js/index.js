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