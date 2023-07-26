import'cypress-file-upload';
import {faker} from "@faker-js/faker";

describe('Primer conjunto',function()
{
    this.beforeEach(() =>{
        //ingresar a la pagina web
        cy.visit("https://qa-app.uni2.com.co")
    })

    it('Aliado digital', function(){
        cy.get('input').first().type('mesa009@uni2.com.co')
        cy.get('input').last().type('finamiga2021')
        cy.get('.label').click(); 

        cy.wait(4000);
  
        cy.get('.menu-button')
        .click();

        cy.get('.simple-icon-settings')
        .click();

        cy.get('.simple-icon-user-follow')
        .click();   

       // FORMULARIO DE CREACIÓN DE UN NUEVO ALIADO     
 
        cy.get('.btn').click()          // Click on button
        cy.focused().click()              // Click on el with focus
        cy.contains('NUEVO').click()    // Click on first el containing 'Welcome' 


       //nombres random
      cy.get('.form-control').eq(1).type(faker.name.firstName()); 

      cy.get('.form-control').eq(2).type(faker.name.firstName()); 
  
        function generarCedula() {
            // Generar una cédula aleatoria de 9 dígitos
            let cedula = '';
            for (let i = 0; i < 9; i++) {
              cedula += Math.floor(Math.random() * 10);
            }
            return cedula;
          }
       
        for (let i = 0; i < 1; i++) { // Realiza la prueba 5 veces con cédulas aleatorias
            const cedulaAleatoria = generarCedula();
            cy.get('.form-control').should('be.visible').eq(3).type(cedulaAleatoria); // Reemplaza '#campo_cedula' con el selector correcto del campo
            // Continuar con el resto de la prueba o realizar aserciones según sea necesario
            // Por ejemplo, hacer clic en un botón o verificar que la cédula se haya ingresado correctamente
          }
        cy.get('.form-control').should('be.visible')
        .eq(4).type('3182152128');


        const randomEmail = Math.random().toString(36).substring(2,15)+"@gmail.com"
        cy.get('.form-control').eq(5).type(randomEmail);


         // select concesionario  <div class=" css-cd1un6-option" id="react-select-2-option-0" tabindex="-1">HONDA SUPERMOTOS NEIVA</div>
         cy.get('.form-group').eq(5).click()
        .type('HONDA SUPERMOTOS') 
        .get('#react-select-2-option-0')
        .click(); 

 
        cy.wait(1000);       
           
        cy.get('.btn')       
        cy.contains('GUARDAR').click()  

        //EDITAR UN ALIADO

        cy.get('.dropdown')       
        cy.contains('OPCIONES').click()  

        cy.get('.dropdown-item')       
        cy.contains('EDITAR').click()  
         
        cy.wait(1000);       

       cy.get('.form-control').eq(1).type(faker.name.firstName().substring(2,5)); 
        
       cy.wait(2000);       
 
     
        cy.get('.btn')       
        cy.contains('GUARDAR').click() 

        cy.wait(4000);     

     /*   //BUSCAR ALIADO
        cy.get('#search')       
        cy.type('ADRIANA').click()  */



    })
 })
 
