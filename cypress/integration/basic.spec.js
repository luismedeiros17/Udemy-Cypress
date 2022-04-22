/// <reference types="cypress"/>

//const { contains } = require("cypress/types/jquery");

describe('Cypress Basic', () => {
    it.only('Clicar no item da pagina', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        //cy.pause()

        const valor = String('Luis Medeiros')
        cy.contains('Campo')

        //titulo da aba da pagina
        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo')

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')

        // cy.get('#formNome').type(valor)
        // cy.get('#formNome').contains = (valor)
        // cy.get('[value="Karate"]').click()
        // cy.get('#formCadastrar').click()

        cy.title().then(title => {
            console.log(title)
        })
    })

    it('teste botão clique', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.wait(2000)
        cy.get('#buttonSimple').click()
        // que tenha parte da informação encontrada
        cy.contains('Obriga')

        //dever haver o valor exato em have
        cy.get('#buttonSimple').should('have.value', 'Obrigado!')
        cy.reload()

        //outra forma de executar o comando
        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')
    });

});