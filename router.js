const router = require('koa-router')()
const koaBody = require('koa-body')
module.exports = (app) => {
  router.get( '/', app.controller.home.index )
  router.get( '/insert', app.controller.home.insert )
  router.get( '/websocket', app.controller.home.websocket )
  router.post('/uploadFiles',koaBody({ jsonLimit: '2mb', multipart: true }), app.controller.home.uploadFiles )
  
  router.get( '/send', app.controller.home.send )
  router.get( '/receive', app.controller.home.receive )
  // router.get('/home', app.controller.home.home)
  
  // router.get('/home/:id/:name', app.controller.home.homeParams)
  
  // router.get('/user', app.controller.home.login)
  
  // router.post('/user/register', app.controller.home.register)
  
  app.use(router.routes())
     .use(router.allowedMethods())
} 