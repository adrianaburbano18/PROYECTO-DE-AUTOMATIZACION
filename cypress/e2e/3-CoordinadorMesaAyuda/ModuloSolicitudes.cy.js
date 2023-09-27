/// <reference types="Cypress"/>

describe('COORDINADOR DE CRÉDITO', function () {
    beforeEach(() => {
        cy.fixture('example').then(function (datos) {
            this.datos = datos
        })
        cy.visit(Cypress.env('url'));
    });

    it('Reasignar Solicitudes', function () {

        cy.get('[name="email"]').type(this.datos.UserCoordinador)
        cy.get('[name="password"]').type(this.datos.UserContraseña)
        cy.get('.label').contains('Ingresar').click();

        cy.CambiarRol();

        cy.get('.dropdown')
        cy.contains('OPCIONES').click()

        cy.get('.dropdown-item')
        cy.contains('REASIGNAR').click()

        cy.get('#usuario').click()
            .type(this.datos.UserMesaAyuda)
        cy.get('div[id^="react-select-"]').click()

        cy.get('.btn')
        cy.contains('Asignar').click()

        //Reasignar solicitud

        cy.get('.dropdown')
        cy.contains('OPCIONES').click()

        cy.get('.dropdown-item')
        cy.contains('REASIGNAR').click()

        cy.get('#usuario').click()
            .type(this.datos.UserMesaAyuda)
        cy.get('div[id^="react-select-"]').click()

        cy.get('.btn')
        cy.contains('Asignar').click()

        //Eliminar solicitud
        cy.get('.dropdown')
        cy.contains('OPCIONES').click()

        cy.get('.dropdown-item')
        cy.contains('ELIMINAR').click()

        cy.get('.btn')
            .contains('ELIMINAR')
            .click();

        cy.wait(2000);

        cy.get('.btn').contains('ACEPTAR').click();

    })

    it('Retomar solicitudes', function () {

        cy.get('[name="email"]').type(this.datos.UserCoordinador)
        cy.get('[name="password"]').type(this.datos.UserContraseña)
        cy.get('.label').contains('Ingresar').click();

        cy.wait(1000);

        cy.CambiarRol();

        cy.wait(1000);

        cy.get('.nav-item .nav-link')
        cy.contains('PROCESADAS').click();

        cy.get('.dropdown')
        cy.contains('RETOMAR').click()

        cy.get('.swal2-actions .swal2-confirm').contains('ACEPTAR').click();
        cy.get('.swal2-actions .swal2-confirm').contains('ACEPTAR').click();

        cy.log('Retomar solicitud')

        cy.wait(2000);

        cy.get('.dropdown')
        cy.contains('RETOMAR').click()

        cy.get('.swal2-actions .swal2-confirm').contains('ACEPTAR').click();
        cy.get('.swal2-actions .swal2-confirm').contains('ACEPTAR').click();
    })

    it('Retomar solicitudes eliminadas', function () {
        cy.get('[name="email"]').type(this.datos.UserCoordinador)
        cy.get('[name="password"]').type(this.datos.UserContraseña)
        cy.get('.label').contains('Ingresar').click();

        cy.wait(1000);

        cy.CambiarRol();

        cy.wait(1000);

        cy.get('.nav-item .nav-link')
        cy.contains('ELIMINADAS').click();

        cy.get('.dropdown')
        cy.contains('ENVIAR A ...').click()

        cy.get('#status_to_send').click()
            .type('ORIGINACIÓN')
        cy.get('div[id^="react-select-"]').click()

        cy.get('[form="formResumeRequest"]').click()

        cy.wait(2000);

    })
})
