/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    it.only('verifica o título da aplicação', function() {
        cy.visit('./src/index.html')

        cy.title().should('Central de Atendimento ao Cliente TAT')
    
  
    })
  })
  

