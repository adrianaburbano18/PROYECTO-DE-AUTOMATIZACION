import'cypress-file-upload';


describe('Primer conjunto',function()
{
    this.beforeEach(() =>{
        //ingresar a la pagina web
        cy.visit("https://qa-app.uni2.com.co")
    })

    it('Aliado digital', function(){
        cy.get('input').first().type('ALEJO.ALVAREZ98@hotmail.com')
        cy.get('input').last().type('finamiga2021')
        cy.get('.label').click(); 

        cy.wait(4000);

        cy.get('.align-middle .finamiga-color .box-state')
        .first()// Selecciona el primer elemento del conjunto
        .click();

        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();  
    
        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();   

        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();   

        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();   



         

        cy.get('.li_authorization_options').eq(3).click();
        cy.wait(1000);

        const path = 'cara_foto_frontal.jpeg';
        cy.get("input[name='inputFile_webcamPhoto']").attachFile(path);

        cy.wait(4000);

        /*cy.fixture('Documento_foto_frontal.png').then(fileContent => {
            cy.get('input[type="inputFile_webcamIdDocF"]').attachFile({
              fileContent: fileContent,
              fileName: 'Documento_foto_frontal.png',
              mimeType: 'image/png'
            });
          });*/


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
 
