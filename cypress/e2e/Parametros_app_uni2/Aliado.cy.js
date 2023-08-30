import'cypress-file-upload';
import {faker} from "@faker-js/faker";

describe('Modulo parametros: Aliado',function()
{
    this.beforeEach(() =>{
        //ingresar a la pagina web
        cy.visit("https://qa-app.uni2.com.co")
    })

    it('Formulario de Aliado', function(){
      // Introducir las credenciales de inicio de sesión
      cy.get('[name="email"]').type('eanaya@uni2.com.co')
      cy.get('[name="password"]').type('finamiga2021')
   
       // Hacer clic en el botón de inicio de sesión
        cy.get('.label').contains('Ingresar').click(); 

        cy.wait(4000);
  
        cy.get('.menu-button')
        .click();

        cy.get('.simple-icon-settings')
        .click();

        cy.get('.simple-icon-user-follow')
        .click();   

       // FORMULARIO DE CREACIÓN DE UN NUEVO ALIADO     
 
        cy.get('.btn').click()          
        cy.focused().click()              // Click on el with focus
        cy.contains('NUEVO').click()    


       //nombres random
      cy.get('[name="first_name"]').type(faker.name.firstName()); 

      cy.get('[name="last_name"]').type(faker.name.firstName()); 
  
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
            cy.get('[name="identification_number"]').should('be.visible').type(cedulaAleatoria); // Reemplaza '#campo_cedula' con el selector correcto del campo
            // Continuar con el resto de la prueba o realizar aserciones según sea necesario
            // Por ejemplo, hacer clic en un botón o verificar que la cédula se haya ingresado correctamente
          }

        function generarcelular() {
          let cedula = '31';
          for (let i = 0; i < 9; i++) {
            cedula += Math.floor(Math.random() * 10);
          }
          return cedula;
        }
     
      for (let i = 0; i < 1; i++) { // celular aleatorio
          const cedulaAleatoria = generarcelular();
          cy.get('#celular').type(cedulaAleatoria); 
        }

        const randomEmail = Math.random().toString(36).substring(2,15)+"@gmail.com"
        cy.get('[name="email"]').type(randomEmail);

        cy.get('.form-group .css-1115wtz-control')
        .type('HONDA SUPERMOTOS NEIVA')
        cy.get('div[id^="react-select-"]').click()
        cy.get('.css-1rhbuit-multiValue').should('contain.text', 'HONDA SUPERMOTOS NEIVA')

 
        cy.wait(1000);       
           
        cy.get('.btn')       
        cy.contains('GUARDAR').click()  

        //EDITAR UN ALIADO

        cy.get('.dropdown')       
        cy.contains('OPCIONES').click()  

        cy.get('.dropdown-item')       
        cy.contains('EDITAR').click()  
         
        cy.wait(1000);       

        cy.get('[name="first_name"]').type(faker.name.firstName().substring(2,3)); 

        function generarcelular() {
          let cedula = '31';
          for (let i = 0; i < 9; i++) {
            cedula += Math.floor(Math.random() * 10);
          }
          return cedula;
        }
     
      for (let i = 0; i < 1; i++) { // celular aleatorio
          const cedulaAleatoria = generarcelular();
          cy.get('#celular').type(cedulaAleatoria); 
        }

        
       cy.wait(1000);       
     
        cy.get('.btn')       
        cy.contains('GUARDAR').click() 

    })
 })
 
