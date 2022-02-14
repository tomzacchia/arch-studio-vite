import "./styles/index.scss";

const featuredCardContainer = document.querySelector(
  ".featured-cards-container"
);

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
              <a class="anchor-padding-top-bottom" href="index.html" style="color: inherit">View All Projects </a>
            </p>
          </div>
        </div>
    `;
    })
    .join(" ");
}

featuredCardContainer.insertAdjacentHTML("beforeend", getFeaturedCardHTML());
