const http = require('http');

const server = http.createServer(function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('HELLO WORLD');
});

server.listen(8888, function() {
  console.log('Server running at http://localhost:8888');
});
