const { describe, it } = require("mocha");

describe('select', ()=>{
    
    it(' 全局滚动窗口 cy.scrollTo', () => {
        cy.visit('https://example.cypress.io/commands/querying')
        
        //滚动到合适的位置输入信息，全局滚定
        cy.get('#inputEmail').scrollIntoView().type('nancy@123')
        cy.wait(2000)
        
        // scroll to top
        cy.scrollTo('top')
        cy.wait(2000)
        
        // bottom
        cy.scrollTo('bottom')
        cy.wait(2000)
        
        // 滚动到指定位置
        cy.scrollTo(0,250)
        cy.wait(2000)

         // 通过百分比滚动
         cy.scrollTo('0%','50%')
         cy.wait(2000)


    });

    it('Scroll', () => {
        cy.visit('https://example.cypress.io/commands/actions')

        //滚动到合适的位置输入信息// 滑动到最右边
        cy.get('#scrollable-horizontal').scrollIntoView().scrollTo('right')
        
        cy.get('#scrollable-vertical').scrollTo('center')
        cy.wait(2000)
        cy.get('#scrollable-vertical').scrollTo(250, 250)
    });
})