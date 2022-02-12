import "./about-us.scss";

const cardsConfig = [
  {
    name: "Seraph Station",
    subtitle: "September 2019",
    bgImageUrlTablet: "../assets/portfolio/tablet/image-seraph.jpg",
    bgImageUrlMobile: "../assets/portfolio/mobile/image-seraph.jpg",
    bgImageUrlDesktop: "../assets/portfolio/desktop/image-seraph.jpg",
  },
  {
    name: "Eebox Building",
    subtitle: "August 2017",
    bgImageUrlMobile: "../assets/portfolio/mobile/image-eebox.jpg",
    bgImageUrlTablet: "../assets/portfolio/tablet/image-eebox.jpg",
    bgImageUrlDesktop: "../assets/portfolio/desktop/image-eebox.jpg",
  },
  {
    name: "Federal II Tower",
    subtitle: "March 2017",
    bgImageUrlMobile: "../assets/portfolio/mobile/image-federal.jpg",
    bgImageUrlTablet: "../assets/portfolio/tablet/image-federal.jpg",
    bgImageUrlDesktop: "../assets/portfolio/desktop/image-federal.jpg",
  },
  {
    name: "Project Del Sol",
    subtitle: "January 2016",
    bgImageUrlMobile: "../assets/portfolio/mobile/image-del-sol.jpg",
    bgImageUrlTablet: "../assets/portfolio/tablet/image-del-sol.jpg",
    bgImageUrlDesktop: "../assets/portfolio/desktop/image-del-sol.jpg",
  },
  {
    name: "Le Prototype",
    subtitle: "October 2015",
    bgImageUrlMobile: "../assets/portfolio/mobile/image-prototype.jpg",
    bgImageUrlTablet: "../assets/portfolio/tablet/image-prototype.jpg",
    bgImageUrlDesktop: "../assets/portfolio/desktop/image-prototype.jpg",
  },
  {
    name: "228B Tower",
    subtitle: "April 2015",
    bgImageUrlMobile: "../assets/portfolio/mobile/image-228b.jpg",
    bgImageUrlTablet: "../assets/portfolio/tablet/image-228b.jpg",
    bgImageUrlDesktop: "../assets/portfolio/desktop/image-228b.jpg",
  },
  {
    name: "Grand Edelweiss Hotel",
    subtitle: "September 2019",
    bgImageUrlMobile: "../assets/portfolio/mobile/image-edelweiss.jpg",
    bgImageUrlTablet: "../assets/portfolio/tablet/image-edelweiss.jpg",
    bgImageUrlDesktop: "../assets/portfolio/desktop/image-edelweiss.jpg",
  },
  {
    name: "Netcry Tower",
    subtitle: "August 2012",
    bgImageUrlMobile: "../assets/portfolio/mobile/image-netcry.jpg",
    bgImageUrlTablet: "../assets/portfolio/tablet/image-netcry.jpg",
    bgImageUrlDesktop: "../assets/portfolio/desktop/image-netcry.jpg",
  },
  {
    name: "Hypers",
    subtitle: "January 2012",
    bgImageUrlMobile: "../assets/portfolio/mobile/image-hypers.jpg",
    bgImageUrlTablet: "../assets/portfolio/tablet/image-hypers.jpg",
    bgImageUrlDesktop: "../assets/portfolio/desktop/image-hypers.jpg",
  },
  {
    name: "SXIV Tower",
    subtitle: "March 2011",
    bgImageUrlMobile: "../assets/portfolio/mobile/image-sxiv.jpg",
    bgImageUrlTablet: "../assets/portfolio/tablet/image-sxiv.jpg",
    bgImageUrlDesktop: "../assets/portfolio/desktop/image-sxiv.jpg",
  },
  {
    name: "Trinity Bank Tower",
    subtitle: "September 2010",
    bgImageUrlMobile: "../assets/portfolio/mobile/image-trinity.jpg",
    bgImageUrlTablet: "../assets/portfolio/tablet/image-trinity.jpg",
    bgImageUrlDesktop: "../assets/portfolio/desktop/image-trinity.jpg",
  },
  {
    name: "Project Paramour",
    subtitle: "February 2008",
    bgImageUrlMobile: "../assets/portfolio/mobile/image-paramour.jpg",
    bgImageUrlTablet: "../assets/portfolio/tablet/image-paramour.jpg",
    bgImageUrlDesktop: "../assets/portfolio/desktop/image-paramour.jpg",
  },
];

const portfolioContainer = document.querySelector(".portfolio");

const cardsHTML = cardsConfig
  .map(
    (card, index) => `
        <div class="portfolio-card portfolio-card-${
          index + 1
        }" style="background-image: url(${card.bgImageUrlMobile})">
        <div class="linear-overlay"></div>
        <div class="portfolio-card-text">
          <h3 class="h3"> ${card.name} </h3>
          <p class="pointer">
            ${card.subtitle}
          </p>
        </div>
      </div>
`
  )
  .join(" ");

portfolioContainer.innerHTML = cardsHTML;

window.addEventListener("resize", function () {
  const windowWitdh = window.innerWidth;
  const cards = document.querySelectorAll(".portfolio-card");

  if (windowWitdh >= 768 && windowWitdh < 1440) {
    cards.forEach((card, index) => {
      card.style.backgroundImage = `url(${cardsConfig[index].bgImageUrlTablet})`;
    });
  } else if (windowWitdh >= 1440) {
    cards.forEach((card, index) => {
      card.style.backgroundImage = `url(${cardsConfig[index].bgImageUrlDesktop})`;
    });
  } else {
    cards.forEach((card, index) => {
      card.style.backgroundImage = `url(${cardsConfig[index].bgImageUrlMobile})`;
    });
  }
});
