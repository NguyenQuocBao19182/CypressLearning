const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "8o8u4j",
  defaultCommandTimeout: 20000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      defaultCommandTimeout: 10000;
    },
    trashAssetsBeforeRuns: true,
    screenshotOnRunFailure: true,
    env: {
      webdriveruni_homepage: "http://www.webdriveruniversity.com",
      first_name: "sarah",
    },
  },
});
