

const mqsend =require("../rabbitMq/send")
const mqreceive =require("../rabbitMq/receive")


console.log(mqsend)
class home {
  async index(ctx, next) {
    const { app } = ctx;
    // let result = await app.service.home.testMysql();
    // console.log(result, 999);
    await ctx.render("home/index", { title: "iKcamp欢迎您" });
  }

  // insert 用户注册插入数据
  async insert(ctx, next) {
    const { app } = ctx;
    let result = await app.service.home.testInsert();
    console.log(result, 999);
  }

  async websocket(ctx, next) {
    const { app } = ctx;
    await ctx.render("home/websocket", { title: "iKcamp欢迎您" });
  }
  async uploadFiles(ctx, next) {
    const { app } = ctx;
    let result = await app.service.home.upload(ctx);
  }

  async send(ctx, next) {
    let mes=null
  
    mqsend.sendQueueMsg("testQueue", "my first message", error => {
      mes=error
       console.log(error,9999)
    });
    await ctx.render("home/index", { title: mes});
  }

  async receive(ctx, next) {
    let mes=null
   
    mqreceive.receiveQueueMsg("testQueue", msg => {
      mes=msg
      console.log(msg,99900000);
    }); 
    await ctx.render("home/index", { title: mes});
  }
}

module.exports = new home();
