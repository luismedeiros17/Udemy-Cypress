/// <reference types="cypress"/>
describe('Acessar clicksign', () => {

    before(() => {
        //antes de testar para cada teste visitar a pagina
        cy.visit('https://1.clicksign.dev/')
    });
    it('Acessar tavola Adicionar Docs', () => {
    cy.get('[data-testid=emailField]').type('luis.medeiros+1@clicksign.com')
    cy.get('[data-testid=passwordField]').type('Sistemas@10')    
    cy.get('[data-testid=submitButton]').click()
    cy.get('.leftbar-action-mobile > .fal').click()
    cy.get('[data-testid=documentUploadModalButton]').click() 
    cy.get('.my-1 > .content_12uZ- > span').click()
    
});
});