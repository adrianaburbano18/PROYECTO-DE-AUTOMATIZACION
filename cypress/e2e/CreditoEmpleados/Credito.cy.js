/// <reference types="Cypress"/>

import'cypress-file-upload';
import {faker} from "@faker-js/faker";


describe('GESTION HUMANA',function()
{
    this.beforeEach(() =>{
        //ingresar a la pagina web
        cy.visit("https://qa-app.uni2.com.co")
    })

    it('EMPEADOS', function(){
        cy.get('input').first().type('latorres@uni2.com.co')
        cy.get('input').last().type('finamiga2021')
        cy.get('.label').click() 

        cy.wait(5000);

        cy.contains('NUEVO CRÉDITO').click()   

          //Select de TIpo identificación 
        cy.get('#tipo_identificacion')
        .type('IDENTIFICACIÓN TRIBUTARIA')
        cy.get('div[id^="react-select-"]').click()

        function generarCedula() {
          let cedula = '';
          for (let i = 0; i < 9; i++) {
            cedula += Math.floor(Math.random() * 10);
          }
          return cedula;
        }
     
      for (let i = 0; i < 1; i++) { // Realiza la prueba 5 veces con cédulas aleatorias
          const cedulaAleatoria = generarCedula();
          cy.get('[name="numero_identificacion"]').type(cedulaAleatoria); 
        }

        cy.get('[name="primer_nombre"]').type(faker.name.firstName()); 

        cy.get('[name="primer_apellido"]').type(faker.name.firstName()); 

        cy.get('#genero').type('FEMENINO')
        cy.get('div[id^="react-select-"]').click();

      
        cy.contains('label', 'Lugar expedición documento').click()
        .type('SAN ANDRES DE CUERQUIA');
        cy.get('div[id^="react-select-"]').click()


         // Obtiene la fecha actual
         const currentDatee = new Date();

         // Calcula la fecha tres meses atrás
         const threeMonthsAgo = new Date();
         threeMonthsAgo.setMonth(currentDatee.getMonth() - 3);
 
         // Obtiene los componentes de la fecha tres meses atrás
         const years = threeMonthsAgo.getFullYear();
         const months = String(threeMonthsAgo.getMonth() + 1).padStart(2, '0'); // Los meses son base 0, por lo que sumamos 1
         const days = String(threeMonthsAgo.getDate()).padStart(2, '0');
 
         // Formatea la fecha en el formato YYYY-MM-DD
         const formattedDates = `${years}-${months}-${days}`;
 
         // Luego, puedes usar formattedDate en tus comandos Cypress
         cy.get('input[name="fecha_expedicion_documento"]').type(formattedDates);

         cy.contains('label', 'Lugar nacimiento').click()
         .type('SAN ANDRES DE CUERQUIA');
         cy.get('div[id^="react-select-"]').click()

          const fechanacimiento = '1999-07-07';
          cy.get('input[name="fecha_nacimiento"]').type(fechanacimiento); // Reemplaza '#campo_fecha' con el selector correcto del campo de fecha
 
              
        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();   

        cy.wait(4000);

      //CONTACTO
            
      cy.contains('label', 'Ciudad').click().type('SAN ANDRES DE CUERQUIA');
      cy.wait(2000); 
      cy.get('div[id^="react-select-"]').click();

      cy.contains('label', 'Barrio contacto').click()
      .type('PALO BLANCO');
      cy.get('div[id^="react-select-"]').click();

      
        //Dirección
        cy.get('.quit-padding-select-address .form-control').eq(0)
        .select('VEREDA')
        cy.get('#direccionUno').type('SAN CARLOS').click();



        
        function generarcelular() {
          let cedula = '31';
          for (let i = 0; i < 9; i++) {
            cedula += Math.floor(Math.random() * 10);
          }
          return cedula;
        }
     
      for (let i = 0; i < 1; i++) { // Realiza la prueba 5 veces con cédulas aleatorias
          const cedulaAleatoria = generarcelular();
          cy.get('[name="celular"]').type(cedulaAleatoria); 
        }


        cy.get('.btn')
        .contains('GUARDAR').click();

      cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();   

      cy.wait(200)

      cy.get('#empleado_credito_producto')
      .type('EDUCATIVO')
      cy.get('div[id^="react-select-"]').click();


      cy.get('#empleado_credito_categoria_educativa')
      .type('DIPLOMADO')
      cy.get('div[id^="react-select-"]').click();

      cy.get('[name="monto_aprobado"]')
      .type('2000000')

      cy.get('#plazo')
      .type('12 meses')
      cy.get('div[id^="react-select-"]').click();

      cy.get('[name="numero_cuenta_bancaria"]')
      .type('2000000')

      cy.get('#banco')
      .type('BANCO SANTANDER DE NEGOCIOS COLOMBIA S.A')
      cy.get('div[id^="react-select-"]').click();

      cy.contains('label', 'Ciudad').click().type('SAN ANDRES DE CUERQUIA');
      cy.wait(2000); 
      cy.get('div[id^="react-select-"]').click();
      

      
      cy.get('#tipo_cuenta')
      .type('AHORRO')
      cy.get('div[id^="react-select-"]').click();

            
      cy.get('#tipo_credito')
      .type('REFINANCIACION')
      cy.get('div[id^="react-select-"]').click();

      cy.get('[name="dia_de_pago"]')
      .type('20')

      cy.get('#empleado_credito_sede')
      .type('CORABASTOS')
      cy.get('div[id^="react-select-"]').click();

      cy.get('#empleado_credito_area')
      .type('DESARROLLO SOCIAL')
      cy.get('div[id^="react-select-"]').click();

      cy.get('[name="aprobado_por"]')
      .type('OBSERVACIÓN')

      cy.get('#tipo_garantia')
      .type('GARANTIAS COMUNITARIAS')
      cy.get('div[id^="react-select-"]').click();


      
      cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();   

      cy.get('#empleado_credito_tipo_documento')
      .type('CEDULA') 
      cy.get('div[id^="react-select-"]').click()

      cy.get('.form-control').attachFile('Document.pdf');
      cy.get('.button-add').type('AGREGAR').click();
      cy.wait(2000);
      
      cy.get('#empleado_credito_tipo_documento')
      .type('SOLICITUD FIRMADA') 
      cy.get('div[id^="react-select-"]').click()

      cy.get('.form-control').attachFile('Document.pdf');
      cy.get('.button-add').type('AGREGAR').click();
      cy.wait(2000);
      
      cy.get('#empleado_credito_tipo_documento')
      .type('SEGURO DE VIDA') 
      cy.get('div[id^="react-select-"]').click()

      cy.get('.form-control').attachFile('Document.pdf');
      cy.get('.button-add').type('AGREGAR').click();
      cy.wait(2000);
     
      cy.get('#bottom-navigation-bar .simple-icon-arrow-left').click();  
      cy.wait(2000);
      cy.get('#bottom-navigation-bar .simple-icon-arrow-right').click();  
      cy.wait(2000);
      cy.get('#bottom-navigation-bar .simple-icon-arrow-right').click();  
      cy.wait(2000);

      cy.get('.swal2-container .swal2-popup .swal2-actions .swal2-confirm')
      .contains('ACEPTAR')
      .click();
      cy.wait(2000);
      
      cy.get('.swal2-actions .swal2-confirm')
      .contains('ACEPTAR')
      .click();


    })
 })
 
