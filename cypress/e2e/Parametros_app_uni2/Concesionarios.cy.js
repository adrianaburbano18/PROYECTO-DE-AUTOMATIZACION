
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

        cy.wait(1000);
  
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

        cy.get('.iconsminds-office')
        .click();   

        // crear concesionario

        cy.get('.btn').click()         
        cy.focused().click()              
        cy.contains('NUEVO').click();

      //npm install @faker-js/faker --save-dev -- nombres random
        cy.get('#form-concesionario')
        .find('[name="name"]')
        .type(faker.name.firstName()); 

        cy.wait(1000);

        cy.get('.form-group')
        .eq(1)
        .type('CULTIVA')
        cy.get('div[id^="react-select-"]').click()

        cy.wait(1000);

       //listado de ciudades        
        cy.get('.form-group #ciudad').click(); 
        cy.get('.react-select')
        .find('.list__menu')
        .contains('NECHI').click(); 

        cy.get('.form-group #distribuidor').click(); 
        cy.get('.react-select')
        .find('.list__menu')
        .contains('MULTIMARCA').click(); 

        // select de razon social
        cy.get('.form-group').eq(4).click();
        cy.get('.react-select')
        .contains('CC 2898866088 - V8SZ_LUAXXXXX MOTO').click(); 

        //Dirección
        cy.get('.quit-padding-select-address .form-control').eq(0)
        .select('VEREDA')
        cy.get('#direccionUno').type('SAN CARLOS').click();

        cy.get('.btn')       
        cy.contains('GUARDAR').click()   

        cy.wait(5000);

        // Editar concesionario


        cy.get('.dropdown')       
        cy.contains('OPCIONES').click()  

        cy.get('.dropdown-item')       
        cy.contains('EDITAR').click()  


      //npm install @faker-js/faker --save-dev -- nombres random
        cy.get('#form-concesionario')
        .find('[name="name"]')
        .type(faker.name.firstName()); 


       //listado de ciudades        
        cy.get('.form-group #ciudad').click(); 
        cy.get('.react-select')
        .find('.list__menu')
        .contains('MEDELLIN').click(); 

        // select de razon social
        cy.get('.form-group').eq(4).click();
        cy.get('.react-select')
        .contains('CC 2898866088 - V8SZ_LUAXXXXX MOTO').click(); 

        //Dirección
        cy.get('.quit-padding-select-address .form-control').eq(0)
        .select('VEREDA')
        cy.get('#direccionUno').type('SAN CARLOS').click();

        cy.get('.btn')       
        cy.contains('GUARDAR').click()   


         //inhabilitar Concesionario 
        cy.wait(4000)

        cy.get('.dropdown')       
        cy.contains('OPCIONES').click()  

        
        cy.get('.btn')       
        cy.contains('DESHABILITAR').click()  

        cy.wait(4000)

        cy.get('.swal2-container .swal2-popup .swal2-actions .swal2-confirm')
        .contains('DESHABILITAR')
        .click();

        cy.wait(2000);

        cy.get('.swal2-actions .swal2-confirm')
        .contains('ACEPTAR')
        .click();
  

    })
 })
 
