/// <reference types="Cypress"/>

describe('Modulo Zonificación', function () {

  beforeEach(function () {
    cy.visit(Cypress.env('url'));
  })

  before(function () {
    //Cargamos los valores del archivo example.json en un objeto de datos
    cy.fixture('example').then(function (datos) {
      this.datos = datos
    });
  })

  it('Zonificaicón de barrios', function () {

    cy.get('[name="email"]').type(this.datos.UserCoordinador);
    cy.get('[name="password"]').type('finamiga2021');
    cy.contains('Ingresar').click();

    // Cambiar el rol
    cy.CambiarRol();

    // Navegar a la página de búsqueda
    cy.get('.menu-button').click();
    cy.get('a[data-flag="zonification"]').click()

    cy.get('#regional').type('ANTIOQUIA')
    cy.get('div[id^="react-select-"]').click()

    cy.get('#municipio').type('MEDELLIN')
    cy.get('div[id^="react-select-"]').click()

    cy.get('#oficinas').type('MEDELLIN SUR')
    cy.get('div[id^="react-select-"]').click()

    cy.get('#Tooltip-Switch-responsable_null').click();

    cy.wait(2000)

    cy.get('#selection .checkbox-table').click();

    cy.get('.btn').contains('ASIGNACIÓN MASIVA').click();

    cy.get('#ejecutivo').type('EJECUTIVO108@uni2.com.co')
    cy.get('div[id^="react-select-"]').click()

  


    cy.get('.btn').contains('ASIGNAR').click();

    cy.wait(2000)
  });


})

