const http = require('http')
const WebSocket = require('ws')

const server = new http.createServer()
const wss = new WebSocket.Server({
	server
})

wss.on('connection', function connection(ws) {
	ws.on('message', function incoming(message) {
		// console.log('received: %s', message)
		if (message === 'getAll') {
			let allTtems = {
				Item: [
					{
						name: '张三',
						hear_img: './img/1.jpg'
					},
					{
						name: '222',
						hear_img: './img/2.jpg'
					},
					{
						name: '333',
						hear_img: './img/3.jpeg'
					},
					{
						name: '444',
						hear_img: './img/4.jpg'
					},
					{
						name: '555',
						hear_img: './img/5.jpg'
					},
					{
						name: '666',
						hear_img: './img/6.jpg'
					},
					{
						name: '777',
						hear_img: './img/7.jpg'
					},
					{
						name: '888',
						hear_img: './img/8.png'
					}
				]
			}
			ws.send(JSON.stringify(allTtems))
		} else if (message === 'HeartBeat') {
			ws.send('HeartBeat')
			var runtimes = 0
			runtimes++
			ws.send(
				JSON.stringify({
					add: {
						name: 'runtimes' + runtimes,
						hear_img: './img/8.png'
					}
				})
			)
		} else {
			console.log('received: %s', message)
		}
	})
	console.log('新的连接')
})

server.listen(8080)
