
const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");


module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      await preprocessor.addCucumberPreprocessorPlugin(on,config);
      on("file:preprocessor",browserify.default(config));
      return config;
      
    },
    specPattern:"**/*.feature",
    testIsolation:false,
    baseUrl: "https://cms.demo.katalon.com",
    reporter:"mochawesome",
    reporterOptions:{
       reportDir:"cypress/reports",
       overwrite:"false",
       html:true,
       json:true

    }
  },
  
    
  
});


