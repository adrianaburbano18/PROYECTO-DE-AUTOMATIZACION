
import { faker } from "@faker-js/faker";

describe('Modulo parametros: Concesionarios', function () {

  beforeEach(() => {
    cy.fixture('example').then(function (datos) {
      this.datos = datos
    })

    cy.visit(Cypress.env('url'));
  });

  it('Concesionarios', function () {

    cy.get('[name="email"]').type(this.datos.UserCoordinador)
    cy.get('[name="password"]').type(this.datos.UserContraseña)
    cy.get('.label').contains('Ingresar').click();

    cy.wait(1000);

    cy.CambiarRol();

    cy.wait(1000);

    cy.navegarParametros();
    cy.get('.iconsminds-office').click();

    // crear concesionario
    cy.get('.btn').click()
    cy.focused().click()
    cy.contains('NUEVO').click();

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
    cy.get('#form-concesionario #ciudad').click()
      .find('.list__menu')
      .contains('COPACABANA').click();

    cy.get('#form-concesionario #distribuidor').click()
      .find('.list__menu')
      .contains('MULTIMARCA').click();

    // select de razon social
    cy.get('#form-concesionario .form-group').eq(4).click();
    cy.get('div[id^="react-select-"]')
      .contains('CC 2898866088 - V8SZ_LUAXXXXX MOTO').click()
    cy.get('#form-concesionario .form-group').eq(4).click()
      .contains('CC 1523193029 - 4I9W_VIVXXXXXACOME').click();

    //Dirección
    cy.get('.quit-padding-select-address .form-control[name="direccion_select"]')
      .select('VEREDA')
    cy.get('#direccionUno').type('SAN CARLOS').click();


    cy.get('.btn')
    cy.contains('GUARDAR').click()

    cy.wait(3000);

    // Editar concesionario
    cy.get('.dropdown')
    cy.contains('OPCIONES').click()

    cy.get('.dropdown-item')
    cy.contains('EDITAR').click()


    cy.get('#form-concesionario')
      .find('[name="name"]')
      .type(faker.name.firstName());


    // select de razon social
    cy.get('#form-concesionario .form-group').eq(4).click()
      .contains('NIT 4487611260 - 7N60_GRUXXXXXO SAS').click()


    //listado de ciudades        
    cy.get('#form-concesionario #ciudad').click()
      .find('.list__menu')
      .contains('MEDELLIN').click();

    //Dirección
    cy.get('.quit-padding-select-address .form-control[name="direccion_select"]')
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

