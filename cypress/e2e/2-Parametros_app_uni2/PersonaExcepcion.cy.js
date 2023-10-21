import { faker } from "@faker-js/faker";


describe('Modulo parametros: Persona excepcion', function () {

  beforeEach(() => {
    cy.visit(Cypress.env('url'))

    cy.fixture('example').then(function (datos) {
      this.datos = datos
    })

  });
  
  it('Personas', function () {
    cy.get('[name="email"]').type(this.datos.UserCoordinador)
    cy.get('[name="password"]').type(this.datos.UserContraseña)
    cy.get('.label').contains('Ingresar').click();


    cy.CambiarRol();

    cy.wait(1000);

    cy.navegarParametros();
    cy.get('.simple-icon-people').click();

    //Crear persona 
    cy.get('.btn')
    cy.contains('NUEVO').click()

   /* cy.get('#tipo_identificacion').should('be.visible').click(); 
    cy.get('.react-select')
      .contains('IDENTIFICACIÓN TRIBUTARIA').click(); */

        cy.get('#tipo_identificacion').should('be.visible').click().type('IDENTIFICACION')
        cy.get('.list__value-container').contains('IDENTIFICACION TRIBUTARIA').click()
      /*  cy.get('.react-select').each(($el, index, $list) =>{ 
        if($el.text()=="IDENTIFICACION TRIBUTARIA")
          {
            cy.wrap($el).click() 
          }
        })*/

    cy.generarCedula().then((cedula) => {
      cy.get('[name="numero_identificacion"]').type(cedula)
    });

    cy.get('[name="primer_nombre"]').type(faker.name.firstName());

    cy.get('[name="primer_apellido"]').type(faker.name.firstName());

    cy.get('#genero').type('FEMENINO')
    cy.get('div[id^="react-select-"]').click();

    cy.contains('label', 'Lugar expedición documento').click()
      .type(this.datos.City)
      .type('{selectall}{backspace}')
      .type(this.datos.City)
    cy.get('div[id^="react-select-"]').click()

    cy.Generarfechaexpediciondocumento();

    cy.contains('label', 'Lugar nacimiento').click()
      .type(this.datos.City)
      .type('{selectall}{backspace}')
      .type(this.datos.City)
    cy.get('div[id^="react-select-"]').click()

    const fechanacimiento = '1999-07-07';
    cy.get('[name="fecha_nacimiento"]').type(fechanacimiento); 

    cy.get('.btn')
    cy.contains('GUARDAR').click()

    cy.wait(2000)

    //Crear exepción 
    cy.get('.btn')
    cy.contains('AGREGAR').click()

    cy.get('.form-group').eq(3).type('SIMIT')
    cy.get('div[id^="react-select-"]').click()

    cy.get('[name="observacion"]').type(Math.random().toString(36).substring(2, 15));

    cy.get('.btn')
    cy.contains('GUARDAR').click()

    cy.wait(2000);

    //inhabilitar exepción 

    cy.get('.nav-item .nav-link')
    cy.contains('PERSONAS CON EXCEPCIÓN').click()

    cy.wait(2000);

    cy.get('.btn')
    cy.contains('INHABILITAR').click()

  })

})

