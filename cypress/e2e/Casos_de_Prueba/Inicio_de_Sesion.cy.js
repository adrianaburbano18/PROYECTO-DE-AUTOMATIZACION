const tests= require('../../fixtures/Usuarios.json')
describe('Validacion Usuarios Inicio de Sesion', () => {
 
    beforeEach( () => {
        cy.visit(Cypress.env('url'))
   
        })
 
    tests.forEach(test => {
 
        it(test.name, () =>{
        cy.get("input[name='email']").type(test.username)
        cy.get("input[name='password']").type(test.password)
        cy.get("span[class='label']").contains("Ingresar").click()
 
        if(test.name === "Usuario ejecutivo" ){
            cy.get('.name').should('contain', test.expected)
            cy.wait(2000)
        }else if(test.name === "Usuario mesa de ayuda" ){
            cy.get('.name').should('contain', test.expected)
            cy.wait(2000)
        }else if(test.name === "Usuario falso" ){
            cy.get("h4.title").should('contain', test.title)
            cy.get('.notification-container').should('contain', test.expected)
            cy.wait(2000)
        }else if(test.name === "Usuario auditor" ){
            cy.get('.name').should('contain', test.expected)
            cy.wait(2000)
        }else if(test.name === "Comprobar correo" ){
            cy.get('.form-group').should('contain', test.expected).should("be.visible")
            cy.wait(2000)
        }else if(test.name === "Restablecer contraseña" ){
            cy.get('.ModalAlert--internalTitle').should('contain', test.expected).should("be.visible")
            cy.get('p').should('contain', test.descripcion).should("be.visible")
            cy.wait(2000)
        }else if(test.name === "Restablecer contraseña 2" ){
            cy.get("h4.title").should('contain', test.title1)
            cy.get('.notification-container').should('contain', test.expected)
            cy.wait(2000)
            cy.get("a[href='/user/forgot-password']").click()
            cy.get("h4.title").should('contain', test.title2)
            cy.get(".message").should('contain', test.expected)
            cy.wait(2000)
            cy.get(".mb-4").should('contain', "Restablecer contraseña")
            cy.get("p").should('be.visible')
            cy.get("span[class='label']").contains("RESTABLECER").click()
            cy.get("h4.title").should('contain', test.title3)
            cy.get(".message").should('contain', test.expected2)
            cy.wait(2000)
        }else if(test.name === "Correo invalido" ){
            cy.get("h4.title").should('contain', test.title1)
            cy.get('.notification-container').should('contain', test.expected)
            cy.wait(2000)
            cy.get("a[href='/user/forgot-password']").click()
            cy.get("h4.title").should('contain', test.title2)
            cy.get(".message").should('contain', test.expected)
            cy.wait(2000)
            cy.get(".mb-4").should('contain', "Restablecer contraseña")
            cy.get("span[class='label']").contains("RESTABLECER").click()
            cy.get("h4.title").should('contain', test.title2)
            cy.get(".message").should('contain', test.expected2)
            cy.wait(2000)
        }
 
        })
 
    })
 
})