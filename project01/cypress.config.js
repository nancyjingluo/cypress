const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
  // 配置文件, 配置Cypress,比如增加默认URL,这将自动将cy.visit()和cy.request()命令与此baseUrl相联系。
   baseUrl : 'http://mobile.qa.roomis.com.cn'
  },
});
