import Glide from "@glidejs/glide";
import "/index.scss";

import mobileParamour from "./assets/home/mobile/image-hero-paramour.jpg";
import tabletParamour from "./assets/home/tablet/image-hero-paramour.jpg";
import desktopParamour from "./assets/home/desktop/image-hero-paramour.jpg";

import mobileSeraph from "./assets/home/mobile/image-hero-seraph.jpg";
import tabletSeraph from "./assets/home/tablet/image-hero-seraph.jpg";
import desktopSeraph from "./assets/home/desktop/image-hero-seraph.jpg";

import mobileFederal from "./assets/home/mobile/image-hero-federal.jpg";
import tabletFederal from "./assets/home/tablet/image-hero-federal.jpg";
import desktopFederal from "./assets/home/desktop/image-hero-federal.jpg";

import mobileTrinity from "./assets/home/mobile/image-hero-trinity.jpg";
import tabletTrinity from "./assets/home/tablet/image-hero-trinity.jpg";
import desktopTrinity from "./assets/home/desktop/image-hero-trinity.jpg";

// Initialize after DOM has mounted
setTimeout(() => {
  new Glide(".glide").mount();
}, 1);

const featuredCardContainer = document.querySelector(
  ".featured-cards-container"
);
const carouselUlContainer = document.querySelector(".glide__slides");

featuredCardContainer.insertAdjacentHTML("beforeend", getFeaturedCardsHTML());
carouselUlContainer.insertAdjacentHTML("afterbegin", getPrimaryHeroesHTML());

// TODO: import images
function getPrimaryHeroesHTML() {
  const configs = [
    {
      images: [mobileParamour, tabletParamour, desktopParamour],
      title: "Project Paramour",
      description:
        "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
    },
    {
      images: [mobileSeraph, tabletSeraph, desktopSeraph],
      title: "Seraph Stations",
      description:
        "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
    },
    {
      images: [mobileFederal, tabletFederal, desktopFederal],
      title: "Federal Tower II",
      description:
        "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
    },
    {
      images: [mobileTrinity, tabletTrinity, desktopTrinity],
      title: "Trinity Bank Tower",
      description:
        "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
    },
  ];

  return configs
    .map(
      (config) =>
        `
        <li class="glide__slide">
          <picture
            class="picture-full-width-centered"
            style="position: relative"
          >
            <source
              media="(min-width:1440px)"
              srcset="${config.images[2]}"
            />
            <source
              media="(min-width:768px)"
              srcset="${config.images[1]}"
            />
            <img
              src="${config.images[0]}"
              alt="${config.title} architecture design"
            />
            <div class="hero-dark-overlay" style="z-index: 5"></div>
          </picture>

          <div class="hero-content">
            <h1 class="h1-bold white-text">${config.title}</h1>
            <p class="hero-description">
              ${config.description}
            </p>
            <a href="/pages/portfolio/">
              <button class="button">
                <p>See Our Portfolio</p>
                <i class="fas fa-arrow-right"></i>
              </button>
            </a>
          </div>
        </li>
      `
    )
    .join(" ");
}

function getFeaturedCardsHTML() {
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

  return featuredCardConfig
    .map((config, index) => {
      return `
            <div class="featured-card featured-${index + 1}">
          <h1 class="h1-large"> ${index + 1} </h1>
          <div class="linear-overlay"></div>
          <div class="featured-card-text">
            <h3 class="h3"> ${config.title} </h3>
            <p class="pointer">
              <a class="anchor-padding-top-bottom" href="index.html" style="color: inherit">View All Projects </a>
            </p>
          </div>
        </div>
    `;
    })
    .join(" ");
}
