const tests= require('../../fixtures/Usuarios.json')
describe('Pruebas nuevo metodo', () => {
 
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
            cy.get('.notification-container').should('contain', test.expected)
            cy.wait(2000)
        }else if(test.name === "Comprobar correo" ){
            cy.get('.form-group').should('contain', test.expected).should("be.visible")
            cy.wait(2000)
        }else if(test.name === "Restablecer contraseña" ){
            cy.get('#swal2-title').should('contain', test.expected).should("be.visible")
            cy.get('.swal2-html-container').should('contain', test.descripcion).should("be.visible")
            cy.wait(2000)
        }
 
        })
 
    })
 
})