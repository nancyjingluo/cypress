describe('首页', () => {
    it('点击登录功能', () => {
        cy.visit('http://testingpai.com/')
        cy.get('#navLogin').click()
        cy.url().should("include","login")
        cy.title().should("include","登录")
    });
})



