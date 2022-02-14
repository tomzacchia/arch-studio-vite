const { resolve } = require("path");
const { defineConfig } = require("vite");
require("dotenv").config();

const mode = process.env.APP_ENV;
const VERCEL_URL = process.env.VERCEL_URL;

module.exports = defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        about: resolve(__dirname, "src/portfolio/index.html"),
      },
    },
  },
  plugins: [htmlPlugin()],
});

function getEnvBaseRoute() {
  if (mode === "development") {
    return "http://localhost:3000";
  } else {
    return VERCEL_URL;
  }
}

function htmlPlugin() {
  return {
    name: "pre-transform",
    transformIndexHtml: {
      enforce: "pre",
      transform(html, { filename }) {
        return `
          <!DOCTYPE html>
          <html lang="en">
            ${headMarkup}
            <body>
              <nav class="container nav">${navBarInnerHTML}</nav>
              ${html}
              <footer class="footer container-no-padding">${footerInnerHTML}</footer>
            </body>
          </html>
        `;
      },
    },
  };
}

// TODO: ABSOLUTE ROUTING
const headMarkup = `
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="./assets/favicon-32x32.png"
    />

    <title>Arch Studio</title>

    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Spartan:wght@100;500;800&display=swap"
      rel="stylesheet"
    />
    
    <script
      src="https://kit.fontawesome.com/349cf0313a.js"
      crossorigin="anonymous"
    ></script>
  </head>
`;

const navBarInnerHTML = `
      <p class="nav-title pointer">
        <a href="${getEnvBaseRoute()}" style="color: inherit">Arch</a>
      </p>
      <ul class="menu">
        <li class="menu-item">
          <a
            class="anchor-padding-top-bottom"
            href="${getEnvBaseRoute()}/portfolio/"
            style="color: inherit"
            >Portfolio</a
          >
        </li>
        <li class="menu-item">
          <a
            class="anchor-padding-top-bottom"
            href="${getEnvBaseRoute()}/about/"
            style="color: inherit"
            >About Us</a
          >
        </li>
        <li class="menu-item">
          <a
            class="anchor-padding-top-bottom"
            href="${getEnvBaseRoute()}/contact/"
            style="color: inherit"
            >Contact</a
          >
        </li>
      </ul>
      <div class="dark-overlay"></div>
      <div class="hamburger">
        <i class="fas fa-bars"></i>
      </div>
`;

const footerInnerHTML = `
<div class="footer-logo">
        <p>arch</p>
      </div>
      <div class="footer-main-container">
        <ul>
          <li>
            <a
              class="anchor-padding-top-bottom"
              href="${getEnvBaseRoute()}/portfolio/"
              style="color: inherit"
              >Portfolio</a
            >
          </li>
          <li>
            <a
              class="anchor-padding-top-bottom"
              href="${getEnvBaseRoute()}/about/"
              style="color: inherit"
              >About Us</a
            >
          </li>
          <li>
            <a
              class="anchor-padding-top-bottom"
              href="${getEnvBaseRoute()}/contact"
              style="color: inherit"
              >Contact</a
            >
          </li>
        </ul>
        <div class="footer-button-container">
          <a href="index.html">
            <button class="button">
              <p>See Our Portfolio</p>
              <i class="fas fa-arrow-right"></i>
            </button>
          </a>
        </div>
      </div>  
`;
