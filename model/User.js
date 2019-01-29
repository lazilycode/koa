var Sequelize = require("sequelize");
var sequelize = require('../config/database.js').sequelize;

exports.User = sequelize.define('test',{
    name:{type:Sequelize.STRING},
},{
    freezeTableName:true,
    timestamps:false
});