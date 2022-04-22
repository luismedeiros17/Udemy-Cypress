/// <reference types="cypress" />

context('Dev Finances Agilizei', () => {
    it('Cadastrar entradas', () => {
        // - entender o fluxo manual;
        // - mapear os elementos que vamos interagir;
        // - descrever as interações com cypress ;
        //- adicionar as asserçoes (Validações);

        cy.visit('https://maratona-discover-devfinance.netlify.app')
        //cy.pause()
        cy.get('#transactions > .button').click() //mapeado 
        cy.get('#description').type('mesasda') //mapeado pelo selector
        cy.get('#amount').type(200)   //mapeado pelo selector ou path = //*[@id="amount"]
        cy.get('#date').type('2021-10-22')  //mapeado pelo selector
        //cy.get('#form > form > div.input-group.actions > a');//cancelarr
        cy.get('#form > form > div.input-group.actions > button').click() ///salvar
    });
    //cadastrar saidas
    //remover entradas e saidas
    //
});