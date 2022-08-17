const {defineConfig} = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://172.17.0.2:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  video: false
});
