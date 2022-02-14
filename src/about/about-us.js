import "./about-us.scss";

import cardsConfig from "./constants";

const portfolioContainer = document.querySelector(".portfolio");

const cardsHTML = cardsConfig
  .map((card, index) => {
    const windowWidth = window.innerWidth;
    const bgImageUrl = getImageUrlForMediaWidth(windowWidth, card);

    return `
        <div class="portfolio-card portfolio-card-${
          index + 1
        }" style="background-image: ${bgImageUrl}">
        <div class="linear-overlay"></div>
        <div class="portfolio-card-text">
          <h3 class="h3"> ${card.name} </h3>
          <p class="pointer">
            ${card.subtitle}
          </p>
        </div>
      </div>`;
  })
  .join(" ");

portfolioContainer.innerHTML = cardsHTML;

window.addEventListener("resize", function () {
  const windowWitdh = window.innerWidth;
  const cards = document.querySelectorAll(".portfolio-card");

  cards.forEach((card, index) => {
    card.style.backgroundImage = getImageUrlForMediaWidth(
      windowWitdh,
      cardsConfig[index]
    );
  });
});

function getImageUrlForMediaWidth(windowWidth, cardConfig) {
  let imageUrl = `url(${cardConfig.bgImageUrlMobile})`;

  if (windowWidth >= 1440) {
    imageUrl = `url(${cardConfig.bgImageUrlDesktop})`;
  } else if (windowWidth >= 768) {
    imageUrl = `url(${cardConfig.bgImageUrlTablet})`;
  }

  return imageUrl;
}
