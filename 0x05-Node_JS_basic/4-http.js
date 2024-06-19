const http = require('http');

const PORT = 1245;

const app = http.createServer((_, response) => {
  const responseText = 'Hello Holberton School!';
  response.setHeader('Content-Type', 'text/plain');
  response.setHeader('Content-Length', responseText.length);
  response.statusCode = 200;
  response.write(Buffer.from(responseText));
}).listen(PORT);

module.exports = app;
