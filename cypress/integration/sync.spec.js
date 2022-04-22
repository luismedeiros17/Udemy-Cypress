/// <reference types="cypress"/>

//const { should } = require("chai");

//aula 18
describe('Esperas', () => {

    before(() => {
        //antes de testar para cada teste visitar a pagina
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    });

    beforeEach(() => {
        cy.reload()
    });
    it('Aguardar elemento diponivel', () => {
        //variavel
        const dado = 'teste de campo'
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay')
            .click()
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type(dado)
            .should('have.value', dado)
    });
    it('fazer retentativas', () => {
        const dado = 'teste de retentar'
       // cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay')
            .click()
        cy.wait(2000)
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type(dado)
            .should('have.value', dado)
    });

//buscas por ul 
    it('Buscar - Find', () => {
        cy.get('#buttonList').click()
        cy.get('#lista li')
           .find('span')
           .contains('Item 1')
        cy.get('#buttonList').click()
        cy.get('#lista li')
           .find('span')
           .contains('Item 2')
        cy.wait(3000)
        cy.get('#lista li span',{timeout: 30000}).should('contain','Item 2')
    });

    it('Usar Timeout', () => {
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('exist')

        cy.get('#buttonList').click()
        cy.get('#lista li span')
          .should('have.length',1)
        cy.get('#lista li span')
          .should('have.length',2)

    });

    it('Clique retry', () => {
        cy.get('#buttonCount').dblclick()
          .should('have.value','111')     
    });
});
