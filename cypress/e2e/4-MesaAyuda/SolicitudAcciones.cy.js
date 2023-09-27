import 'cypress-file-upload';


describe('Acciones de la solicitud de credito', function () {

    this.beforeEach(() => {
        cy.visit(Cypress.env('url'));

        cy.get('input').first().type('mesa009@uni2.com.co')
        cy.get('input').last().type('finamiga2021')
        cy.get('.label').click();
        cy.wait(3000);
    })

    it('Rechazar solicitud de crédito', function () {
        //ASIGNAR SOLUCICITUD DE CRÉDITO
        cy.get('.align-middle .d-flex .dropdown')
            .first().click();

        cy.log('Se ha seleccionado la solicitud');

        //ASIGNAREN PROCESO 
        cy.wait(2000)

        cy.get('.nav-item .nav-link')
        cy.contains('EN PROCESO').click();

        cy.wait(2000);

        cy.get('.align-middle .finamiga-color .box-state')
            .first()// Selecciona el primer elemento del conjunto
            .click();

        cy.wait(2000);

        cy.get('#bottom-navigation-bar')
        cy.get('.dropdown-toggle-split')
            .click();

        cy.get('.font-weight-semibold')
            .contains('RECHAZAR').click();

        cy.get('#oficinas').type('PALMIRA')
        cy.get('div[id^="react-select-"]').click()

        cy.get('#email_ejecutivo').type('ejecutivo024@uni2.com.co')
        cy.get('div[id^="react-select-"]').click()

        cy.get('#causal').type('MULTAS SUP. POLITICAS')
        cy.get('div[id^="react-select-"]').click()

        // utilizar el name y no el id
        cy.get('[name="observacion"]')
            .type(Math.random().toString(36).substring(2, 15));

        cy.get('.modal-footer .btn')
            .contains('RECHAZAR')
            .click();

        cy.wait(3000);
    })


    it('Desisitir solicitud de crédito', function () {
        //ASIGNAR SOLUCICITUD DE CRÉDITO
        cy.get('.align-middle .d-flex .dropdown')
            .first().click();

        cy.log('Se ha seleccionado la solicitud');

        //ASIGNAREN PROCESO 
        cy.wait(2000)

        cy.get('.nav-item .nav-link')
        cy.contains('EN PROCESO').click();
        cy.wait(2000);

        cy.get('.align-middle .finamiga-color .box-state')
            .first()// Selecciona el primer elemento del conjunto
            .click();

        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();

        cy.wait(2000);

        cy.get('.modal-footer .btn')
        cy.contains('ACEPTAR').click();

        cy.get('#bottom-navigation-bar')
        cy.get('.dropdown-toggle-split').click();
        cy.get('.font-weight-semibold')
            .contains('DESISTIR').click();

        cy.get('#oficinas').type('PALMIRA')
        cy.get('div[id^="react-select-"]').click()

        cy.wait(2000);

        cy.get('#email_ejecutivo').type('ejecutivo024@uni2.com.co')
        cy.get('div[id^="react-select-"]').click()

        cy.get('#causal').type('NO ESTA INTERESADO')
        cy.get('div[id^="react-select-"]').click()

        // utilizar el name y no el id
        cy.get('[name="observacion"]')
            .type(Math.random().toString(36).substring(2, 15));

        cy.get('.modal-footer .btn')
            .contains('DESISTIR').click();
    })
})

