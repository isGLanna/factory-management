import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
  },
  retries: {
    runMode: 2,
    openMode: 0,
  },
  defaultCommandTimeout: 5000,
  pageLoadTimeout: 10000,
  requestTimeout: 5000,
  responseTimeout: 5000,

  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/screenshots',
})