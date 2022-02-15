import "./main.scss";

const navContainer = document.querySelector(".nav");

// MENU ANIMATION ========================================
var is_bars = true;
const hamburger = document.querySelector(".hamburger");
const darkOverlayNode = document.querySelector(".dark-overlay");
const menuItemsContainer = document.querySelector(".menu");
const MENU_ANIMATION_CLASSNAME = "animate-menu";

navContainer.addEventListener("click", (event) => {
  if (is_bars) {
    hamburger.innerHTML = `<i class="fas fa-times"></i>`;
  } else {
    hamburger.innerHTML = `<i class="fas fa-bars"></i>`;
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
