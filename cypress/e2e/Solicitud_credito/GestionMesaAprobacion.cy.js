/// <reference types="Cypress"/>   

import 'cypress-file-upload';
import { faker } from "@faker-js/faker";


describe('Primer conjunto de casos de prueba', function () {

    beforeEach(() => {
        cy.visit(Cypress.env('url'));
    });

    before(function () {
        cy.fixture('example').then(function (datos) {
            this.datos = datos
        })
    })

    it('Mesa de aprobación', function () {
        cy.get('input').first().type('mesa002@uni2.com.co')
        cy.get('input').last().type('finamiga2021')
        cy.get('.label').click()

        cy.wait(1000)

        cy.get('.nav-item .nav-link')
        cy.contains('EN PROCESO').click();

        cy.wait(1000)

        cy.get('.align-middle .finamiga-color .box-state')
            .first()// Selecciona el primer elemento del conjunto
            .click();

        cy.wait(1000);

        //SECCION DE DOCUMENTOS
        /*  cy.get('#solicitud_tipo_documento')
              .type('LEGAL CHECK')
          cy.get('div[id^="react-select-"]').click()
  
          cy.wait(2000);
  
          cy.get('.form-control').attachFile('Document.pdf');
          cy.get('.button-add').type('AGREGAR').click();
          cy.wait(2000);
  
          cy.get('.navbar-logo').click()
  
          cy.get('.nav-item .nav-link')
          cy.contains('EN PROCESO').click();
  
          cy.wait(1000)
  
          cy.get('.align-middle .finamiga-color .box-state').first().click();
  
          cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();*/

        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();
        //Documentos
        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();
        //solicitante
        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();
        //Consultas
        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();
        //Vinculo
        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();
        //contacto
        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();
        //Solicitud de credito
        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();
        //conyuge
        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();
        //Negocio
        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();

        //Dirección
        cy.get('.quit-padding-select-address .form-control').eq(0).type('{selectall}{backspace}')
            .select('VEREDA')
        cy.get('#direccionUno').type('{selectall}{backspace}').type('SAN CARLOS').click();
        //Codeudores
        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();
        //Referencias
        //  cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();

         cy.get('#persona_referenciada').type('TITULAR')
         cy.get('div[id^="react-select-"]').click()
 
         cy.generarNumeroCelular().then((numeroCelular) => {
             cy.get('#celular').type(numeroCelular);
         });
 
         cy.get('[name="primer_nombre"]').type(faker.name.firstName());
 
         cy.get('[name="primer_apellido"]').type(faker.name.firstName());
 
         cy.get('#estado_referencia').type('DATOS INCORRECTOS')
         cy.get('div[id^="react-select-"]').click()
 
         cy.get('#tipo_referencia').type('FAMILIAR')
         cy.get('div[id^="react-select-"]').click()
 
         cy.get('#parentesco_referencia').type('PADRE')
         cy.get('div[id^="react-select-"]').click()
 
         cy.contains('label', 'Ciudad').type('SAN ANDRES DE CUERQUIA')
             .type('SAN ANDRES DE CUERQUIA')
         cy.get('div[id^="react-select-"]').click();
 
         cy.get('#barrio_referencia')
             .type('PALO BLANCO');
         cy.get('div[id^="react-select-"]').click();
 
         cy.get('.quit-padding-select-address .form-control').eq(0)
             .select('VEREDA')
         cy.get('#direccionUno').type('{selectall}{backspace}').type('SAN CARLOS').click();
 
         cy.get('[name="observacion"]').type(Math.random().toString(36).substring(2, 15));
 
         cy.get('.btn').contains('GUARDAR').click();

        //ANÁLISIS MICROEMPRESA
        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();

        cy.get('[name="ventas"]').type('{selectall}{backspace}').type('10000')

        cy.get('[name="costo_venta"]').type('{selectall}{backspace}').type('10000')

        cy.get('[name="costo_venta"]').type('{selectall}{backspace}').type('10000')

        cy.get('[name="total_gastos"]').type('{selectall}{backspace}').type('10000')

        cy.get('[name="pagos_deudas"]').type('{selectall}{backspace}').type('10000')

        //LIQUIDEZ FAMILIAR

        cy.get('[name="otros_ingresos"]').type('{selectall}{backspace}').type('10000')

        cy.get('[name="total_gastos_familiar"]').type('{selectall}{backspace}').type('10000')

        //BALANCE GENERAL DE LA MICROEMPRESA

        cy.get('[name="activos"]').type('{selectall}{backspace}').type('10000')

        cy.get('[name="pasivos"]').type('{selectall}{backspace}').type('10000')

        //INDICADORES FINANCIEROS
        cy.get('[name="capital_trabajo"]').type('{selectall}{backspace}').type('10000')

        cy.get('[name="rotacion"]').type('{selectall}{backspace}').type('25')

        cy.get('[name="liquidez_financiera"]').type('{selectall}{backspace}').type('25')

        //PROPUESTA
        cy.get('[name="propuesta_economica"]').type('{selectall}{backspace}').type('10000')

        cy.get('#plazo_propuesta').type('{selectall}{backspace}').type('12')
        cy.get('div[id^="react-select-"]').click()

        cy.get('[name="cuota_inicial_propuesta"]').type('{selectall}{backspace}').type('10000')

        cy.get('[name="cuota_mensual_propuesta"]').type('{selectall}{backspace}').type('10000')

        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();

        //PPI

        cy.get('#ppi_1_1').click();

        cy.get('#ppi_2_3').click();

        cy.get('#ppi_1_1').click();

        cy.get('#ppi_3_1').click();

        cy.get('#ppi_4_1').click();

        cy.get('#ppi_5_1').click();

        cy.get('#ppi_6_1').click();

        cy.get('#ppi_7_1').click();

        cy.get('#ppi_8_1').click();

        cy.get('#ppi_9_1').click();

        cy.get('#ppi_10_1').click();

           cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();

        cy.get('.modal-footer .btn').contains('FINALIZAR').click();







    })
})