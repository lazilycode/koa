const path = require('path')
const views = require('koa-views')
const static = require('koa-static')

module.exports = (app) => {
    app.use(views(path.join(__dirname, './views'), {
        extension: 'ejs'
    }))
    app.use(static(
        path.join(__dirname, './static')
    ))
}
