/// <reference types="Cypress"/>

import 'cypress-file-upload';
import { faker } from "@faker-js/faker";

describe('Modulo parametros: Aliados', function () {

  beforeEach(() => {
    cy.visit(Cypress.env('url'))

    cy.fixture('example').then(function (datos) {
      this.datos = datos
    })
  });

  it('Parametros: Crear Aliado', function () {

    cy.get('[name="email"]').type(this.datos.UserCoordinador)
    cy.get('[name="password"]').type(this.datos.UserContraseña)
    cy.get('.label').contains('Ingresar').click();

    cy.wait(2000);

    cy.navegarAConfiguracionUsuario();

    cy.get('.btn').click()
    cy.focused().click()// Click on el with focus
    cy.contains('NUEVO').click()

    //nombres random
    cy.get('[name="first_name"]').type(faker.name.firstName());

    cy.get('[name="last_name"]').type(faker.name.firstName());

    //Comandos propios
    cy.generarCedula().then((cedula) => {
      cy.get('[name="identification_number"]').type(cedula)
    });

    cy.generarNumeroCelular().then((numeroCelular) => {
      cy.get('#celular').type(numeroCelular);
    });

    cy.generarCorreoElectronico().then((randomEmail) => {
      cy.get('[name="email"]').type(randomEmail);
    });

    cy.get('.form-group .css-1115wtz-control').type(this.datos.Concesionario)
      .type('{selectall}{backspace}')
      .type(this.datos.Concesionario)
    cy.get('div[id^="react-select-"]').click()


    cy.wait(1000);

    cy.get('.btn')
    cy.contains('GUARDAR').click()
  })

  it('Parametros: Editar Aliado', function () {

    cy.get('[name="email"]').type(this.datos.UserCoordinador)
    cy.get('[name="password"]').type(this.datos.UserContraseña)
    cy.get('.label').contains('Ingresar').click();

    cy.wait(2000);

    cy.navegarAConfiguracionUsuario();

    cy.get('.dropdown')
    cy.contains('OPCIONES').click()

    cy.get('.dropdown-item')
    cy.contains('EDITAR').click()

    cy.wait(1000);

    cy.get('[name="first_name"]').type('{selectall}{backspace}').type(faker.name.firstName());

    //Comandos propios
    cy.generarCedula().then((cedula) => {
      cy.get('[name="identification_number"]').type('{selectall}{backspace}').type(cedula)
    });

    cy.generarNumeroCelular().then((numeroCelular) => {
      cy.get('#celular').type(numeroCelular);
    });

    cy.wait(1000);

    cy.get('.btn')
    cy.contains('GUARDAR').click()
  })

  it('Parametros: Acciones (Habilitar/deshabilitar)', function () {

    cy.get('[name="email"]').type(this.datos.UserCoordinador)
    cy.get('[name="password"]').type(this.datos.UserContraseña)
    cy.get('.label').contains('Ingresar').click();

    cy.wait(2000);

    cy.navegarAConfiguracionUsuario();

    cy.get('.dropdown')
    cy.contains('OPCIONES').click()

    cy.get('.btn')
    cy.contains('DESHABILITAR').click()

    cy.wait(1000)

    // Modal
    cy.get('.footer-container .btn').contains('DESHABILITAR').click();

    cy.get('.footer-container .btn').contains('ACEPTAR').click();

    cy.wait(1000)

    // Habilitar concesionarios

    cy.get('.nav-item .nav-link')
    cy.contains('INACTIVOS').click();

    cy.get('.dropdown')
    cy.contains('HABILITAR').click()

    cy.wait(1000)

    // Modal
    cy.get('.footer-container .btn').contains('HABILITAR').click();

    cy.get('.footer-container .btn').contains('ACEPTAR').click();

  })
})

