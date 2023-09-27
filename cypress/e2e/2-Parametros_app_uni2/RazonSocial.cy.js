/// <reference types="Cypress"/>   

import { faker } from "@faker-js/faker";

describe('Modulo parametros: Barrios', function () {

  beforeEach(() => {
    cy.visit(Cypress.env('url'))

    cy.fixture('example').then(function (datos) {
      this.datos = datos
    })

  });
  
  it('Crear Razon social', function () {

    // Introducir las credenciales de inicio de sesión
    cy.get('[name="email"]').type('tesoreria@uni2.com.co')
    cy.get('[name="password"]').type(this.datos.UserContraseña)

    // Hacer clic en el botón de inicio de sesión
    cy.get('.label').contains('Ingresar').click();

    cy.wait(2000);

    //Menú
    cy.get('.menu-button').click();
    cy.get('.simple-icon-settings').click();
    cy.get('.d-block .iconsminds-pie-chart-3').click();

     //Crear barrio
     cy.get('.btn')
     cy.contains('NUEVO').click()
 
     cy.get('[name="name"]').type(faker.name.firstName());
 
     //Select de TIpo identificación 
     cy.get('#tipo_identificacion')
       .type('IDENTIFICACIÓN TRIBUTARIA')
     cy.get('div[id^="react-select-"]').click()
 
     cy.generarCedula().then((cedula) => {
       cy.get('[name="numero_identificacion"]').type(cedula)
     });
 
     cy.get('#tipo_transaccion').click()
       .type('AHORROS')
     cy.get('div[id^="react-select-"]').click()
 
     cy.get('#banco').click()
       .type(this.datos.RazonSocialBanco)
     cy.get('div[id^="react-select-"]').click()
 
     cy.generarCedula().then((cedula) => {
       cy.get('[name="numero_cuenta"]').type(cedula)
     });
 
     cy.wait(1000);
 
     cy.get('.btn')
     cy.contains('GUARDAR').click()
   })

   it('Editar razon social', function () {

    // Introducir las credenciales de inicio de sesión
    cy.get('[name="email"]').type('tesoreria@uni2.com.co')
    cy.get('[name="password"]').type(this.datos.UserContraseña)

    // Hacer clic en el botón de inicio de sesión
    cy.get('.label').contains('Ingresar').click();

    //Menú
    cy.get('.menu-button').click();
    cy.get('.simple-icon-settings').click();
    cy.get('.d-block .iconsminds-pie-chart-3').click(); 
 
     //EDITAR UN ALIADO
     cy.get('.dropdown')
     cy.contains('OPCIONES').click()
 
     cy.get('.dropdown-item')
     cy.contains('EDITAR').click()
 
     cy.wait(1000);
 
     cy.get('[name="name"]').type('{selectall}{backspace}')
     cy.get('[name="name"]').type(faker.name.firstName());
 

     cy.generarCedula().then((cedula) => {
      cy.get('[name="numero_identificacion"]').type('{selectall}{backspace}').type(cedula)
    });

    cy.get('#tipo_transaccion').click().type('{selectall}{backspace}')
      .type('AHORROS')
    cy.get('div[id^="react-select-"]').click()

    cy.get('#banco').click().type('{selectall}{backspace}')
      .type(this.datos.RazonSocialBanco)
    cy.get('div[id^="react-select-"]').click()
 
     cy.get('.btn')
     cy.contains('GUARDAR').click()
 
     cy.wait(2000);
   })

   it('Acciones: Razon social (Habilitar/deshabilitar)', function () {

    cy.get('[name="email"]').type('tesoreria@uni2.com.co')
    cy.get('[name="password"]').type(this.datos.UserContraseña)
    cy.get('.label').contains('Ingresar').click();

    cy.wait(2000);

    //Menú
    cy.get('.menu-button').click();
    cy.get('.simple-icon-settings').click();
    cy.get('.d-block .iconsminds-pie-chart-3').click();


    //inhabilitar Concesionario 

    cy.get('.dropdown')
    cy.contains('OPCIONES').click()

    cy.get('.btn')
    cy.contains('DESHABILITAR').click()

    // Modal
    cy.get('.footer-container .btn').contains('DESHABILITAR').click();

    cy.get('.footer-container .btn').contains('ACEPTAR').click();

    cy.wait(2000);
   // Habilitar concesionarios

   cy.get('.nav-item .nav-link')
   cy.contains('INACTIVOS').click();

   cy.get('.dropdown')
   cy.contains('HABILITAR').click()

   // Modal
   cy.get('.footer-container .btn').contains('HABILITAR').click();

   cy.get('.footer-container .btn').contains('ACEPTAR').click();
  })
})

