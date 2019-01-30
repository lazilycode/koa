var User = require("../model/User.js");
module.exports = {
  testMysql:async function () {
    return await User.findOne().get('firstName')
  },
};
