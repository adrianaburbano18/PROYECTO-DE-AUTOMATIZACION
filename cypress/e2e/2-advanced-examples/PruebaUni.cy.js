
import'cypress-file-upload';

describe('Primer conjunto de casos de prueba',function()
{
    this.beforeEach(() =>{
        //ingresar a la pagina web
        cy.visit("https://qa-app.uni2.com.co")
    })

    it('Login principal', function(){
        cy.get('input').first().type('mesa009@uni2.com.co')
        cy.get('input').last().type('finamiga2021')
        cy.get('.label').click() 
        cy.contains('NUEVA SOLICITUD').click()         
          //Select de TIpo identificación 
        cy.get('#tipo_identificacion').should('be.visible').click(); // Abre el componente de selección
        /*cy.get('.react-select')
            .contains('IDENTIFICACIÓN TRIBUTARIA') // Encuentra la opción con el texto 'CEDULA'
            .click(); // Haz clic en la opción 'CEDULA'*/
        cy.get('.form-control').type('1078747567')

        cy.get('#producto').should('be.visible').click(); 
        cy.get('.react-select').contains('CARGA').click(); 
        cy.get('#bottom-navigation-bar').click();
   
       cy.get('#formInformationClient .form-control').should('be.visible')// Obtener todos los elementos del conjunto
        .eq(3) // Seleccionar el primer elemento del conjunto (cambia el índice según sea necesario)
        .type('Unas'); // Aplicar cy.type() al elemento seleccionado

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

        cy.get('.form-group').should('be.visible')
        .eq(0).type('3182152128');

        cy.get('.form-group').should('be.visible')
        .eq(3).type('3182152120');

         cy.get('.form-group').should('be.visible')
         .eq(4).type('MEDELLIN')
         .get('#react-select-20-option-0').click();

        cy.get('.form-group').should('be.visible')
        .eq(5).type('MONTANITA')
        .get('#react-select-21-option-0').click();

        cy.get('.input-group').eq(0)
        .find('.quit-padding-select-address .form-control')
        .select('VEREDA')
        cy.get('.quit-padding-input-address').type('SAN CARLOS').click();

        cy.get('.form-group').should('be.visible')
        .eq(7).type('AGRICULTOR').click();

        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();  

        //SECCION DE DOCUMENTOS

        cy.get('#solicitud_tipo_documento')
        .find('.list__value-container')
        .type('SOLICITUD DE CRÉDITO') 
        .get('#react-select-22-option-0').click(); 

        cy.get('.form-control').attachFile('Document.pdf');
        cy.get('.button-add').type('AGREGAR').click();
        cy.wait(4000);
        
        cy.get('#solicitud_tipo_documento')
        .find('.list__value-container')
        .type('CEDULA') // (busca)
        .get('#react-select-22-option-1').click(); //(selecciona en la lista)

        //cargar un archivo de forma manual porque el pdf se carga dentro del proyecto
        cy.get('.form-control').attachFile('Document.pdf');
        cy.get('.button-add').type('AGREGAR').click();
        cy.wait(4000);

        cy.get('#bottom-navigation-bar .simple-icon-arrow-left').click();  
        cy.wait(4000);
        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').click();  
        cy.wait(4000);
        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').click();  
        cy.wait(1000);

        cy.get('.modal-footer .btn').type('FINALIZAR').click();


        
    })
 })
 
