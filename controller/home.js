const amqp = require("amqplib/callback_api");
class home {
  async index(ctx, next) {
    const { app } = ctx;
    let result = await app.service.home.testMysql();
    console.log(result, 999);
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
    amqp.connect("amqp://localhost", function(err, conn) {
      conn.createChannel(function(err, ch) {
        var q = "hello";
        var msg = "Hello World!";

        ch.assertQueue(q, { durable: false });
        ch.sendToQueue(q, Buffer.from(msg));
       
        console.log(" [x] Sent %s", msg);
      })
      setTimeout(function() {
        conn.close();
        process.exit(0);
      }, 500);
    });
  }

  async receive(ctx, next) {
    amqp.connect("amqp://localhost", function(err, conn) {
      conn.createChannel(function(err, ch) {
        var q = "hello";

        ch.assertQueue(q, { durable: false });
        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
        ch.consume(
          q,
          function(msg) {
            console.log(" [x] Received %s", msg.content.toString());
           
          },
          { noAck: true }
        );
      });
    });
  }
}

module.exports = new home();
