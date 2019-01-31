module.exports = (app) => {
let ctxs = [];
app.ws.use((ctx, next) => {
  ctxs.push(ctx);
  ctx.websocket.on("message", (message) => {
      console.log(message);
      for(let i = 0; i < ctxs.length; i++) {
          if (ctx == ctxs[i]) continue;
          ctxs[i].websocket.send(message);
      }
  });
});
}