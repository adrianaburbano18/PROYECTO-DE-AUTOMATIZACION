import 'cypress-file-upload';
import { faker } from "@faker-js/faker";
/// <reference types="Cypress"/>   


describe('Primer conjunto de casos de prueba', function () {

    before(function () {
        cy.fixture('example').then(function (datos) {
            this.datos = datos
        })
    })

    beforeEach(() => {
        cy.visit(Cypress.env('url'));
      });
 
 it('Mesa de aprobación', function () {
        cy.get('input').first().type('mesa002@uni2.com.co')
        cy.get('input').last().type('finamiga2021')
        cy.get('.label').click()

        cy.wait(3000)

        cy.get('.nav-item .nav-link')
        cy.contains('EN PROCESO').click();

        cy.wait(2000)

        cy.get('.align-middle .finamiga-color .box-state')
            .first()// Selecciona el primer elemento del conjunto
            .click();

        cy.wait(2000);

        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();

        cy.wait(2000);

        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();

        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();

        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();

        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();

        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();


        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();
        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();

        cy.get('.btn .MuiSvgIcon-root').click();

        cy.wait(2000)

        cy.get('#tipo_identificacion').should('be.visible').click()
            .type('IDENTIFICACIÓN TRIBUTARIA')
        //   .type(this.datos.Identificación)
        cy.get('div[id^="react-select-"]').click()

        function generarCedula() {
            let cedula = '';
            for (let i = 0; i < 9; i++) {
                cedula += Math.floor(Math.random() * 10);
            }
            return cedula;
        }

        for (let i = 0; i < 1; i++) { // Realiza la prueba 5 veces con cédulas aleatorias
            const cedulaAleatoria = generarCedula();
            cy.get('[name="numero_identificacion"]').type(cedulaAleatoria);
        }

        cy.get('[name="primer_nombre"]').type(faker.name.firstName());

        cy.get('[name="primer_apellido"]').type(faker.name.firstName());

        // cy.get('#bottom-navigation-bar .simple-icon-arrow-left').click();



        /*   //SECCION DE DOCUMENTOS
   
           cy.get('#solicitud_tipo_documento')
               .type('LEGAL CHECK')
           cy.get('div[id^="react-select-"]').click()
   
           cy.get('.form-control').attachFile('Document.pdf');
           cy.get('.button-add').type('AGREGAR').click();
           cy.wait(2000);
   
           cy.get('#solicitud_tipo_documento')
               .type('FOTOS DEL CRÉDITO')
           cy.get('div[id^="react-select-"]').click()
   
           cy.get('.form-control').attachFile('Document.pdf');
           cy.get('.button-add').type('AGREGAR').click();
           cy.wait(2000);
   
           cy.get('#solicitud_tipo_documento')
               .type('CEDULA')
           cy.get('div[id^="react-select-"]').click()
   
           cy.get('.form-control').attachFile('Document.pdf');
           cy.get('.button-add').type('AGREGAR').click();
           cy.wait(2000);*/

        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();
    })
})