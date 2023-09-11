import { faker } from "@faker-js/faker";


describe('Modulo parametros: Persona excepcion', function () {
 
  beforeEach(() => {
    cy.visit(Cypress.env('url'));
  });

  it('Personas', function () {
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

    cy.get('.simple-icon-people')
      .click();


    //Crear persona 

    cy.get('.btn')
    cy.contains('NUEVO').click()

    cy.get('#tipo_identificacion').should('be.visible').click(); // Abre el componente de selección
    cy.get('.react-select')
      .contains('IDENTIFICACIÓN TRIBUTARIA') // Encuentra la opción con el texto 'CEDULA'
      .click(); // Haz clic en la opción 'CEDULA'

    function generarCedula() {
      let cedula = '';
      for (let i = 0; i < 9; i++) {
        cedula += Math.floor(Math.random() * 10);
      }
      return cedula;
    }

    for (let i = 0; i < 1; i++) { // Realiza la prueba 5 veces con cédulas aleatorias
      const cedulaAleatoria = generarCedula();
      cy.get('[name="numero_identificacion"]').should('be.visible').type(cedulaAleatoria);
    }

    cy.get('[name="primer_nombre"]').type(faker.name.firstName());

    cy.get('[name="primer_apellido"]').type(faker.name.firstName());

    cy.get('#genero').type('FEMENINO')
    cy.get('div[id^="react-select-"]').click();

    cy.get('.form-group').eq(7).type('LA ARGENTINA')
      .type('LA ARGENTINA')
    cy.get('div[id^="react-select-"]').click()

    // Obtén la fecha con el formato "YYYY-MM-DD"
    const fechaexpedicióndocumento = '2020-07-07';
    // Encuentra el campo de fecha y escribe la fecha válida
    cy.get('.form-group').eq(8).type(fechaexpedicióndocumento); // Reemplaza '#campo_fecha' con el selector correcto del campo de fecha


    cy.get('.form-group').eq(9).type('LA ARGENTINA')
      .type('LA ARGENTINA')
    cy.get('div[id^="react-select-"]').click()


    const fechanacimiento = '1999-07-07';
    cy.get('.form-group').eq(10).type(fechanacimiento); // Reemplaza '#campo_fecha' con el selector correcto del campo de fecha

    cy.get('.btn')
    cy.contains('GUARDAR').click()

    cy.wait(4000)

    //Crear exepción 
    cy.get('.btn')
    cy.contains('AGREGAR').click()

    cy.get('.form-group').eq(3).type('SIMIT')
    cy.get('div[id^="react-select-"]').click()

    cy.get('.form-group')
      .eq(4).type(Math.random().toString(36).substring(2, 15));

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

