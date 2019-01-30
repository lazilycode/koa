module.exports = {
  index: async(ctx, next) => {
    const { app } = ctx
    // app.body='jjjj'
    // await ctx.render("home/index", {title: "iKcamp欢迎您"})
    let result= await app.service.home.testMysql()
    console.log(result,999)
  }
}