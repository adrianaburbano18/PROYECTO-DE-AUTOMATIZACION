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
        
        
        //Crear persona 
        cy.get('.form-group').should('be.visible')
        .eq(0).type('LA ARGENTINA')  
        cy.wait(1000)
        .get('#react-select-9-option-0').click();

        cy.wait(4000)
      //--------------
        cy.get('.btn')       
        cy.contains('NUEVO').click()  
       
        cy.get('.modal-body .form-group').eq(0).type(faker.name.firstName());
        
        cy.get('.modal-body .form-group').should('be.visible')
        .eq(1).type('BARRIO')  
        .get('#react-select-11-option-0').click();

        //Crear persona 
        cy.get('.modal-body   .form-group').should('be.visible')
        .eq(2)
        .type('POPAYAN')  
        cy.wait(1000)
        .get('#react-select-12-option-0').click();


        cy.get('.form-group').eq(4).type(faker.name.firstName()); 


        cy.get('.form-group').should('be.visible')
        .eq(6).type('FEMENINO')
        .get('#react-select-10-option-1').click();

        cy.get('.form-group').should('be.visible')
        .eq(7).type('LA ARGENTINA')  
        cy.wait(1000)
        .get('#react-select-11-option-0').click();

        // Obtén la fecha con el formato "YYYY-MM-DD"
        const fechaexpedicióndocumento = '2020-07-07';
        // Encuentra el campo de fecha y escribe la fecha válida
        cy.get('.form-group').eq(8).type(fechaexpedicióndocumento); // Reemplaza '#campo_fecha' con el selector correcto del campo de fecha


        cy.get('.form-group').should('be.visible')
        .eq(9).type('LA VICTORIA')
        cy.wait(1000)
        .get('#react-select-12-option-0').click();
   
        const fechanacimiento = '1999-07-07';
        cy.get('.form-group').eq(10).type(fechanacimiento); // Reemplaza '#campo_fecha' con el selector correcto del campo de fecha
        
        cy.get('.btn')       
        cy.contains('GUARDAR').click()  

        cy.wait(4000)

       //Crear exepción 
        cy.get('.btn')       
        cy.contains('AGREGAR').click()  

        cy.get('.form-group').eq(3).click()
        cy.wait(1000)
        .get('#react-select-14-option-0')
        .click(); 
        cy.wait(1000)
      
        cy.get('.form-group')
        .eq(4).type(Math.random().toString(36).substring(2,15));

        cy.get('.btn')       
        cy.contains('GUARDAR').click()  

        cy.wait(2000);

        //inhabilitar exepción 
        cy.wait(4000)

        cy.get('.nav-item .nav-link')
        cy.contains('PERSONAS CON EXCEPCIÓN').click()

        cy.wait(2000);

        cy.get('.btn')       
        cy.contains('INHABILITAR').click()  
     
    })
 })
 
