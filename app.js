const http = require('http')
const WebSocket = require('ws')

const server = new http.createServer()
const wss = new WebSocket.Server({
	server
})

var runtimes = 7
wss.on('connection', function connection(ws) {
	ws.on('message', function incoming(message) {
		// console.log('received: %s', message)
		if (message === 'getAll') {
			let allTtems = {
				Item: [
					{
						id: 0,
						name: '张三',
						hear_img: './img/1.jpg'
					},
					{
						id: 1,
						name: '222',
						hear_img: './img/2.jpeg'
					},
					{
						id: 2,
						name: '333',
						hear_img: './img/3.jpeg'
					},
					{
						id: 3,
						name: '444',
						hear_img: './img/4.jpg'
					},
					{
						id: 4,
						name: '555',
						hear_img: './img/5.jpg'
					},
					{
						id: 5,
						name: '666',
						hear_img: './img/6.jpg'
					},
					{
						id: 6,
						name: '777',
						hear_img: './img/7.jpg'
					},
					{
						id: 7,
						name: '888',
						hear_img: './img/8.png'
					}
				]
			}
			ws.send(JSON.stringify(allTtems))
		} else if (message === 'HeartBeat') {
			ws.send('HeartBeat')
			runtimes++
			ws.send(
				JSON.stringify({
					add: {
						id: runtimes,
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
