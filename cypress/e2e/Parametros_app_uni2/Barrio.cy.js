import { faker } from "@faker-js/faker";


describe('Modulo parametros: Barrios', function () {
    this.beforeEach(() => {
        //ingresar a la pagina web
        cy.visit("https://qa-app.uni2.com.co")
    })

    it('Barrios', function () {

        // Introducir las credenciales de inicio de sesión
        cy.get('[name="email"]').type('eanaya@uni2.com.co')
        cy.get('[name="password"]').type('finamiga2021')

        // Hacer clic en el botón de inicio de sesión
        cy.get('.label').contains('Ingresar').click();

        cy.wait(2000);

        //ambiar rol

        cy.get('.name').click();

        cy.get('.dropdown-item')
        cy.contains('Cambiar rol').click()

        cy.get('.form-group').click();
        cy.get('.react-select').contains('COORDINADOR MESA DE AYUDA').click();

        cy.get('.btn')
        cy.contains('CAMBIAR').click()

        cy.wait(1000);

        //Menú

        cy.get('.menu-button')
            .click();

        cy.get('.simple-icon-settings')
            .click();

        cy.get('.simple-icon-location-pin')
            .click();


        cy.wait(3000)

        //Crear barrio

        cy.get('.btn')
        cy.contains('NUEVO').click()

        cy.get('[name="name"]').type(faker.name.firstName());

        cy.get('.modal-content .modal-body .form-group #tipo')
            .type('BARRIO')
        cy.get('div[id^="react-select-"]').click();

        //Busqueda de barrios
        cy.get('.modal-body .form-group').eq(2).click()
            .type('SAN ANDRES DE CUERQUIA')
            .type('{selectall}{backspace}')//SELECCIONA Y LIMPIA EL CAMPO
            .type('SAN ANDRES DE CUERQUIA')
        cy.get('div[id^="react-select-"]').click()
        cy.get('.css-1uccc91-singleValue').should('contain.text', 'SAN ANDRES DE CUERQUIA - ANTIOQUIA')

        cy.get('.btn')
        cy.contains('GUARDAR').click();


        cy.wait(2000)

        //Listado de barrios x ciudad
        cy.contains('label', 'Ciudad').click()
            .type('SAN ANDRES')
            .type('{selectall}{backspace}')//SELECCIONA Y LIMPIA EL CAMPO
            .type('SAN JOSE DE LA MONTAÑA')
        cy.get('div[id^="react-select-"]').click()
        cy.get('.css-1uccc91-singleValue').should('contain.text', 'SAN JOSE DE LA MONTAÑA - ANTIOQUIA')

        cy.wait(3000)

        cy.get('#search')
            .type('POTRERITOS')
        cy.get('.search_click').click();

    })
})

