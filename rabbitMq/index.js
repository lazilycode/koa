
module.exports = app => {
  app.amqp.use(conn => {
    conn.createChannel(on_open);
    function on_open(err, ch) {
      if (err != null) bail(err);
      ch.assertQueue(topic);
      ch.sendToQueue(topic, new Buffer("something to do"));
    }
  });
  app.amqp.use(conn => {
    var ok = conn.createChannel(on_open);
    function on_open(err, ch) {
      if (err != null) bail(err);
      ch.assertQueue(topic);
      ch.consume(topic, function(msg) {
        if (msg !== null) {
          console.log("consumer", msg.content.toString());
          ch.ack(msg);
        }
      });
    }
  });
};
