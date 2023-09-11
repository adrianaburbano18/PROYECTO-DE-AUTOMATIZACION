
   
   
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
   
   
   it('Ejecutivo', function () {
        cy.get('input').first().type('ejecutivo120@uni2.com.co')
        cy.get('input').last().type('finamiga2021')
        cy.get('.label').click()

        cy.wait(3000)

        cy.get('.align-middle .finamiga-color .box-state')
            .first()// Selecciona el primer elemento del conjunto
            .click();

        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();

        cy.wait(2000)

        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();

        cy.wait(2000)

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

        function generarcelular() {
            let cedula = '31';
            for (let i = 0; i < 9; i++) {
                cedula += Math.floor(Math.random() * 10);
            }
            return cedula;
        }

        for (let i = 0; i < 1; i++) { // Realiza la prueba 5 veces con cédulas aleatorias
            const cedulaAleatoria = generarcelular();
            cy.get('#celular').type(cedulaAleatoria);
        }

        cy.get('#tipo_relacion')
            .type('CODEUDOR')
        cy.get('div[id^="react-select-"]').click()

        cy.get('.btn')
            .contains('GUARDAR').click()

        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();

        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();

        cy.wait(2000)

        cy.get('[name="antiguedad"]').click()
            .type('{selectall}{backspace}')
            .type('2');

        cy.get('[name="antiguedad_local"]')
            .type('{selectall}{backspace}')
            .type('2');

        cy.get('[name="empleados_permanentes"]')
            .type('{selectall}{backspace}')
            .type('4');

        cy.get('[name="empleados_temporales"]')
            .type('{selectall}{backspace}')
            .type('4');


        cy.contains('label', 'Actividad del negocio').should('be.visible').click()
            .type('CULTIVO DE PALMA PARA ACEITE')
        cy.get('div[id^="react-select-"]').click()


        //Dirección
        cy.get('.quit-padding-select-address .form-control').eq(0)
            .select('VEREDA')
        cy.get('#direccionUno').type('SAN CARLOS').click();
        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();

        cy.wait(2000)

        cy.get('[name="estrato"]')
            .type('{selectall}{backspace}')
            .type('2');

        cy.contains('label', 'Actividad económica').should('be.visible').click()
            .type('CULTIVO DE PALMA PARA ACEITE')
        cy.get('div[id^="react-select-"]').click()


        cy.get('[name="antiguedad_residencia"]')
            .type('{selectall}{backspace}')
            .type('40');

        cy.get('[name="personas_a_cargo"]')
            .type('{selectall}{backspace}')
            .type('4');

        cy.get('[name="numero_hijos"]')
            .type('{selectall}{backspace}')
            .type('2');

        cy.get('#escolaridad').should('be.visible').click()
            .type('PRIMARIA')
        cy.get('div[id^="react-select-"]').click()

        cy.wait(2000);
        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();

        cy.wait(2000);
        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();

        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();

        //SECCION DE DOCUMENTOS

        cy.get('#solicitud_tipo_documento')
            .type('COMITÉ DE CRÉDITO')
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

        cy.get('#bottom-navigation-bar .simple-icon-arrow-left').click();
        cy.wait(2000);
        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').click();
        cy.wait(2000);
        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').click();
        cy.wait(2000);


        cy.get('.swal2-container .swal2-popup .swal2-actions .swal2-confirm')
            .contains('ACEPTAR')
            .click();

        cy.wait(2000);

        cy.get('.swal2-actions .swal2-confirm').contains('ACEPTAR').click();
    })

})
