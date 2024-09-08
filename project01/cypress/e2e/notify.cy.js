// 登录系统,发布通知,查询通知,删除通知业务流程测试
describe('通知业务管理流程', ()=>{
   // 此处是前置操作,当前模块下只执行一次 
    before("前置操作,当前模块下只执行一次 ", ()=> {
        cy.visit('/login')
        cy.get('#van-field-1-input').type('nancy')
        cy.get('#van-field-2-input').type('a12345678')
        cy.get('.van-button').click()
        cy.url().should("include",'/home/landing')
        
    });
// 此处是后置操作,当前模块下执行一次
    after('后置操作,当前模块下执行一次', ()=>{
        cy.log('******************8通知模块执行完毕*************'); 
    })

    it('', ()=>{

    })
})