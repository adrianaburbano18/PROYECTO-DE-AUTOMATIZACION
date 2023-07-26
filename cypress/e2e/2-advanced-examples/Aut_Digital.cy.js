import'cypress-file-upload';


describe('Primer conjunto de casos de prueba',function()
{
    this.beforeEach(() =>{
        //ingresar a la pagina web
        cy.visit("https://qa-app.uni2.com.co")
    })

    it('Aliado digital', function(){
        cy.get('input').first().type('ALEJO.ALVAREZ98@hotmail.com')
        cy.get('input').last().type('finamiga2021')
        cy.get('.label').click() 

        cy.wait(4000);

        cy.contains('NUEVA SOLICITUD').click()         
          //Select de TIpo identificación 
        cy.get('#tipo_identificacion').should('be.visible').click(); // Abre el componente de selección
        /*cy.get('.react-select')
            .contains('IDENTIFICACIÓN TRIBUTARIA') // Encuentra la opción con el texto 'CEDULA'
            .click(); // Haz clic en la opción 'CEDULA'*/
        cy.get('.form-control').type('1078747567')
        
        cy.get('#producto').should('be.visible')
        .type('MOTOCARRO')
        .get('#react-select-3-option-0').click();

        cy.get('#bottom-navigation-bar').click();
   
       cy.get('#formInformationClient .form-control').should('be.visible')// Obtener todos los elementos del conjunto
        .eq(3) // Seleccionar el primer elemento del conjunto (cambia el índice según sea necesario)
        .type('Unas'); // Aplicar cy.type() al elemento seleccionado

        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();   

        //SECCION DE SOLICITUD DE CRÉDITO- MOTO

        cy.get('#subproducto').should('be.visible')
        .type('MOTO')
        .get('#react-select-8-option-0').click();

        cy.get('#marca')
        .find('.list__value-container')
        .type('AKT') 
        .get('#react-select-12-option-0').click();  

        cy.get('#linea').click(); 
        cy.get('.react-select').contains('FLEX').click(); 

        cy.get('.form-control').eq(0).type('10000000');

        cy.get('.form-control').eq(1).type('0');

        cy.get('.form-control').eq(2).type('0');

        cy.get('.form-control').eq(3).type('0');

        cy.get('.form-control').eq(4).type('0');

        cy.get('#plazo_solicitado').click(); 
        cy.get('.react-select').contains('14 Meses').click();

        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click(); 
        
        
           //SECCION DE CONTACTO/NEGOCIO

        cy.get('.form-group').should('be.visible')
        .eq(0).type('3182152128');

        cy.get('.form-group').should('be.visible')
        .eq(3).type('3182152120');

         cy.get('.form-group').should('be.visible')
         .eq(4)
         .wait(2000)
         .type('LA ARGENTINA')
         .wait(2000)
         .get('#react-select-16-option-0').click();

        cy.get('.form-group').should('be.visible')
        .eq(5).type('El PENSIL')
        .get('#react-select-17-option-4')
        .wait(2000)
        .click();

        cy.get('.input-group').eq(0)
        .find('.quit-padding-select-address .form-control')
        .select('VEREDA')
        cy.get('.quit-padding-input-address').type('SAN CARLOS').click();

        cy.get('.form-group').should('be.visible')
        .eq(7).type('AGRICULTOR').click();


        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();  
  

        cy.get('.li_authorization_options').eq(3).click();
        cy.wait(10000);


        cy.get('.simple-icon-cloud-upload').click();
                //cargar un archivo de forma manual porque el pdf se carga dentro del proyecto
             cy.get('.simple-icon-cloud-upload').attachFile('cara_foto_frontal(.jpeg)');
             cy.wait(4000);


        
    })
 })
 
