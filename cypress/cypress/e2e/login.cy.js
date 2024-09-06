const { describe, it } = require("mocha");

describe('登录',()=>{
    it('登录失败', () => {
        //访问
        cy.visit('http://testingpai.com/login')
        cy.get('#nameOrEmail').type('yuz')
        cy.get('#loginPassword').focus().type('123')
        cy.get('#loginBtn')
        
    });
})