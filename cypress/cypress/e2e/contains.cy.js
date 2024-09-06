const { it } = require("mocha")

describe('', () => {
    it('用户输入', () => {
        cy.visit('https://example.cypress.io/commands/actions')
        // cy.contains('Submit')
        // focus聚焦
        cy.get('#password1').focus()
        cy.get('.action-focus').should('have.class', 'focus').prev().should('have.attr', 'style', 'color: orange;')

        //blur 把光标移开
        cy.get('#fullName1').type('123456')
        cy.get('#fullName1').blur()
        
        // clear 元素清空
        cy.get('.action-clear').type('nancy12355')
        cy.get('.action-clear').should('have.value', 'nancy12355')
        cy.get('.action-clear').clear()
        cy.get('.action-clear').should('have.value', '')

        // submi一定是form表单才可以使用
        cy.get('.action-form').find('[type="text"').type('nancy')
        cy.get('.action-form').submit()

    });
})