const http = require('http')
const WebSocket = require('ws')

const server = new http.createServer()
const wss = new WebSocket.Server({
	server
})

wss.on('connection', function connection(ws) {
	ws.on('message', function incoming(message) {
		console.log('received: %s', message)
	})

	ws.send('something')
})

server.listen(8080)