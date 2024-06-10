function openNav() {
  var menu = document.getElementById("myMenu");
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "flex";
    requestAnimationFrame(() => {
      menu.style.opacity = "1";
    });
  }
}

function closeNav() {
  var menu = document.getElementById("myMenu");
  menu.style.opacity = "0";
  menu.addEventListener('transitionend', function handler() {
    menu.style.display = "none";
    menu.removeEventListener('transitionend', handler);
  }, { once: true });
}