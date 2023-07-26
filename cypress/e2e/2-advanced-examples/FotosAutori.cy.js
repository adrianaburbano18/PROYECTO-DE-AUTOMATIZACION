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

        cy.get('.finamiga-color .box-state')
        .contains('111319')
        .click();      
      

        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();  
        cy.wait(2000); 
        cy.get('#bottom-navigation-bar .simple-icon-arrow-right').last().click();   
        cy.wait(2000); 
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
                  .get('#react-select-14-option-0').click();
         
                 cy.get('.form-group').should('be.visible')
                 .eq(5).type('El PENSIL')
                 .get('#react-select-15-option-11')
                 .wait(2000)
                 .click();
         
                 cy.get('.quit-padding-select-address .form-control').eq(0)
                 .select('VEREDA')
                 cy.get('#direccionUno').type('SAN CARLOS').click();
         

        cy.get('.li_authorization_options').eq(3).click();
        cy.wait(1000);

        const path = 'cara_foto_frontal.jpeg';
        cy.get("input[name='inputFile_webcamPhoto']").attachFile(path);

        cy.wait(4000);

        cy.fixture('Documento_foto_frontal.png').then(fileContent => {
            cy.get('input[type="inputFile_webcamIdDocF"]').attachFile({
              fileContent: fileContent,
              fileName: 'Documento_foto_frontal.png',
              mimeType: 'image/png'
            });
          });

        const Imgs = 'Documento_foto_frontal.png';
        cy.get("'.photo_card--containerID' input[name='inputFile_webcamIdDocF']").attachFile(Imgs);
  


      

         
        const path2 = 'documento_foto_posterior.png';
        cy.get("input[name='inputFile_webcamIdDocB']").attachFile(path2);
        
    })
 })
 
