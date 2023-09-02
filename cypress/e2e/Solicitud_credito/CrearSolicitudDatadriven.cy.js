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

      cy.get('.form-control').type('26527711')
      // cy.get('.form-control').type('1144105898')

        cy.get('#producto').should('be.visible').click();
        cy.get('.react-select').contains('CARGA').click();
        cy.get('#bottom-navigation-bar').click();

        cy.wait(2000)


        
        .then(() => {
            cy.get('.modal-footer .btn').then(($elemento) => {
                cy.log(elemento)
              if ($elemento.is(':visible')) {
                // Realiza una acción si el elemento es visible después de seleccionar la opción
                cy.log('El elemento es visible');
          
              } else {
                // Realiza una acción si el elemento no es visible después de seleccionar la opción
                cy.log('El elemento no es visible');
                cy.log('La modal estaba presente y se cerró correctamente.bbbbbbbb')
              }
            });
          });

          
       /* cy.get('#formInformationClient')
            .then((modalButton) => {    
                    if ('.modal-footer .btn') {
                        cy.log('La modal estaba presente y se cerró correctamente.aaaaa')
                        cy.log(length)
                        cy.log(modalButton)
                    } else {
                         cy.log(length)
                         cy.log(modalButton)
                        cy.log('La modal estaba presente y se cerró correctamente.bbbbbbbb')
                    } 
                    
                
            });*/


        cy.get('[name="primer_nombre"]').type('ADRIANA').click();


        cy.wait(2000)


        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();

    })
})