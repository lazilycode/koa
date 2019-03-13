const mqsend = require("../rabbitMq/send");
const mqreceive = require("../rabbitMq/receive");
module.exports = (app)  => {
  app.ws.use((ctx, next) => {
    ctx.websocket.on("message", message => {
      console.log(message);
      
      mqsend.sendQueueMsg("testQueue", message, error => {
        console.log(error, 9999);
      });

      mqreceive.receiveQueueMsg("testQueue", msg => {
        ctx.websocket.send(msg);
      }); 
    });
  });
};
