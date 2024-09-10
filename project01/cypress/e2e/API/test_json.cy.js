import GetToken from "./tools/token.cy";
import testdatas from "./data/testdatas.json"

describe('测试首页,使用json参数化', function(){

    let baseurl ='https://qa-api.roomis.com.cn'
    let tools = new GetToken();

    before(function(){
        tools.generateToken()
    })

    for (const data in testdatas){
        it(testdatas[data].casename, function(){
            let url = testdatas[data].url
            let method = testdatas[data].method
            let headers = testdatas[data].headers
            let qs = testdatas[data].qs
            let status = testdatas[data].status
            cy.request({url:baseurl+url, method:method,headers:{headers,"authorization":this.token},
                qs:qs, failOnStatusCode:false})
            .then(resp =>{
                expect(resp.status).to.be.equal(200);
            })

        })
    }


})