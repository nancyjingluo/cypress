// 定义公共函数生成token
export default class GetToken {
    generateToken(){
        return  cy.request({
            method: "POST",
            url: "https://console-qa.roomis.com.cn/oauth2/token",
            body: {
              "userName": "nancy",
              "password": "a12345678"
            }
        }).then(resp =>{
            cy.wrap('Bearer ' + resp.body.access_token).as('token')
        })
    }
}
