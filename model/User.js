var Sequelize = require("sequelize");
var sequelize = require('../config/database.js').sequelize;
const { STRING, INTEGER, DATE } = Sequelize;

let User={}
User = sequelize.define('user', {
  name: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  mail: {
    type: Sequelize.STRING
  }
});

// User.sync({force: true}).then(() => {
//   // // 表已创建
//   // name: 'XiaoMing',
//   //   password: '1234567890',
//   //   mail: 'xiaoming@qq.com'

//   return User.create({
//     firstName: 'John',
//     lastName: 'Hancock'
//   });
// });

  module.exports=User
