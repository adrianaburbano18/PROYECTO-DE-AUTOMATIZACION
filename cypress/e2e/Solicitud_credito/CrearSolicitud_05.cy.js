import 'cypress-file-upload';


describe('Primer conjunto de casos de prueba', function () {
  this.beforeEach(() => {
    //ingresar a la pagina web
    cy.visit("https://qa-app.uni2.com.co")
  })

  it('LOGUIN ALIADO DIGITAL', function () {
    cy.get('input').first().type('test@uni2.com.co')
    cy.get('input').last().type('finamiga2021')
    cy.get('.label').click()
    cy.wait(4000);

    cy.contains('NUEVA SOLICITUD').click()

    //Select de TIpo identificación 
    cy.get('#tipo_identificacion').should('be.visible').click(); // Abre el componente de selección

    cy.get('.form-control').type('1144105898')

    cy.get('#producto').should('be.visible')
      .type('MOTOCARRO')
    cy.get('div[id^="react-select-"]').click();

    cy.get('#bottom-navigation-bar').click();

    cy.get('#formInformationClient .form-control').should('be.visible')// Obtener todos los elementos del conjunto
      .eq(3) // Seleccionar el primer elemento del conjunto (cambia el índice según sea necesario)
      .type('Unas'); // Aplicar cy.type() al elemento seleccionado

    cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();

    //SECCION DE SOLICITUD DE CRÉDITO- MOTO

    cy.get('#subproducto').should('be.visible')
      .type('MOTO RENOVACIÓN')
    cy.get('div[id^="react-select-"]').click();

    cy.get('#marca')
      .type('AKT')
    cy.get('div[id^="react-select-"]').click()

    cy.get('#linea')
      .type('FLEX')
    cy.get('div[id^="react-select-"]').click();

    cy.get('[name="valor"]').type('10000000');

    cy.get('[name="soat"]').type('0');

    cy.get('[name="impuestos"]').type('0');

    cy.get('[name="matricula"]').type('0');

    cy.get('[name="cuota_inicial_solicitada"]').type('0');

    cy.get('#plazo_solicitado')
      .type('14 Meses')
    cy.get('div[id^="react-select-"]').click();

    cy.get('#bottom-navigation-bar .btn').last().click();

    //SECCION DE CONTACTO/NEGOCIO

    cy.get('#celular').type('3182152128');

    cy.get('[name="solicitud_negocio.celular"]').type('3182152120');

    cy.get('.form-group').eq(4).type('MEDELLIN')
      .type('MEDELLIN')
    cy.get('div[id^="react-select-"]').click()
      .wait(2000);

    cy.get('.form-group').eq(5).type('CALASANZ PARTE ALTA - BARRIO')
    cy.get('div[id^="react-select-"]')
      .click()
      .wait(2000);

    //Dirección
    cy.get('.quit-padding-select-address .form-control').eq(0)
      .select('VEREDA')
    cy.get('#direccionUno').type('SAN CARLOS').click();

    cy.get('.form-group').should('be.visible')
      .eq(8).type('AGRICULTOR').click();


    cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();


    cy.get('.li_authorization_options').eq(3).click();
    cy.wait(1000);

    const path = 'cara_foto_frontal.jpeg';
    cy.get("input[name='inputFile_webcamPhoto']").attachFile(path);

    cy.wait(4000);


    const Imgs = 'cedula.png';
    cy.get("input[name='inputFile_webcamIdDocF']").attachFile(Imgs);


    const path2 = 'documento_foto_posterior.png';
    cy.get("input[name='inputFile_webcamIdDocB']").attachFile(path2);

    //checkbox
    cy.get("input[name='check_term1']")
      .click();

    cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();

    cy.get('.swal2-confirm')
      .contains('ACEPTAR')
      .click();

    cy.get('.swal2-confirm')
      .contains('ACEPTAR')
      .click();

  })
})

