const Koa = require('koa2')
const views = require('koa-views')
const path = require('path')
const static = require('koa-static'); 

 
const app = new Koa()

app.use(static(
  path.join( __dirname,  './views/dist')
))

// 定位模板文件目录，并选择模板引擎
app.use(views(path.join(__dirname, './views/dist'), {
  extension: 'html'
})) 

app.use( async ( ctx ) => {
  let title = 'hello koa2'
  await ctx.render('index')
})

app.listen(3001,()=>{
    console.log('[demo] server is starting at port 3000');
})