const jwt = require('jsonwebtoken')
const jwtKoa = require('koa-jwt')
const util = require('util')
const verify = util.promisify(jwt.verify) // 解密
const secret = 'jwt demo'

module.exports = (app)=>{
    app.use(jwtKoa({secret}).unless({
        path: [/^\/api\/login/] //数组中的路径不需要通过jwt验证
    }))
}