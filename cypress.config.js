const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'q969qf',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  testFile:"**/*.feature",
  
  /*retries:{
  runMode:1,
  openMode:1
  }*/

 // const cucumber = require ('cypress-cucumber-preprocessor').default
 
});
