// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('navegarParametros', () => {
  // Hacer clic en el botón de menú
  cy.get('.menu-button').click();

  // Hacer clic en el ícono de configuración (reemplaza 'simple-icon-settings' con el selector correcto)
  cy.get('.simple-icon-settings').click();

  return cy;
});

Cypress.Commands.add('navegarAConfiguracionUsuario', () => {
  // Hacer clic en el botón de menú
  cy.get('.menu-button').click();

  cy.get('a[data-flag="parametros"]').click()

  return cy;
});

Cypress.Commands.add('CambiarRol', () => {

  cy.get('.name').click();

  cy.get('.dropdown-item')
  cy.contains('Cambiar rol').click()

  cy.get('.form-group').click();
  cy.get('.react-select').contains('COORDINADOR MESA DE AYUDA').click();

  cy.get('.btn')
  cy.contains('CAMBIAR').click()

  return cy;
});

Cypress.Commands.add('generarNumeroCelular', () => {
  // Genera un número aleatorio de 8 dígitos (sin contar '31' al principio)
  const numeroAleatorio = Math.floor(Math.random() * 90000000) + 10000000;
  // Agrega '31' al principio y luego el número aleatorio
  const numeroCelular = '31' + numeroAleatorio;
  // Devuelve el número de celular generado
  return numeroCelular;
});

Cypress.Commands.add('generarCorreoElectronico', () => {
  const randomEmail = Math.random().toString(36).substring(2, 15) + "@gmail.com"
  return randomEmail;
});


Cypress.Commands.add('iterarCedulas', () => {
  cy.fixture('Cedulas').then((data) => {
    // Selecciona una cédula aleatoria del archivo JSON.................. 
    const cedulaAleatoria = data.cedulas[Math.floor(Math.random() * data.cedulas.length)];

    // Ejemplo: Ingresar la cédula en un campo de formulario
    cy.get('[name="numero_identificacion"]').type(cedulaAleatoria);

    // Puedes agregar más acciones o verificaciones aquí si es necesario
    // Por ejemplo, enviar el formulario y verificar resultados
  });
});

Cypress.Commands.add('CeulasPreaprobador', () => {
  cy.fixture('Cedulas').then((data) => {
    // Selecciona una cédula aleatoria del archivo JSON
    const cedulaAleatoria = data.CeulasPreaprobador[Math.floor(Math.random() * data.CeulasPreaprobador.length)];

    // Ejemplo: Ingresar la cédula en un campo de formulario
    cy.get('[name="numero_identificacion"]').type(cedulaAleatoria);

  });
});

Cypress.Commands.add('CargarCedulaPDF', () => {
  cy.get('#solicitud_tipo_documento').click()
    .type('CEDULA')
  cy.get('div[id^="react-select-"]').click() //(selecciona en la lista)

  //cargar un archivo de forma manual porque el pdf se carga dentro del proyecto
  cy.get('[name="documento"]').attachFile('Document.pdf');
  cy.get('.button-add').type('AGREGAR').click();

});

Cypress.Commands.add('CargarSolicitudCreditoPDF', () => {
  cy.get('#solicitud_tipo_documento').click()
    .type('SOLICITUD DE CRÉDITO')
  cy.get('div[id^="react-select-"]').click() //(selecciona en la lista)

  //cargar un archivo de forma manual porque el pdf se carga dentro del proyecto
  cy.get('[name="documento"]').attachFile('Document.pdf');
  cy.get('.button-add').type('AGREGAR').click();

});

Cypress.Commands.add('Generarfechaexpediciondocumento', () => {

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

});

Cypress.Commands.add('AñadirfechaNacimiento', () => {
  const fechanacimiento = '1999-07-07';
  cy.get('input[name="fecha_nacimiento"]').type(fechanacimiento);

});


//SECCION DE SOLICITUD DE CRÉDITO
Cypress.Commands.add('SolicitudCultiva', () => {
cy.get('#subproducto').should('be.visible').click();
cy.get('.react-select').contains('CULTIVA').click();

cy.get('#origen').click();
cy.get('.react-select').contains('LLAMADA').click();

cy.get('#medio').click();
cy.get('.react-select').contains('REDES SOCIALES').click();

cy.get('#tipo_credito').click();
cy.get('.react-select').contains('RURAL').click();

cy.get('#seguro_voluntario').click();
cy.get('.react-select').contains('TIPO 2').click();

cy.get('#tipo_seguro').click();
cy.get('.react-select').contains('URBANO').click();

cy.get('.form-control').type('1000000');

cy.get('#plazo_solicitado').click();
cy.get('.react-select').contains('14 Meses').click();

});

Cypress.Commands.add("loginapp", (email,password) =>{
  cy.get("input[name='email']").type(email)
  cy.get("input[name='password']").type(password)
  cy.get("span[class='label']").contains("Ingresar").click()
})

Cypress.Commands.add('generarCedula', () => {
    const cedula = Math.floor(Math.random() * 1000000000).toString();
    return cedula;
  
});
 
module.exports = {};