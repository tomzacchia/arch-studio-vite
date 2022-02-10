const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        nested: resolve(__dirname, "src/pages/about-us.html"),
      },
    },
  },
});
