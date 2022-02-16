import "/index.scss";

const featuredCardContainer = document.querySelector(
  ".featured-cards-container"
);
const carouselUlContainer = document.querySelector(".glide__slides");

featuredCardContainer.insertAdjacentHTML("beforeend", getFeaturedCardsHTML());
carouselUlContainer.insertAdjacentHTML("afterbegin", getPrimaryHeroesHTML());

function getPrimaryHeroesHTML() {
  const configs = [
    {
      imageName: "paramour",
      title: "Project Paramour",
      description:
        "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
    },
    {
      imageName: "seraph",
      title: "Seraph Stations",
      description:
        "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
    },
    {
      imageName: "federal",
      title: "Federal Tower II",
      description:
        "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
    },
    {
      imageName: "trinity",
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
              srcset="./assets/home/desktop/image-hero-${config.imageName}.jpg"
            />
            <source
              media="(min-width:768px)"
              srcset="./assets/home/tablet/image-hero-${config.imageName}.jpg"
            />
            <img
              src="./assets/home/mobile/image-hero-${config.imageName}.jpg"
              alt="${config.imageName} architecture design"
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
