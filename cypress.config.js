const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "8o8u4j",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    trashAssetsBeforeRuns: true,
    screenshotOnRunFailure: true,
    env: {
      webdriveruni_homepage: "http://www.webdriveruniversity.com",
      first_name: "sarah",
    },
  },
});
