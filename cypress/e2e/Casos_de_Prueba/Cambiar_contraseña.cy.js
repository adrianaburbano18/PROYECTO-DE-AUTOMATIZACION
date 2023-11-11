const tests= require('../../fixtures/Contraseñas.json')
describe('Pruebas para cambiar la contraseña', () => {

    beforeEach( () => {
        cy.visit("https://qa-app.uni2.com.co/user/reset-password?token=c6d19f2a9faaa")
        })
 
    tests.forEach(test => {
 
        it(test.name, () =>{
        cy.get("[name='newPassword']").type(test.password)
        cy.get("[name='newPasswordAgain']").type(test.password2)
        cy.get("span[class='label']").contains("CONFIRMAR").click()
 
        if(test.name === "Cambio Contraseña" ){
            cy.wait(2000)
        }else if(test.name === "Contraseña sin mayuscula y minuscula" ){
            cy.get('small').should('contain', test.expected)
            cy.wait(2000)
        }else if(test.name === "Contraseña sin caracter especial" ){
            cy.get('small').should('contain', test.expected)
            cy.wait(2000)
        }else if(test.name === "Contraseña no coincide" ){
            cy.get('small').should('contain', test.expected)
            cy.wait(2000)
        }


    })

    })
})