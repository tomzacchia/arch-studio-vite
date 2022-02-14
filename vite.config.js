const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        about: resolve(__dirname, "src/about/index.html"),
      },
    },
  },
  plugins: [htmlPlugin()],
});

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

            <body>${html}</body>
          </html>
        `;
      },
    },
  };
}

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
