import {faker} from "@faker-js/faker";


describe('Primer conjunto',function()
{
    this.beforeEach(() =>{
        //ingresar a la pagina web
        cy.visit("https://qa-app.uni2.com.co")
    })

    it('Aliado digital', function(){
        cy.get('input').first().type('eanaya@uni2.com.co')
        cy.get('input').last().type('finamiga2021')
        cy.get('.label').click(); 

        cy.wait(3000);
  
        cy.get('.name')
        .click();

        cy.get('.dropdown-item')       
        cy.contains('Cambiar rol').click() 

        cy.get('.form-group').click(); 
        cy.get('.react-select').contains('COORDINADOR MESA DE AYUDA').click(); 

        cy.get('.btn')       
        cy.contains('CAMBIAR').click() 

        cy.wait(1000);
  
        cy.get('.menu-button')
        .click();

        cy.get('.simple-icon-settings')
        .click();

        cy.get('.simple-icon-location-pin')
        .click();
    
 
        cy.wait(5000)

       //Crear persona 

        cy.get('.btn')       
        cy.contains('NUEVO').click()  
       
        cy.get('.modal-body .form-group').eq(0).type(faker.name.firstName());

        cy.get('.modal-body .form-group').eq(1).type('BARRIO')
        cy.get('div[id^="react-select-"]').click()

        cy.get('.modal-body .form-group').eq(2).click()
        .type('SAN ANDRES DE CUERQU');
        cy.get('div[id^="react-select-"]').click()

        cy.get('.btn')       
        cy.contains('GUARDAR').click()  
    })
 })
 
