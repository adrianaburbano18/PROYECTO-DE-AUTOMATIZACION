/// <reference types="Cypress"/>

import 'cypress-file-upload';
import { faker } from "@faker-js/faker";


describe('GESTION HUMANA', function () {
//PRUEBASlllllllllllllll
  beforeEach(() => {
    cy.fixture('example').then(function (datos) {
      this.datos = datos
    })

    cy.visit(Cypress.env('url'));
  });

  it('Credito libre inversion', function () {

    cy.get('[name="email"]').type(this.datos.UserGestionHumana)
    cy.get('[name="password"]').type(this.datos.UserContraseña)
    cy.get('.label').contains('Ingresar').click();

    cy.contains('NUEVO CRÉDITO').click()

    //Select de TIpo identificación 
    cy.get('#tipo_identificacion')
      .type('IDENTIFICACIÓN TRIBUTARIA')
    cy.get('div[id^="react-select-"]').click()

    cy.generarCedula().then((numeroCelular) => {
      cy.get('[name="numero_identificacion"]').type(numeroCelular);
    });

    cy.get('[name="primer_nombre"]').type(faker.name.firstName());

    cy.get('[name="primer_apellido"]').type(faker.name.firstName());

    cy.get('#genero').type('FEMENINO')
    cy.get('div[id^="react-select-"]').click();

    cy.contains('label', 'Lugar expedición documento').click()
      .type('SAN ANDRES DE CUERQUIA')
      .type('{selectall}{backspace}')
      .type('SAN ANDRES DE CUERQUIA')
    cy.get('div[id^="react-select-"]').click()

    cy.Generarfechaexpediciondocumento();

    cy.contains('label', 'Lugar nacimiento').click()
      .type('SAN ANDRES DE CUERQUIA')
      .type('{selectall}{backspace}')
      .type('SAN ANDRES DE CUERQUIA')
    cy.get('div[id^="react-select-"]').click()

    const fechanacimiento = '1999-07-07';
    cy.get('input[name="fecha_nacimiento"]').type(fechanacimiento);

    cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();

    cy.wait(2000);

    //CONTACTO
    cy.contains('label', 'Ciudad').click()
    .type('SAN ANDRES DE CUERQUIA')
    .type('{selectall}{backspace}')
    .type('SAN ANDRES DE CUERQUIA')
    cy.get('div[id^="react-select-"]').click();

    cy.contains('label', 'Barrio contacto').click()
      .type('PALO BLANCO');
    cy.get('div[id^="react-select-"]').click();


    //Dirección
    cy.get('.quit-padding-select-address .form-control').eq(0)
      .select('VEREDA')
    cy.get('#direccionUno').type('SAN CARLOS').click();

    cy.generarNumeroCelular().then((numeroCelular) => {
      cy.get('[name="celular"]').type(numeroCelular);
    });

    cy.get('.btn')
      .contains('GUARDAR').click();

    cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();

    cy.wait(200)

    cy.get('#empleado_credito_producto')
      .type('LIBRE INVERSIÓN')
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

    cy.contains('label', 'Ciudad').click()
    .type('SAN ANDRES DE CUERQUIA')
    .type('{selectall}{backspace}')
    .type('SAN ANDRES DE CUERQUIA')
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

    cy.get('.btn').contains('ACEPTAR').click();

    cy.wait(1000);

    cy.get('.btn').contains('ACEPTAR').click();

    cy.wait(2000);
  })

  it('Educativo', function () {
    
    cy.get('[name="email"]').type(this.datos.UserGestionHumana)
    cy.get('[name="password"]').type(this.datos.UserContraseña)
    cy.get('.label').contains('Ingresar').click();


    cy.contains('NUEVO CRÉDITO').click()

    //Select de TIpo identificación 
    cy.get('#tipo_identificacion')
      .type('IDENTIFICACIÓN TRIBUTARIA')
    cy.get('div[id^="react-select-"]').click()

    cy.generarCedula().then((numeroCelular) => {
      cy.get('[name="numero_identificacion"]').type(numeroCelular);
    });

    cy.get('[name="primer_nombre"]').type(faker.name.firstName());

    cy.get('[name="primer_apellido"]').type(faker.name.firstName());

    cy.get('#genero').type('FEMENINO')
    cy.get('div[id^="react-select-"]').click();


    cy.contains('label', 'Lugar expedición documento').click()
      .type('SAN ANDRES DE CUERQUIA')
      .type('{selectall}{backspace}')
      .type('SAN ANDRES DE CUERQUIA')
    cy.get('div[id^="react-select-"]').click()


    cy.Generarfechaexpediciondocumento();

    cy.contains('label', 'Lugar nacimiento').click()
      .type('SAN ANDRES DE CUERQUIA')
      .type('{selectall}{backspace}')
      .type('SAN ANDRES DE CUERQUIA')
    cy.get('div[id^="react-select-"]').click()

    const fechanacimiento = '1999-07-07';
    cy.get('input[name="fecha_nacimiento"]').type(fechanacimiento); // Reemplaza '#campo_fecha' con el selector correcto del campo de fecha

    cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();

    cy.wait(2000);

    //CONTACTO
    cy.contains('label', 'Ciudad').click()
    .type('SAN ANDRES DE CUERQUIA')
    .type('{selectall}{backspace}')
    .type('SAN ANDRES DE CUERQUIA')
    cy.get('div[id^="react-select-"]').click();

    cy.contains('label', 'Barrio contacto').click()
      .type('PALO BLANCO');
    cy.get('div[id^="react-select-"]').click();


    //Dirección
    cy.get('.quit-padding-select-address .form-control').eq(0)
      .select('VEREDA')
    cy.get('#direccionUno').type('SAN CARLOS').click();

    cy.generarNumeroCelular().then((numeroCelular) => {
      cy.get('[name="celular"]').type(numeroCelular);
    });

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

    cy.contains('label', 'Ciudad').click()
    .type('SAN ANDRES DE CUERQUIA')
    .type('{selectall}{backspace}')
    .type('SAN ANDRES DE CUERQUIA')
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

    cy.get('.btn').contains('ACEPTAR').click();

    cy.wait(1000);

    cy.get('.btn').contains('ACEPTAR').click();
  })
})

