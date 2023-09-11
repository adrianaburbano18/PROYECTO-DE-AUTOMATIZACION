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

 

    // Busca el botón de la modal, pero no fallará si no se encuentra
    cy.get('.modal-footer .btn', { failOnStatusCode: true })
      .then((modalButton) => {
        if (modalButton.length > 0) {
          // La modal está presente, ciérrala
          cy.contains('ACEPTAR').click();
          cy.log('La modal estaba presente y se cerró correctamente.');
        } else {
          // La modal no está presente, continúa con el formulario
          cy.log('La modal no estaba presente. Continuando con el llenado del formulario.');

          // Aquí puedes agregar acciones para llenar el formulario
          cy.get('[name="primer_nombre"]').type('ADRIANA').click();

          // Agrega otras acciones que deseas realizar en el formulario
        }
      });




    // Verifica si la modal está presente
    cy.get('.modal-footer .btn', { timeout: 2000, failOnStatusCode: false })
      .then((modalButton) => {
        if (modalButton.length > 0) {
          // La modal está presente, ciérrala
          cy.contains('ACEPTAR').click();
          cy.log('La modal estaba presente y se cerró correctamente.');
        } else {
          // La modal no está presente, continúa con el formulario
          cy.log('La modal no estaba presente. Continuando con el llenado del formulario.');

          // Aquí puedes agregar acciones para llenar el formulario
          cy.get('[name="primer_nombre"]').type('ADRIANA').click();

          // Agrega otras acciones que deseas realizar en el formulario
        }
      });



    cy.get('.modal-footer .btn').should('be.visible').then((modalButton) => {
      if (modalButton.length > 0) {
        // El botón de la modal está presente, ciérralo
        cy.contains('ACEPTAR').click();
      } else {
        // El botón de la modal no está presente, puedes continuar con el flujo principal aquí
        cy.log('El botón de la modal no está presente. Continuando con el flujo principal.');
        // Agrega las acciones que deseas realizar en el flujo principal aquí
      }
    });



    /*    cy.get('.modal-footer .btn').then((modalButton) => {
          if (modalButton.length > 0) {
            // Si el botón existe (modal presente), haz clic en él
            cy.contains('ACEPTAR').click();
            cy.log('La modal estaba presente y se cerró correctamente.');
          } else {
            // Si el botón no existe (modal no presente), continúa con el flujo principal
            cy.log('La modal no estaba presente. Continuando con el flujo principal.');
        
            // Aquí puedes agregar más acciones que deseas realizar en el flujo principal
            cy.get('[name="primer_nombre"]').type('ADRIANA').click();
          }
        });
        
        
    
        cy.wait(2000)
    
        cy.get('.modal-footer .btn').should('exist', { failOnStatusCode: false }).then((modalButton) => {
          if (modalButton.length > 0) {
            // Si el botón existe (modal presente), haz clic en él
            cy.contains('ACEPTAR').click();
            cy.log('La modal estaba presente y se cerró correctamente.');
          } else {
            // Si el botón no existe (modal no presente), continúa con el flujo principal
            cy.log('La modal no estaba presente. Continuando con el flujo principal.');
        
            // Aquí puedes agregar más acciones que deseas realizar en el flujo principal
            cy.get('[name="primer_nombre"]').type('ADRIANA').click();
          }
        });
        
    
       
        cy.get('.modal-footer .btn').then((modalButton) => {
          if (modalButton.length > 0) {
            cy.contains('ACEPTAR').click(); // Si el elemento existe, realiza acciones sobre él
            cy.log('La modal estaba presente y se cerró correctamente.');
          } else {
            // Si el elemento no existe, continúa con el flujo principal
            cy.get('[name="primer_nombre"]').type('ADRIANA').click();
            cy.log('La modal no estaba presente. Continuando con el flujo principal.');
          }
        });
    
    
        cy.get('.modal-footer .btn').should('exist', { failOnStatusCode: false });
        cy.contains('ACEPTAR').click();*
    
    
    
    
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