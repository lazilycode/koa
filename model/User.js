var Sequelize = require("sequelize");
var sequelize = require('../config/database.js').sequelize;
const { STRING, INTEGER, DATE } = Sequelize;

let User={}
User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});
// User.sync({force: true}).then(() => {
//   // 表已创建
//   return User.create({
//     firstName: 'John',
//     lastName: 'Hancock'
//   });
// });

  module.exports=User
