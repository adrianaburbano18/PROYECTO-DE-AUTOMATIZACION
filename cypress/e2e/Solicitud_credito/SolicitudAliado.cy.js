/// <reference types="Cypress"/> 

import 'cypress-file-upload';


describe('Rol alido gestion solicitud de crédito', function () {
    beforeEach(() => {
        cy.fixture('example').then(function (datos) {
            this.datos = datos
        })

        cy.visit(Cypress.env('url'));
    });

    it('Solicitud', function () {
        cy.get('[name="email"]').type(this.datos.UserAliado)
        cy.get('[name="password"]').type(this.datos.UserContraseña)
        cy.get('.label').contains('Ingresar').click();

        cy.contains('NUEVA SOLICITUD').click()

        cy.iterarCedulas();

        const indiceAleatorio = Math.floor(Math.random() * this.datos.producto.length);
        const productoAleatorio = this.datos.producto[indiceAleatorio];
        cy.get('#producto').click().type(productoAleatorio);
        cy.get('div[id^="react-select-"]').click();

        cy.get('#bottom-navigation-bar').click();

        cy.wait(2000)

        //Solicitante

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

        cy.AñadirfechaNacimiento();

        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();

        cy.wait(2000)

        //Contacto
        cy.contains('label', 'Ciudad').click().type('SAN ANDRES DE CUERQUIA');
        cy.wait(2000);
        cy.get('div[id^="react-select-"]').click();

        cy.contains('label', 'Barrio contacto').click()
            .type('PALO BLANCO');
        cy.get('div[id^="react-select-"]').click();

        cy.get('.quit-padding-select-address .form-control').eq(0)
            .select('VEREDA')
        cy.get('#direccionUno').type('{selectall}{backspace}').type('SAN CARLOS').click();

        cy.generarNumeroCelular().then((numeroCelular) => {
            cy.get('#celular').type('{selectall}{backspace}').type(numeroCelular);
        });

        cy.get('[name="correo_electronico"]').type('{selectall}{backspace}')

        cy.get('.btn')
            .contains('GUARDAR').click();

        cy.wait(2000)

        //Solicitud

        cy.get('#subproducto').should('be.visible').click();
        cy.get('.react-select').contains('CULTIVA').click();

        cy.get('[name="destino_recursos"]').type('CULTIVO DE CAFE');

        cy.get('[name="monto_solicitado"]').type(this.datos.monto_solicitado);

        cy.get('#plazo_solicitado').click();
        cy.get('.react-select').contains('14 Meses').click();

        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();


        cy.generarNumeroCelular().then((numeroCelular) => {
            //  cy.log(`Número de celular generado: ${numeroCelular}`);
            cy.get('#celular').type(numeroCelular);
        });

        cy.contains('label', 'Ciudad').click().type(this.datos.City);
        cy.wait(1000);
        cy.get('div[id^="react-select-"]').click();

        cy.get('#barrio_negocio').click().type('PALO BLANCO');
        cy.get('div[id^="react-select-"]').click();

        //Dirección
        cy.get('.quit-padding-select-address .form-control').eq(0)
            .select('VEREDA')
        cy.get('#direccionUno').type('SAN CARLOS').click();

        cy.get('[name="descripcion_actividad"]').type('AGRICULTOR').click();

        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();

        //SECCION DE DOCUMENTOS

        cy.CargarCedulaPDF();

        cy.wait(2000);

        cy.CargarSolicitudCreditoPDF();

        cy.get('#bottom-navigation-bar .simple-icon-arrow-left').click();
        cy.wait(1000);
        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').click();
        cy.wait(1000);
        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').click();
        cy.wait(1000);

        cy.get('.swal2-confirm').contains('ACEPTAR').click();

        cy.get('.swal2-confirm').contains('ACEPTAR').click();
    })

})

