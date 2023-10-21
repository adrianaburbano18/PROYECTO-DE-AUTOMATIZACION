
import { faker } from "@faker-js/faker";

describe('Modulo parametros: Concesionarios', function () {

  beforeEach(() => {
    cy.visit(Cypress.env('url'))

    cy.fixture('example').then(function (datos) {
      this.datos = datos
    })
  });

  it('Crear Concesionarios', function () {
    cy.get('[name="email"]').type(this.datos.UserCoordinador)
    cy.get('[name="password"]').type(this.datos.UserContraseña)
    cy.get('.label').contains('Ingresar').click();

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

    cy.contains('label', 'Producto').click()
      .type('CULTIVA')
      .type('PROGRESA')
    cy.get('div[id^="react-select-"]').click()

    //listado de ciudades        
    cy.get('#form-concesionario #ciudad').click()
      .find('.list__menu')
      .contains('COPACABANA').click();

    cy.get('#form-concesionario #distribuidor').click()
      .find('.list__menu')
      .contains('MULTIMARCA').click();
    
    // select de razon social
    cy.contains('label', 'Razon social concesionarios').click()
    cy.get('div[id^="react-select-"]')
      .contains('CC 2587021841 - HFWO_JUAXXXXXANDUN').click()

    //Dirección
    cy.get('.quit-padding-select-address .form-control[name="direccion_select"]')
      .select('VEREDA')
    cy.get('#direccionUno').type('SAN CARLOS').click();

    cy.get('.btn')
    cy.contains('GUARDAR').click()

  })

  it('Editar Concesionarios', function () {

    cy.get('[name="email"]').type(this.datos.UserCoordinador)
    cy.get('[name="password"]').type(this.datos.UserContraseña)
    cy.get('.label').contains('Ingresar').click();

    cy.CambiarRol();

    cy.wait(1000);

    cy.navegarParametros();
    cy.get('.iconsminds-office').click();

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
      .contains('NIT 7231811632 - 5LEH_CASXXXXXRALGO').click()

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
  })

  it('Acciones: Concesionarios (Habilitar/Concesionarios)', function () {

    cy.get('[name="email"]').type(this.datos.UserCoordinador)
    cy.get('[name="password"]').type(this.datos.UserContraseña)
    cy.get('.label').contains('Ingresar').click();

    cy.CambiarRol();

    cy.wait(1000);

    cy.navegarParametros();
    cy.get('.iconsminds-office').click();

    //inhabilitar Concesionario 

    cy.get('.dropdown')
    cy.contains('OPCIONES').click()

    cy.get('.btn')
    cy.contains('DESHABILITAR').click()

    // Modal
    cy.get('.footer-container .btn').contains('DESHABILITAR').click();

    cy.get('.footer-container .btn').contains('ACEPTAR').click();

    cy.wait(2000);
   // Habilitar concesionarios

   cy.get('.nav-item .nav-link')
   cy.contains('INACTIVOS').click();

   cy.get('.dropdown')
   cy.contains('HABILITAR').click()

   // Modal
   cy.get('.footer-container .btn').contains('HABILITAR').click();

   cy.get('.footer-container .btn').contains('ACEPTAR').click();
  })

})

