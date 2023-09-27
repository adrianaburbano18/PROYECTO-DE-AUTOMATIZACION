/// <reference types="Cypress"/>

describe('Documentos', function () {

  beforeEach(function () {
    cy.visit(Cypress.env('url'));
  })

  before(function () {
    //Cargamos los valores del archivo example.json en un objeto de datos
    cy.fixture('example').then(function (datos) {
      this.datos = datos
    });
  })

  it('Generacion de certificados', function () {

    cy.get('[name="email"]').type(this.datos.UserCoordinador);
    cy.get('[name="password"]').type('finamiga2021');
    cy.contains('Ingresar').click();

    // Cambiar el rol
    cy.CambiarRol();

    // Navegar a la página de búsqueda
    cy.get('.menu-button').click();
    cy.get('a[data-flag="documentos"]').click()

    cy.contains('Registrar').click()

    cy.get('#search').type('8660550675')
    cy.get('.search_click').click();

    cy.get('.btn').contains('PAZ Y SALVO').click();


    // Navegar a la página de búsqueda
    cy.get('.menu-button').click();
    cy.get('a[data-flag="documentos"]').click()
    cy.contains('Consultar').click()

     cy.get('[name="numero_identificacion_cliente"]')
     .type('8660550675').click()

  });


})

