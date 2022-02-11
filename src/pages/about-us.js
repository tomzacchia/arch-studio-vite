import "./about-us.scss";

window.addEventListener("resize", function () {
  const windowWitdh = window.innerWidth;

  if (windowWitdh >= 768) {
    const card = document.querySelector(".portfolio-card-1");
    card.style.backgroundImage =
      "url(../assets/portfolio/mobile/image-del-sol.jpg)";
  }
});
