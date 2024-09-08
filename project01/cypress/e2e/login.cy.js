
describe('', ()=>{
    
    it("输入正确的账号密码登录", ()=> {
        cy.visit('/login')
        cy.get('#van-field-1-input').type('')
        cy.get('#van-field-2-input').type('')
        cy.get('.van-button').click()
        cy.get('._errorMsg_1k5ar_67 > span').should("contain",'请输入邮箱')
        // cy.url().should("include",'/home/landing')
        // cy.get('.van-nav-bar__title').should("have.text",'首页')
        // cy.get('._welcome_1dgt5_2 > span').should("contain.text",'南希希')
    })
    
    
})

