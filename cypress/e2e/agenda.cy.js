/// <reference types="cypress" />

describe('Testes para a agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Deve incluir um novo contato', () => {
        cy.get('input[type="text"]').type('Minato Sahashi')
        cy.get('input[type="email"]').type('sminato@test.com')
        cy.get('input[type="tel"]').type('549123123123')
        cy.get('.adicionar').click()

        cy.contains('Minato Sahashi').should('be.visible')
    })

    it('Deve alterar um contato existente', () => {
        cy.get('.edit').first().click()
        cy.get('input[type="text"]').clear().type('Minato Sahashi Alterado')
        cy.get('input[type="email"]').clear().type('sminato_alterado@test.com.br')
        cy.get('input[type="tel"]').clear().type('549321321321')
        cy.get('.alterar').click()

        cy.contains('Minato Sahashi Alterado').should('be.visible')
    })

    it('Deve remover um contato', () => {
        cy.get('.delete').first().click()
        cy.get('.delete').then(buttons => {
            const countBefore = buttons.length
            cy.get('.delete').first().click()
            cy.get('.delete').should('have.length', countBefore - 1)
        })
    })
})
