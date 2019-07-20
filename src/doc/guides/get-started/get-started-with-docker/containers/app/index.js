const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('HELLO WORLD\n');
});

server.listen(8888, () => {
  console.log('Server running at http://localhost:8888');
});
