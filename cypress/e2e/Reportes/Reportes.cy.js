
import { faker } from "@faker-js/faker";

describe('Reportes', function () {

  beforeEach(() => {
    cy.fixture('example').then(function (datos) {
      this.datos = datos
    })

    cy.visit(Cypress.env('url'));
  });

  it('Generar reporte', function () {
    cy.get('input').first().type('mgarcia@uni2.com.co')
    cy.get('input').last().type('finamiga2021')
    cy.get('.label').click();

    cy.wait(1000);

    //CAMBIO DE ROL
    cy.get('.name')
      .click();

    cy.get('.dropdown-item')
    cy.contains('Cambiar rol').click()

    cy.get('.form-group').click();
    cy.get('.react-select').contains('DIRECTOR DE RIESGO').click();

    cy.get('.btn')
    cy.contains('CAMBIAR').click()


    cy.wait(1000);

    //MENU
    cy.get('.menu-button')
      .click();

    cy.get('.iconsminds-line-chart-1')
      .click();

    cy.get('.nav-item')
      .contains('Generales')
      .click();

    cy.get('#tipo_reporte')
      .type('GESTIÓN COMITE')
    cy.get('div[id^="react-select-"]').click();


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
    cy.get('input[name="fecha_desde"]').type(formattedDates);



    // Obtiene la fecha actual
    const currentDate = new Date();

    // Obtiene los componentes de la fecha
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Los meses son base 0, por lo que sumamos 1
    const day = String(currentDate.getDate()).padStart(2, '0');

    // Formatea la fecha en el formato YYYY-MM-DD
    const formattedDate = `${year}-${month}-${day}`;

    // Luego, puedes usar formattedDate en tus comandos Cypress
    cy.get('input[name="fecha_hasta"]').type(formattedDate);

    cy.get('[form="form-concesionario"]')
      .click();

    cy.wait(5000);

    cy.get('#tipo_reporte')
      .type('GESTIÓN DESEMBOLSO')
    cy.get('div[id^="react-select-"]').click();

    // Obtiene la fecha actual
    const currentDateee = new Date();

    // Calcula la fecha tres meses atrás
    const threeMonths = new Date();
    threeMonths.setMonth(currentDatee.getMonth() - 3);

    // Obtiene los componentes de la fecha tres meses atrás
    const yearss = threeMonths.getFullYear();
    const monthss = String(threeMonths.getMonth() + 1).padStart(2, '0'); // Los meses son base 0, por lo que sumamos 1
    const dayss = String(threeMonths.getDate()).padStart(2, '0');

    // Formatea la fecha en el formato YYYY-MM-DD
    const formattedDatess = `${yearss}-${monthss}-${dayss}`;

    // Luego, puedes usar formattedDate en tus comandos Cypress
    cy.get('input[name="fecha_desde"]').type(formattedDatess);



    // Obtiene la fecha actual
    const currentDates = new Date();

    // Obtiene los componentes de la fecha
    const yeart = currentDate.getFullYear();
    const montht = String(currentDate.getMonth() + 1).padStart(2, '0'); // Los meses son base 0, por lo que sumamos 1
    const dayt = String(currentDate.getDate()).padStart(2, '0');

    // Formatea la fecha en el formato YYYY-MM-DD
    const formattedDatet = `${yeart}-${montht}-${dayt}`;

    // Luego, puedes usar formattedDate en tus comandos Cypress
    cy.get('input[name="fecha_hasta"]').type(formattedDatet);

    cy.get('[form="form-concesionario"]')
      .click();

  })


})

