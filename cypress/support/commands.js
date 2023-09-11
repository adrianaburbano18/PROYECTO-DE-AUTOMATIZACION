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


Cypress.Commands.add('navegarParametros', () => {
  // Hacer clic en el botón de menú
  cy.get('.menu-button').click();

  // Hacer clic en el ícono de configuración (reemplaza 'simple-icon-settings' con el selector correcto)
  cy.get('.simple-icon-settings').click();

  return cy;
});

Cypress.Commands.add('navegarAConfiguracionUsuario', () => {
  // Hacer clic en el botón de menú
  cy.get('.menu-button').click();

  // Hacer clic en el ícono de configuración (reemplaza 'simple-icon-settings' con el selector correcto)
  cy.get('.simple-icon-settings').click();

  // Hacer clic en el ícono de usuario o el enlace del módulo deseado (reemplaza 'simple-icon-user-follow' con el selector correcto)
  cy.get('.simple-icon-user-follow').click();

  cy.get('.simple-icon-settings').click();
  
  // Retorna para poder encadenar más comandos si es necesario
  return cy;
});

Cypress.Commands.add('CambiarRol', () => {

  cy.get('.name').click();

  cy.get('.dropdown-item')
  cy.contains('Cambiar rol').click()

  cy.get('.form-group').click();
  cy.get('.react-select').contains('COORDINADOR MESA DE AYUDA').click();

  cy.get('.btn')
  cy.contains('CAMBIAR').click()

  return cy;
});




Cypress.Commands.add('generarCedula', () => {
  // Lógica para generar un número de cédula aleatorio
  const cedula = Math.floor(Math.random() * 1000000000).toString();
  return cedula;
});

Cypress.Commands.add('generarNumeroCelular', () => {
  // Genera un número aleatorio de 8 dígitos (sin contar '31' al principio)
  const numeroAleatorio = Math.floor(Math.random() * 90000000) + 10000000;
  // Agrega '31' al principio y luego el número aleatorio
  const numeroCelular = '31' + numeroAleatorio;
  // Devuelve el número de celular generado
  return numeroCelular;
});

Cypress.Commands.add('generarCorreoElectronico', () => {
  const randomEmail = Math.random().toString(36).substring(2, 15) + "@gmail.com"
  return randomEmail;
});



module.exports = {};
