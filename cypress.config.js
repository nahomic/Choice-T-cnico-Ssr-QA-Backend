const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://echo-serv.tbxnet.com/v1',
    setupNodeEvents(on, config) {
    },
    video: false, 
  },
});
