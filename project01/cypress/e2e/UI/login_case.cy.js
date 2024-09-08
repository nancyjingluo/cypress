import Login_Page from "./login_page.cy";
import data from "./data/login.json"

describe("登录功能验证",function(){
    
    let loginRM = new Login_Page()

    beforeEach(function(){
        loginRM.visit()
        //cy.wrap(loginHL).as('testlogin') //返回传递给loginhl的对象,使用as命令设置别名,方便在测试用例中引用
    })
    /* 
    afterEach(function(){
        cy.wait(1000) // 设置每次登录的时间间隔为1s
    })
    */
    

    data.success.forEach( item => { // 遍历login.json中succses的数据
        it(item.name,()=>{
            loginRM.login(item.username,item.password) //获取账号密码后登录
            cy.url().should("include",'/home/landing')
            cy.url().should(item.validate.checkpoint[1],item.validate.checkpoint[2])
        })
    })

    data.fail.forEach(item =>{
        it(item.name,function(){
            loginRM.login(item.username,item.password)
            cy.get(item.validate.checkpoint[0]).should(item.validate.checkpoint[1],item.validate.checkpoint[2])

        })
    })

})