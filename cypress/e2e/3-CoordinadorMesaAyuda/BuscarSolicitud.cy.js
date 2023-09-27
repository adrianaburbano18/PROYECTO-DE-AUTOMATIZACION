/// <reference types="Cypress"/>

describe('COORDINADOR DE CRÉDITO', function () {
    beforeEach(() => {
        cy.fixture('example').then(function (datos) {
            this.datos = datos
        })
        cy.visit(Cypress.env('url'));
    });

    it('Modulo: Buscar solicitudes', function () {

        cy.get('[name="email"]').type(this.datos.UserCoordinador)
        cy.get('[name="password"]').type(this.datos.UserContraseña)
        cy.get('.label').contains('Ingresar').click();

        cy.wait(1000);

        cy.CambiarRol();

        cy.get('.menu-button').click();

        cy.wait(1000);
        cy.get('a[data-flag="searcRequest"]').click()
       
        cy.get('[name="numero_identificacion"]')
        .type('1144105898')

        cy.contains('BUSCAR').click();
    })
})
