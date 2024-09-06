const { it } = require("mocha")

describe ('' , ()=>{
    it('导航', () => {
        // 访问url,visit 只能返回html页面，返回json是访问不了的
        cy.visit('http://testingpai.com/')
        //
        cy.visit('http://testingpai.com/login')
        cy.go('back')
        cy.go('forward')
        //refresh
        cy.reload()
        console.log(cy.url())
        console.log(cy.title())

    });
})