/// <reference types="Cypress" />

describe('Projeto teste', function() {
    beforeEach(function(){
        cy.visit('https://ultimateqa.com/automation')
    })

    it('acessar página principal e verificar o título da url com sucesso', function() {
        cy.title().should('be.equal', 'Automation Practice - Ultimate QA')
    })

  })
  
