describe('登录接口', () => {
    it("登录接口", () => {
      cy.request({
        method: "POST",
        url: "https://console-qa.roomis.com.cn/oauth2/token",
        body: {
          "userName": "nancy",
          "password": "a12345678"
        }
      }).then(response =>{
        expect(response.status).to.be.equal(200)})
      // .its('body.token_type').should('contain', 'bearer')
      .its('body.access_token').as('access_token')
      .then(function(){
        cy.log(this.access_token)
        cy.request({
            method: "GET",
            url: "https://qa-api.roomis.com.cn/api/userinfo",
            headers:{"Content-Type":"application/json","authorization":this.access_token}
        }).its('body.uid').should('contain','nancy')
      });
      
    });
  });