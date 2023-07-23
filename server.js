const http = require('http')

const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 5000

const server = http.createServer((req, res) => {
  if(req.url === '/send-email' && req.method === "POST") {
    
  } else {
    res.writeHead(404, {'Content-Type': 'application/json'})
    res.end({'message': 'Resource not found!'})
  }
})

server.listen(PORT, () => {
  console.log(`Server running on http://${HOST}:${PORT}`)
})