const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // Configure your E2E tests here
    baseUrl: 'https://angular.realworld.io',
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}"
  },
})