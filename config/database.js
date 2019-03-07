const Sequelize = require('sequelize');
const amqp = require('amqplib/callback_api');
const sequelize = new Sequelize('my', 'root', '0000', {
    host: '192.168.1.11',
    dialect: 'mysql',
    operatorsAliases: false,
    dialectOptions: {
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci",
        supportBigNumbers: true,
        bigNumberStrings: true
    },

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    timezone: '+08:00' //东八时区
});


const conn =amqp.connect("amqp://localhost",(err, conn)=>{
    return conn
})

module.exports = {
    sequelize,
    conn
}
