function openNav() {
  var menu = document.getElementById("myMenu");
  // Check if menu is already displayed
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "flex"; // Use flex to utilize CSS centering
    requestAnimationFrame(() => {
      menu.style.opacity = "1"; // Fade in
    });
  }
}

function closeNav() {
  var menu = document.getElementById("myMenu");
  menu.style.opacity = "0"; // Fade out
  menu.addEventListener('transitionend', function handler() {
    menu.style.display = "none"; // Hide after transition
    menu.removeEventListener('transitionend', handler);
  }, { once: true });
}