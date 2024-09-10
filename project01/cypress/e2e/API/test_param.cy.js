import GetToken from "./tools/token.cy.js";

describe('首页查询功能',function(){
    let baseurl ='https://qa-api.roomis.com.cn'
    let tools = new GetToken()
    
    before(function(){
        tools.generateToken()
    })

    let testdatas = [
        {
            "casename":"查询空间",
            "url":"/api/spaces/search",
            "method":"get",
            "failOnStatusCode": false,
            "headers":{ "Content-Type":"application/json"},
            "qs": {
                "pageIndex" : 1,
                "pageSize" : 10,
                "keyWord":"999999"},
            "status":200
        },
        {
            "casename":"查询今日排程",
            "url":"/api/spaces/search",
            "method":"get",
            "headers":{ "Content-Type":"application/json"},
            "qs": { 
                "start":"2024-09-08",
                "end":"2024-09-08",
                "status":"ACTIVE" },
            "status":200
        }

    ]

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