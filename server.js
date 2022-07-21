const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    // res.send('<h1>Hello World</h1>')
})

server.listen(8000, () => {
    console.log('listening on *:8000')
})
