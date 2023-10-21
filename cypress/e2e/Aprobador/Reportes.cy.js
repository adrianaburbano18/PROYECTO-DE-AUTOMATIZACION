
import { faker } from "@faker-js/faker";

describe('Reportes', function () {

  beforeEach(() => {
    cy.fixture('example').then(function (datos) {
      this.datos = datos
    })

    cy.visit(Cypress.env('url'));
  });

  it('Generar reporte', function () {
    cy.get('input').first().type('mgarcia@uni2.com.co')
    cy.get('input').last().type('finamiga2021')
    cy.get('.label').click();

    cy.wait(1000);

    //CAMBIO DE ROL
    cy.get('.name')
      .click();

    cy.get('.dropdown-item')
    cy.contains('Cambiar rol').click()

    cy.get('.form-group').click();
    cy.get('.react-select').contains('DIRECTOR DE RIESGO').click();

    cy.get('.btn')
    cy.contains('CAMBIAR').click()


    cy.wait(1000);

    //MENU
    cy.get('.menu-button').click();
    cy.get('a[data-flag="blankpage"]').click()
    cy.contains('Comparativo 12 meses').click()

    cy.get('a[data-flag="blankpage"]').click()
    cy.contains('Desempeño Equipos').click()

    cy.get('a[data-flag="blankpage"]').click()
    cy.contains('Comparativo Productividad').click()

    cy.get('a[data-flag="blankpage"]').click()
    cy.contains('FNG').click()

    cy.get('a[data-flag="blankpage"]').click()
    cy.contains('Cierre Mes').click()

    cy.get('a[data-flag="blankpage"]').click()
    cy.contains('Tiempos de Respuesta').click()

    cy.get('a[data-flag="blankpage"]').click()
    cy.contains('Seguimiento').click()

    cy.get('a[data-flag="blankpage"]').click()
    cy.contains('Garantías Comunitarias').click()
  })

})

