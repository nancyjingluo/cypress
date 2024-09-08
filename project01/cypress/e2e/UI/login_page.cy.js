
import locator from "./data/locator.json" // 导入定位信息文件

export default class Login_Page {

    constructor(){  // 使用构造方法定义URL
        this.url = 'http://mobile.qa.roomis.com.cn/login'
    }
    // 封装打开页面方法
    visit(){
        cy.visit(this.url)
    }

    // 封装页面对象

    get username(){
       return cy.get(locator.loginpage.username)
    }

    get passwrod(){
        return cy.get(locator.loginpage.password)
    }

    get submit(){
        return cy.get(locator.loginpage.submit)
     }

    //封装登录的业务流程

    login(user,pwd){
        if(user !== ""){
            this.username.type(user)
        }
        if(pwd !== ""){
            this.passwrod.type(pwd)
        }
        this.submit.click()
    }
    login_no_value(user,pwd){
        if(user == ""){
            this.username.type(user).clear()
        }
        if(pwd == ""){
            this.passwrod.type(pwd).clear()
        }
        this.submit.click()
    }
}
