/// <reference types="Cypress"/>

describe('Reportes', function () {

    beforeEach(() => {
        cy.fixture('example').then(function (datos) {
            this.datos = datos
        })

        cy.visit(Cypress.env('url'));

        cy.get('input').first().type('latorres@uni2.com.co')
        cy.get('input').last().type('finamiga2021')
        cy.get('.label').click()

        cy.wait(3000);

        cy.get('.menu-button').click();

        cy.get('.simple-icon-calculator').click();
    });

    it('Simulador de crédito: LIBRE INVERSIÓN ', function () {

        cy.get('#empleado_credito_producto').click()
            .type(this.datos.empleado_libre_inversion)
        cy.get('div[id^="react-select-"]').click();

        cy.get('[name="monto_aprobado"]').type('1000000')

        cy.get('#plazo').type('34 meses')
        cy.get('div[id^="react-select-"]').click();

        cy.get('#tipo_garantia').type('SIN GARANTIA')
        cy.get('div[id^="react-select-"]').click();

        cy.wait(3000);

    })

    it('Simulador de credito:  EDUCATIVO / PREGRADO', function () {

        cy.get('#empleado_credito_producto').click()
            .type(this.datos.empleado_educativo)
        cy.get('div[id^="react-select-"]').click();

        cy.get('#empleado_credito_categoria_educativa').click()
            .type('PREGRADO')
        cy.get('div[id^="react-select-"]').click();

        cy.get('[name="monto_aprobado"]').type('1000000')

        cy.get('#plazo').type('34 meses')
        cy.get('div[id^="react-select-"]').click();

        cy.get('#tipo_garantia').type('SIN GARANTIA')
        cy.get('div[id^="react-select-"]').click();

        cy.wait(3000);
    })

    it('Simulador de credito: EDUCATIVO / POSGRADO', function () {

        cy.get('#empleado_credito_producto').click()
            .type(this.datos.empleado_educativo)
        cy.get('div[id^="react-select-"]').click();

        cy.get('#empleado_credito_categoria_educativa').click()
            .type('POSGRADO')
        cy.get('div[id^="react-select-"]').click();

        cy.get('[name="monto_aprobado"]').type('2000000')

        cy.get('#plazo').type('34 meses')
        cy.get('div[id^="react-select-"]').click();

        cy.get('#tipo_garantia').type('SIN GARANTIA')
        cy.get('div[id^="react-select-"]').click();

        cy.wait(3000);

    })

    it('Simulador de credito: EDUCATIVO / DIPLOMADO', function () {

        cy.get('#empleado_credito_producto').click()
            .type(this.datos.empleado_educativo)
        cy.get('div[id^="react-select-"]').click();

        cy.get('#empleado_credito_categoria_educativa').click()
            .type('DIPLOMADO')
        cy.get('div[id^="react-select-"]').click();

        cy.get('[name="monto_aprobado"]').type('2000000')

        cy.get('#plazo').type('34 meses')
        cy.get('div[id^="react-select-"]').click();

        cy.get('#tipo_garantia').type('SIN GARANTIA')
        cy.get('div[id^="react-select-"]').click();

        cy.wait(3000);

    })
})
