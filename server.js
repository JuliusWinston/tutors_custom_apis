const http = require('http')
const { sendSignupEmail } = require('./src/controllers/EmailController')

const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 4000

const server = http.createServer((req, res) => {
  if(req.url === '/api/send-email' && req.method === "POST") {
    sendSignupEmail(req, res)
  } else {
    res.writeHead(404, {'Content-Type': 'application/json'})
    res.end({'message': 'Resource not found!'})
  }
})

server.listen(PORT, () => {
  console.log(`Server running on http://${HOST}:${PORT}`)
})