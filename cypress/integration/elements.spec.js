//const { constant } = require("cypress/types/lodash");
/// <reference types="cypress"/>

describe('Testes', () => {
    //antes de testar para cada teste visitar a pagina
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    });

    beforeEach(() => {
        cy.reload()
    });

    it('Verifica texto', () => {
        cy.contains('Cuidado ')
        cy.get('body').contains('Cuidado ')
        cy.get('span').contains('Cuidado ')
        cy.get('.facilAchar').contains('Cuidado')
        //have.text localiza todo o texto
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
        cy.wait(3000)
        cy.get('[href="#"]').click()
        cy.wait(3000)
        cy.get('#resultado').contains('Voltou!')

    });

    it('Links e Botões', () => {
        cy.wait(3000)
        cy.get('[href="#"]').click()
        cy.get('#resultado').contains('Voltou!')

        cy.reload()
        cy.get('[href="#"]').click()
        cy.get('#resultado').contains('Voltou!')
    });

    it('Escrever nos camposs', () => {
        //const valor = ("teste de escrita na Area");

        cy.get('#formNome').type('Luis')
        cy.get('#formNome').should('have.value', 'Luis')

        cy.get('[data-cy=dataSobrenome]')
            .type('Medeiros')
            .should('have.value', 'Medeiros')

        cy.get('#elementosForm\\:sugestoes')
            .type('teste de escrita na Area')
            .should('have.value', 'teste de escrita na Area')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6)')
            .type('linha input do francisco')
        //.should('have.text', 'linha input do francisco')

    });

    it('Teclas de Eventos', () => {
        //Opções de Eventos para serem utilizados
        // selectAll, moveToStart, moveToEnd, del, backspace, esc, enter, rightArrow, leftArrow,
        // upArrow, downArrow, home, end, insert, pageUp, pageDown, {, alt, option, ctrl, control, 
        // meta, command, cmd, shift 
        cy.get('[data-cy=dataSobrenome]')
            .clear()
            .type('teste123{backspace}', { delay: 100 })
            .type('{selectall}Acerto', { delay: 100 })
            .type('{cmd}')
            .should('have.value', 'Acerto')
        //cy.wait(300)

    });
    it('Validar Radio Botton', () => {
        //selecionando e verificando se radio botton "masculino" foi selecionado
        cy.get('#formSexoMasc')
            .click()
            .should('be.checked')
        //validando se o "feminino" não foi selecionado
        cy.get('#formSexoFem')
            .should('not.be.checked')

        // procurando classe na pagina
        cy.get('[name=formSexo]').should('have.length', 2)
    });
    it('validar checkbox', () => {
        cy.get('[name=formComidaFavorita]')
        .click({ multiple: true })
        .should('be.checked')
    });
    it('Combo seleçao', () => {
        cy.get('[data-test=dataEscolaridade]')
        .select('superior')
        .should('have.value','superior')

        cy.get('[data-test=dataEscolaridade]')
        .select('2graucomp')
        .should('have.value','2graucomp')
        
    });
    it('combo multiplo', () => {
        cy.get('[data-testid=dataEsportes]')
        .select(['natacao','Karate'])
        
        //TODO PARA VALIDAR COMBOS SELECIONADOS
        //.should('have.value',[ 'natacao', 'Karate' ])
        //.should('have.value', ['natacao','Karate'])

    });

});