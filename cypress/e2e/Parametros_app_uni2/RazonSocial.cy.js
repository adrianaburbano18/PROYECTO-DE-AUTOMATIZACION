/// <reference types="Cypress"/>   

import {faker} from "@faker-js/faker";

describe('Modulo parametros: Barrios',function()
{
    this.beforeEach(() =>{
        //ingresar a la pagina web
        cy.visit("https://qa-app.uni2.com.co")
    })

    it('Barrios', function(){

         // Introducir las credenciales de inicio de sesión
        cy.get('[name="email"]').type('tesoreria@uni2.com.co')
        cy.get('[name="password"]').type('finamiga2021')

        // Hacer clic en el botón de inicio de sesión
        cy.get('.label').contains('Ingresar').click(); 

        cy.wait(3000);

        //Menú
  
        cy.get('.menu-button').click();

        cy.wait(3000)

        cy.get('.simple-icon-settings').click();

        cy.wait(3000)

        cy.get('.d-block .iconsminds-pie-chart-3').click();
    
 
        cy.wait(3000)

       //Crear barrio

        cy.get('.btn')       
        cy.contains('NUEVO').click()  
       
        cy.get('[name="name"]').type(faker.name.firstName());
        
        //Select de TIpo identificación 
        cy.get('#tipo_identificacion')
        .type('IDENTIFICACIÓN TRIBUTARIA')
        cy.get('div[id^="react-select-"]').click()

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
            cy.get('[name="numero_identificacion"]').should('be.visible').type(cedulaAleatoria); // Reemplaza '#campo_cedula' con el selector correcto del campo
            // Continuar con el resto de la prueba o realizar aserciones según sea necesario
            // Por ejemplo, hacer clic en un botón o verificar que la cédula se haya ingresado correctamente
          }


          cy.get('[name="numero_cuenta"]')
          .type('12313213')
  
    })
 })
 
