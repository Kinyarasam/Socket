const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)
const { isObject } = require('util')

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    // res.send('<h1>Hello World</h1>')
})

io.on('connection', (socket) => {
    console.log('a user connected')
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg)
    })
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
})

server.listen(8000, () => {
    console.log('listening on *:8000')
})
