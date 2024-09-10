import GetToken from "./tools/token.cy.js";
describe('功能验证',()=>{
    
    let tools = new GetToken()

    before(function(){
        tools.generateToken()
    })

    it('查询空间',function(){

        cy.request({
            method: "GET",
            url: "https://qa-api.roomis.com.cn/api/spaces/search",
            headers:{
                "Content-Type":"application/json",
                "authorization":this.token,

            },
            qs: { //查询字符串参数
                pageIndex : 1,
                pageSize : 10,
                keyWord:'999999'},

            failOnStatusCode: false
          }).then(response =>{
            expect(response.status).to.be.equal(200);
            expect(response.body.pagination.totalCount).to.be.equal(1);
            expect(response.body.list[0].displayName).to.contain('999999')
        });
         
        })

    it('查询今日排程',function(){

        cy.request({
            method: "GET",
            url: "https://qa-api.roomis.com.cn/api/users/self/schedules",
            headers:{
                "Content-Type":"application/json",
                "authorization":this.token,
                },
            qs: { //查询字符串参数
                    start:'2024-09-08',
                    end:'2024-09-08',
                    'status':'ACTIVE' },
    
            failOnStatusCode: false
            }).its('body').should('be.an', 'array').and('be.empty');
            //.then(response =>{ expect(response.status).to.be.equal(200);});
             
            })
            
        
    })
