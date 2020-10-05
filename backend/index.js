const http = require('http')
const app = require('./app')

const PORT = 3001

const server = http.createServer(app)

server.listen(PORT,()=>{
    console.log('server is live on',PORT)
})