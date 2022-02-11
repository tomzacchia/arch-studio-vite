import "./style.scss";

// const

var is_bars = true;
const hamburger = document.querySelector(".hamburger");
const darkOverlayNode = document.querySelector(".dark-overlay");
const menuItemsContainer = document.querySelector(".menu");
const MENU_ANIMATION_CLASSNAME = "animate-menu";
const featuredCardContainer = document.querySelector(
  ".featured-cards-container"
);

hamburger.addEventListener("click", () => {
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

// background-image: url("assets/portfolio/mobile/image-del-sol.jpg")
const featuredCardConfig = [
  {
    title: "Project Del Sol",
    bgImageUrl: "assets/portfolio/mobile/image-del-sol.jpg",
  },
  {
    title: "228B Tower",
    bgImageUrl: "assets/portfolio/mobile/image-228b.jpg",
  },
  {
    title: "Le Prototype",
    bgImageUrl: "assets/portfolio/mobile/image-prototype.jpg",
  },
];

function getFeaturedCardHTML() {
  return featuredCardConfig
    .map((config, index) => {
      return `
            <div class="featured-card featured-${index + 1}">
          <h1 class="h1-large"> ${index + 1} </h1>
          <div class="linear-overlay"></div>
          <div class="featured-card-text">
            <h3 class="h3"> ${config.title} </h3>
            <p class="pointer">
              <a href="index.html" style="color: inherit">View All Projects </a>
            </p>
          </div>
        </div>
    `;
    })
    .join(" ");
}

featuredCardContainer.insertAdjacentHTML("beforeend", getFeaturedCardHTML());

// <div class="featured-card featured-1">
//   <h1 class="h1-large"> 1 </h1>
//   <div class="linear-overlay"></div>
//   <div class="featured-card-text">
//     <h3 class="h3"> Project Del Sol </h3>
//     <p class="pointer">
//       <a href="index.html" style="color: inherit">View All Projects </a>
//     </p>
//   </div>
// </div>
//   <div class="featured-card featured-2">
//     <h1 class="h1-large"> 2 </h1>
//     <div class="linear-overlay"></div>
//     <div class="featured-card-text">
//       <h3 class="h3"> 228B Tower </h3>
//       <p class="pointer"> View All Projects </p>
//     </div>
//   </div>
//   <div class="featured-card featured-3">
//     <h1 class="h1-large"> 3 </h1>
//     <div class="linear-overlay"></div>
//     <div class="featured-card-text">
//       <h3 class="h3"> Le Prototype </h3>
//       <p class="pointer"> View All Projects </p>
//     </div>
//   </div>
// </div>
