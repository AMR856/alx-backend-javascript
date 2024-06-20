const express = require('express');


const app = express();
const port = 7865;

app.get('/', (_, response) => {
  const responseText = 'Welcome to the payment system';
  response.setHeader('Content-Type', 'text/plain');
  response.setHeader('Content-Length', responseText.length);
  response.statusCode = 200;
  response.write(Buffer.from(responseText));
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = port;