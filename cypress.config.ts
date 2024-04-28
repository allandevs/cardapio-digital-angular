import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setupNodeEvents(on, _config) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const cucumber = require('cypress-cucumber-preprocessor').default;
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const browserify = require('@cypress/browserify-preprocessor');

      const options = {
        ...browserify.defaultOptions,
        typescript: require.resolve('typescript'),
      };

      on('file:preprocessor', cucumber(options));
    },
    defaultCommandTimeout: 20000,
    baseUrl: 'http://localhost:4200',
    video: true,
    videosFolder: 'cypress/results/videos',
    screenshotsFolder: 'cypress/results/screenshots',
    chromeWebSecurity: false,
    specPattern: '**/*.feature',
    viewportWidth: 375,
    viewportHeight: 815,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      reporterEnabled: 'mocha-junit-reporter',
      mochaJunitReporterReporterOptions: {
        mochaFile: 'cypress/results/xunit.xml',
      },
    },
  },
});
