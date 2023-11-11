import { faker } from "@faker-js/faker";
describe('Pruebas para crear un aliado', () => {
    beforeEach( () => {
        cy.visit(Cypress.env('url'))
        cy.fixture('example').then((data) => { 
            cy.loginapp('eanaya@uni2.com.co', 'finamiga2021')
            cy.get('.name').should('contain', data.expected_mesa)
            cy.wait(2000)
            })
        })
 
        it.only('Crear aliado', () =>{
            cy.get(".menu-button.d-none.d-md-block.ml-4.active").click()
        cy.get("i[class='simple-icon-settings']").click()
        cy.get("i[class='simple-icon-user-follow']").click()
        cy.get(".btn.btn-default.mb-2.btn.btn-primary").click()
        cy.generarCedula().then((cedula) => {
            cy.get("[name='identification_number']").type(cedula)
          });
        cy.get('[name="first_name"]').type(faker.name.firstName());
        cy.get('[name="last_name"]').type(faker.name.firstName());
        cy.generarNumeroCelular().then((numeroCelular) => {
            cy.get('[name="phone_number"]').type(numeroCelular);
          });
        cy.generarCorreoElectronico().then((randomEmail) => {
            cy.get('[name="email"]').type(randomEmail);
          }); 
          cy.get(".css-1wa3eu0-placeholder").type(faker.random.alpha(({ bannedChars: ['x, y, z'] })))
          
          cy.get('div[id^="react-select-"]').each(($el, index, $list) =>{ 
            if(index == faker.number.int(100))
              {
                cy.wrap($el).click() 
                cy.get("button[type='submit']").click()
                cy.get("h4.title").should("contain", "¡Éxito!")
                cy.get(".message").should("contain", "La información del Aliado ha sido guardada")
              }
            })
          
    })

    it('Editar aliado', () =>{
        cy.get(".menu-button.d-none.d-md-block.ml-4.active").click()
        cy.get("i[class='simple-icon-settings']").click()
        cy.get("i[class='simple-icon-user-follow']").click()
        cy.get(".btn.btn-default.mb-2.btn.btn-primary").click()
    
    
  
       
})

 })