/// <reference types="Cypress"/>

import { faker } from "@faker-js/faker";

describe('Modulo parametros: Barrios', function () {

    beforeEach(() => {
        cy.fixture('example').then(function (datos) {
            this.datos = datos
        })

        cy.visit(Cypress.env('url'));
    });

    it('Crear Barrios', function () {

        cy.get('[name="email"]').type(this.datos.UserCoordinador)
        cy.get('[name="password"]').type(this.datos.UserContraseña)
        cy.get('.label').contains('Ingresar').click();

        cy.wait(2000);

        //Cambiar rol

        cy.CambiarRol();

        cy.navegarParametros();
        cy.get('.simple-icon-location-pin').click();

        cy.wait(2000)

        cy.get('.btn')
        cy.contains('NUEVO').click()

        cy.get('[name="name"]').type(faker.name.firstName());

        cy.get('.modal-content #tipo').click()
        .type('BARRIO')
        cy.get('div[id^="react-select-"]').click();

        cy.get('.modal-body .form-group').eq(2).click()
            .type(this.datos.City)
            .type('{selectall}{backspace}')//SELECCIONA Y LIMPIA EL CAMPO
            .type(this.datos.City)
        cy.get('div[id^="react-select-"]').click()
        cy.get('.css-1uccc91-singleValue').should('contain.text', this.datos.City)

        cy.get('.btn')
        cy.contains('GUARDAR').click();

        cy.wait(2000)

        //Listado de barrios x ciudad
        cy.contains('label', 'Ciudad').click()
            .type('SAN ANDRES')
            .type('{selectall}{backspace}')
            .type(this.datos.City)
        cy.get('div[id^="react-select-"]').click()
        cy.get('.css-1uccc91-singleValue').should('contain.text', this.datos.City)

        cy.wait(3000)

        cy.get('#search').type('PALO BLANCO')
        cy.get('.search_click').click();
    })
})

