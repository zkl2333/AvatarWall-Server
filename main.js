const Koa = require('koa2')
const app = new Koa()

app.use(async ctx => {
	ctx.body = 'Hello World'
})

app.listen(3000)