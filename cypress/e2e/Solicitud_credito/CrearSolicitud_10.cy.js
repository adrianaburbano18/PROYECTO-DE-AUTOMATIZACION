
import 'cypress-file-upload';

describe('Primer conjunto de casos de prueba', function () {

    before(function () {
        cy.fixture('example').then(function (datos) {
            this.datos = datos
        })

    })

    this.beforeEach(() => {
        //ingresar a la pagina web
        cy.visit("https://qa-app.uni2.com.co")
    })

    it('Login principal', function () {
        cy.get('input').first().type('mesa009@uni2.com.co')
        cy.get('input').last().type('finamiga2021')
        cy.get('.label').click()
        cy.contains('NUEVA SOLICITUD').click()
        //Select de TIpo identificación 
        cy.get('#tipo_identificacion').should('be.visible').click(); // Abre el componente de selección
 
     
     //cy.get('.form-control').type('1144105898')


        // Generate a random index within the length of the array
        const randomIndex = Math.floor(Math.random() * this.datos.number.length);

        // Use the random index to select an identification number
        const selectedNumber = this.datos.number[randomIndex];

        // Type the selected identification number
        cy.get('[name="numero_identificacion"]').type(selectedNumber);

        cy.get('#producto').should('be.visible').click();
        cy.get('.react-select').contains('CARGA').click();
        cy.get('#bottom-navigation-bar').click();

        cy.wait(2000)


        cy.get('.modal-footer .btn')
        cy.contains('ACEPTAR').click();


        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();

        //SECCION DE SOLICITUD DE CRÉDITO

        cy.get('#subproducto').click();
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

        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();


        //SECCION DE CONTACTO/NEGOCIO

        cy.get('#celular').type('3182152128');

        cy.get('[name="solicitud_negocio.celular"]').type('3182152120');

        cy.get('.form-group').eq(4).type('MEDELLIN')
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

        //SECCION DE DOCUMENTOS



        cy.get('#solicitud_tipo_documento')
            .type('SOLICITUD DE CRÉDITO')
        cy.get('div[id^="react-select-"]').click()

        cy.get('.form-control').attachFile('Document.pdf');
        cy.get('.button-add').type('AGREGAR').click();
        cy.wait(2000);

        cy.get('#solicitud_tipo_documento')
            .find('.list__value-container')
            .type('CEDULA') // (busca)
            .get('#react-select-22-option-1').click(); //(selecciona en la lista)

        //cargar un archivo de forma manual porque el pdf se carga dentro del proyecto
        cy.get('.form-control').attachFile('Document.pdf');
        cy.get('.button-add').type('AGREGAR').click();
        cy.wait(2000);

        cy.get('#bottom-navigation-bar .simple-icon-arrow-left').click();
        cy.wait(2000);
        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').click();
        cy.wait(2000);
        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').click();
        cy.wait(2000);

        cy.get('[name="codigo_ticket"]')
            .type('0');


        cy.get('.modal-footer .btn')
            .contains('FINALIZAR')
            .click();


    })
})

