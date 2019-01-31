module.exports = {
  index: async(ctx, next) => {
    const { app } = ctx
    let result= await app.service.home.testMysql()
    console.log(result,999)
    await ctx.render("home/index", {title: "iKcamp欢迎您"})
  },

  // insert 用户注册插入数据
  async insert(ctx, next){
    const { app } = ctx
    let result= await app.service.home.testInsert()
    console.log(result,999)
  },

  async websocket(ctx, next){
    const { app } = ctx
    await ctx.render("home/websocket", {title: "iKcamp欢迎您"})
  },
  async uploadFiles(ctx, next){
    const { app } = ctx
    let result= await app.service.home.upload(ctx)
   
  }
}