const { it } = require("mocha")

describe('element', ()=>{
    it('通过父级元素获取子元素', () => {
        cy.visit('https://example.cypress.io/commands/querying')
        //children（）
        let name_el = cy.get('.query-form').children('input:first')
        name_el.type('nancy')
        // 通过 同级元素 siblings（）可以左边右边上边下边
        let pwd_el = name_el.siblings('input')
        pwd_el.type('1234567890')
        //prev（）哥哥元素
        name_el =pwd_el.prev('input')
        name_el.clear()
        // next() 弟弟元素
        pwd_el = name_el.next('input')
        pwd_el.clear()

    });

    it('within，一次性拿两个元素', () => {
        cy.visit('https://example.cypress.io/commands/querying')
        
        cy.get('.query-form').within(($form) => {
            cy.get('input:first').type('user is nancy')
            cy.get('input:last').type('一次性拿两个元素')
    
        })
        
    });
    
})

