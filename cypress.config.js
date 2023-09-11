const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'q969qf',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  testFile:"**/*.feature",
  
  //repedir las pruebas
  /*retries:{
  runMode:1,
  openMode:1
  }*/
  env: {
    url: "https://qa-app.uni2.com.co",
  },
 
});
