var User = require("../model/User.js");
const fs = require('fs')
module.exports = {
  testMysql:async function () {
    return await User.findOne().get('firstName')
  },
  
  // 用户插入数据
  async testInsert(){
    await User.create({
      name: 'XiaoMing',
      password: '1234567890',
      mail: 'xiaoming@qq.com'
    }).then(function(result){
          console.log('inserted XiaoMing ok');
    }).catch(function(err){
          console.log('inserted XiaoMing error');
          console.log(err.message);
    });
  },
  async upload(ctx){
    console.log(ctx.request.files);
    console.log(ctx.request.body);
    ctx.body = JSON.stringify(ctx.request.files);
    }
};
