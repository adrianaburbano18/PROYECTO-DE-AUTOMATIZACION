const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '527yw2',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here q969qf fwqaiu
    },
  },

  testFile:"**/*.feature",
  
  //repedir las pruebas
  //Si una prueba falla en esta ejecución estándar, Cypress realizará un intento adicional antes de considerar la prueba como fallida.
  retries:{
  runMode:1
  //openMode:3
  },
  env: {
    url: "https://qa-app.uni2.com.co",
  },
 
});
