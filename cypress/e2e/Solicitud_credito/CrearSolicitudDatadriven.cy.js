/// <reference types="Cypress"/>

describe('Primer conjunto de casos de prueba', function () {

    before(function () {
        cy.fixture('example').then(function (datos) {
            this.datos = datos
        })

    })

    this.beforeEach(() => {
        //ingresar a la pagina web
        cy.visit("https://qa-app.uni2.com.co")
    })

    it('Login principal', function () {
        cy.get('input').first().type('mesa009@uni2.com.co')
        cy.get('input').last().type('finamiga2021')
        cy.get('.label').click()


        cy.contains('NUEVA SOLICITUD').click()

        cy.wait(2000)

        //beforeEach: haga esto a todo en este archivo
        
        const indexToUse = 0; // Index of the identification number to use


        this.datos.number.forEach(number => {
            cy.get('[name="numero_identificacion"]').type(number);
            // Here you can add more Cypress commands if needed
          });


       /* this.datos.number.forEach(function (number){
            cy.get('[name="numero_identificacion"]').type(number)

        })*/


        cy.get('#producto').should('be.visible').click();
        cy.get('.react-select').contains('CARGA').click();
        cy.get('#bottom-navigation-bar').click();


    })
})