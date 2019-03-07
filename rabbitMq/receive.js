const amqp = require('amqplib/callback_api');
class RabbitMq {
    constructor(options) {
        this.url=''
      this.ex = 'XXX'
      this.exType = 'direct'
      this.durable = true
      this.routeKey = 'XX'
      this.autoDelete = true
      this.q = 'hello'
    }
  
    async send() {
      const conn = await amqp.connect(url)
  
      try {
        const ch = await conn.createChannel()
        // 确认消息发送 ok
        const res = await ch.assertExchange(this.ex, this.exType, { durable: this.durable })
        // 此处 q 置空，用的是rabbitmq自动生成的队列名, exclusive 是生成排他队列, 连接断开后就会自动删除
        const q = await ch.assertQueue('', { exclusive: false })
  
        console.log('==q=', q)
        // 队列绑定 exchange
        ch.bindQueue(q.queue, this.ex, this.routeKey)
  
        ch.consume(q.queue, msg => {
          console.log('收到消息: ', msg)
           // 发送确认消息
          ch.ack(msg)
        }, { noAck: false })
  
        // ch.close()
      } catch (e) {
        console.log('==e==', e)
        ch.close()
      }
    }
  }
  

  module.exports = new RabbitMq({})
