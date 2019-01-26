const Koa = require('koa2');
const app = new Koa();
const router = require('./router.js')
const view = require('./middleware/view.js')

view(app)
router(app)

app.listen(8089, () => {
    console.log('starting at port 8089');
});