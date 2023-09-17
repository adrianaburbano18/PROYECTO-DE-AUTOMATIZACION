/// <reference types="Cypress"/>   

import 'cypress-file-upload';


describe('Solicitud Mesa de Ayuda', function () {
    beforeEach(() => {
        cy.fixture('example').then(function (datos) {
            this.datos = datos
        })

        cy.visit(Cypress.env('url'));
    });

    it('Mesa de ayuda-Originación', function () {
        cy.get('[name="email"]').type(this.datos.UserMesaAyuda)
        cy.get('[name="password"]').type(this.datos.UserContraseña)
        cy.get('.label').contains('Ingresar').click();
        
        cy.contains('NUEVA SOLICITUD').click()

        cy.CeulasPreaprobador();
        
        const indiceAleatorio = Math.floor(Math.random() * this.datos.producto.length);
        const productoAleatorio = this.datos.producto[indiceAleatorio];
        cy.get('#producto').click().type(productoAleatorio);
        cy.get('div[id^="react-select-"]').click();

        cy.get('#bottom-navigation-bar').click();

        cy.wait(2000)


        cy.get('.modal-footer .btn')
        cy.contains('ACEPTAR').click();

        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();

        //SECCION DE SOLICITUD DE CRÉDITO

        cy.get('#subproducto').should('be.visible').click();
        cy.get('.react-select').contains('CULTIVA').click();

        cy.get('#origen').click();
        cy.get('.react-select').contains('LLAMADA').click();

        cy.get('#medio').click();
        cy.get('.react-select').contains('REDES SOCIALES').click();

        cy.get('#tipo_credito').click();
        cy.get('.react-select').contains('RURAL').click();

        cy.get('#seguro_voluntario').click();
        cy.get('.react-select').contains('TIPO 2').click();

        cy.get('#tipo_seguro').click();
        cy.get('.react-select').contains('URBANO').click();


        cy.get('.form-control').type('1000000');

        cy.get('#plazo_solicitado').click();
        cy.get('.react-select').contains('14 Meses').click();

        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();


        //SECCION DE CONTACTO/NEGOCIO
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

        cy.get('[name="solicitud_negocio.celular"]').type('3182152120');

        cy.get('.form-group').eq(4).type('MEDELLIN')
            .type('MEDELLIN')
        cy.get('div[id^="react-select-"]').click()
            .wait(2000);

        cy.get('.form-group').eq(5).type('CALASANZ PARTE ALTA - BARRIO')
        cy.get('div[id^="react-select-"]')
            .click()
            .wait(2000);

        //Dirección
        cy.get('.quit-padding-select-address .form-control').eq(0)
            .select('VEREDA')
        cy.get('#direccionUno').type('SAN CARLOS').click();

        cy.get('.form-group').should('be.visible')
            .eq(8).type('AGRICULTOR').click();


        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();

        //SECCION DE DOCUMENTOS

        cy.get('#solicitud_tipo_documento')
            .type('SOLICITUD DE CRÉDITO')
        cy.get('div[id^="react-select-"]').click()

        cy.get('.form-control').attachFile('Document.pdf');
        cy.get('.button-add').type('AGREGAR').click();
        cy.wait(2000);

        cy.get('#solicitud_tipo_documento')
            .find('.list__value-container')
            .type('CEDULA') // (busca)
            .get('#react-select-22-option-1').click(); //(selecciona en la lista)

        //cargar un archivo de forma manual porque el pdf se carga dentro del proyecto
        cy.get('.form-control').attachFile('Document.pdf');
        cy.get('.button-add').type('AGREGAR').click();
        cy.wait(2000);

        cy.get('#bottom-navigation-bar .simple-icon-arrow-left').click();
        cy.wait(2000);
        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').click();
        cy.wait(2000);
        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').click();
        cy.wait(2000);

        cy.get('[name="codigo_ticket"]')
            .type('0');


        cy.get('.modal-footer .btn')
            .contains('FINALIZAR')
            .click();

        cy.wait(2000)
    })

})

