const Koa = require('koa')
const WebSocket = require("koa-websocket");
const app = WebSocket(new Koa());


const router = require('./router')
const middleware = require('./middleware')
const websocket=require('./websocket/index.js')
const upload = require('./upload/home.js')

upload(app)
websocket(app)
middleware(app)
router(app)
app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})