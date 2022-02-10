import "./style.scss";

var is_bars = true;
const hamburver = document.querySelector(".hamburger");
const darkOverlayNode = document.querySelector(".dark-overlay");
const menuItemsContainer = document.querySelector(".menu");
const MENU_ANIMATION_CLASSNAME = "animate-menu";

hamburver.addEventListener("click", () => {
  if (is_bars) {
    hamburver.innerHTML = `<i class="fas fa-times"></i>`;
  } else {
    hamburver.innerHTML = `<i class="fas fa-bars"></i>`;
  }

  animationMenu();
  is_bars = !is_bars;
});

function animationMenu() {
  darkOverlayNode.classList.toggle("animate-overlay");
  menuItemsContainer.classList.toggle(MENU_ANIMATION_CLASSNAME);
}

window.addEventListener("resize", () => {
  const TABLET_SIZE = 768;

  if (document.documentElement.clientWidth >= TABLET_SIZE && !is_bars) {
    removeMenuAnimateClassIfExists();
  }
});

function removeMenuAnimateClassIfExists() {
  // menu-active, resize >= tablet, hide menu
  if (menuItemsContainer.classList.contains(MENU_ANIMATION_CLASSNAME)) {
    menuItemsContainer.classList.toggle(MENU_ANIMATION_CLASSNAME);
    return;
  }
}
