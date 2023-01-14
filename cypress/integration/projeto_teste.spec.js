/// <reference types="Cypress" />

describe('Projeto teste', function() {
    beforeEach(function(){
        cy.visit('http://www.aprendendotestar.com.br/treinar-automacao.php')
    })

    it('acessar página principal e verificar o título da url com sucesso', function() {
        cy.title().should('be.equal', 'Sobre - Aprendendo a Testar - Um guia para você aprender sobre testes de Software')
    })

    it('cadastrar usuário com sucesso', function(){
        cy.get('input[type="text"][name="form_usuario"]').type('marcelo.patrik')
        cy.get('input[type="password"][name="form_senha"]').type('123456789')
        cy.get('input[type="text"][name="form_nome"]').type('Marcelo Patrik Bitencourt da Silva', { delay : 0 })
        cy.get('input[type="submit"]').click()
        cy.contains('marcelo.patrik').should('be.visible')
    })

    it('exibir mensagem erro quando o usuario não preencher o campo nome', function(){
        cy.get('input[type="text"][name="form_usuario"]').type('Edson Jose')
        cy.get('input[type="password"][name="form_senha"]').type('123456789')
        cy.get('input[type="submit"]').click()
        cy.contains('Existem campos em branco.').should('be.visible')
    })


  })
  
