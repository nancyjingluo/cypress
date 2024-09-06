const { describe, it } = require("mocha");

describe('click and select ', () => {

    it('click', () => {
        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('.action-div').dblclick()
        cy.get('.action-div').should('not.be.visible')
        cy.get('.action-input-hidden').should('be.visible')

        cy.get('.rightclick-action-div').rightclick()
        
    });

    it('select', () => {
        cy.visit('https://example.cypress.io/commands/actions')
        //单选或者多选 check
        cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]').check()
        cy.get('.action-multiple-checkboxes [type="checkbox"]').check()
        //  强制选择
        cy.get('.action-checkboxes [type="checkbox"]').check({force:true})

         //强制取消
         cy.get('.action-checkboxes [type="checkbox"]').uncheck({force:true})
         cy.get('.action-multiple-checkboxes [type="checkbox"]').uncheck()

         // 选择一个或者多个
         cy.get('.action-checkboxes [type="checkbox"]').check('checkbox3')
         cy.get('.action-multiple-checkboxes [type="checkbox"]').check(['checkbox1', 'checkbox2'])

         cy.get('.action-radios [type="radio"]').check('radio3', {force:true})
         cy.get('.action-radios [type="radio"]').should('be.checked')
 
        
    });

    it('select', () => {
        cy.visit('https://example.cypress.io/commands/actions')
        //定位select
        cy.get('.action-select').select('apples')//通过文本
        cy.get('.action-select').select('fr-apples')//通过属性
        // 多选
        cy.get('.action-select-multiple').select(['apples','oranges'])
    });


})