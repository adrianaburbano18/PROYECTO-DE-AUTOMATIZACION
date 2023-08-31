// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add("agregarElementoAlCarrito", () => {
    
  function generarCedula() {
    let cedula = '';
    for (let i = 0; i < 9; i++) {
      cedula += Math.floor(Math.random() * 10);
    }
    return cedula;
  }

  for (let i = 0; i < 1; i++) { // Realiza la prueba 5 veces con cédulas aleatorias
    const cedulaAleatoria = generarCedula();
    cy.get('[name="numero_identificacion"]').type(cedulaAleatoria);
  }



})