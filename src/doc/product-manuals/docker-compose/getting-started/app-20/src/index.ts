import * as http from 'http';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('APP-20');
});

server.listen(80, () => {
  console.log('Server running at http://localhost:80');
});
