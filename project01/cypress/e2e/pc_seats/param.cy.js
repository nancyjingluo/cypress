describe("参数化搜索功能" , function() {

    beforeEach("先登录成功", ()=> {
        cy.visit('/login')
        cy.get('#van-field-1-input').type('nancy')
        cy.get('#van-field-2-input').type('a12345678')
        cy.get('.van-button').click()
        cy.url().should("include",'/home/landing')
    });

    ['888','999999','9#003'].forEach((info) =>{
        it('search' + info, ()=>{

            cy.get('.van-field__control').click()
            cy.url().should('include','/spaces/search?with-location=false')
            cy.get('.van-cell').type(info).type('{enter}')
            cy.get('.van-list > .van-cell').contains(info)
            cy.get('.van-search__action').click()
            cy.url().should("include",'/home/landing')
        })
    })

})