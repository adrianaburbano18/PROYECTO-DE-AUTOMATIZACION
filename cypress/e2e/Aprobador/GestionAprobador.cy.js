/// <reference types="Cypress"/>   

import 'cypress-file-upload';
import { faker } from "@faker-js/faker";


describe('Comite', function () {

    beforeEach(() => {
        cy.visit(Cypress.env('url'));
    });

    before(function () {
        cy.fixture('example').then(function (datos) {
            this.datos = datos
        })
    })

    it('Gestion solicitud: Aprobador', function () {
        cy.get('input').first().type(this.datos.UserComite)
        cy.get('input').last().type(this.datos.UserContraseña)
        cy.get('.label').click()

        cy.wait(1000)

        cy.get('.nav-item .nav-link')
        cy.contains('EN PROCESO').click();

        cy.wait(1000)

        cy.get('.align-middle .finamiga-color .box-state')
            .first()// Selecciona el primer elemento del conjunto
            .click();

        cy.wait(1000);

        //Documentos
        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();
        //solicitante
        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();
        //Consultas
        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();
        //Vinculo
        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();
        //contacto
        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();
        //conyuge
        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();
        //conyuge
        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();
        //Negocio
        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();
        //Codeudores
        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();
        //Referencias
        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();
        //Microempresa
        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();
        //PPI
        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();

        cy.get('#vinculo_agro').type('SI')
        cy.get('div[id^="react-select-"]').click()

        cy.get('#tipo_garantia').type('GARANTÍA COMUNITARIAS')
        cy.get('div[id^="react-select-"]').click()

        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();

        cy.get('.swal2-container .swal2-popup .swal2-actions .swal2-confirm')
            .contains('ACEPTAR')
            .click();

        cy.wait(2000);

        cy.get('.swal2-actions .swal2-confirm').contains('ACEPTAR').click();

    })
})