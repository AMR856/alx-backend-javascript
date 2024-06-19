const express = require('express')
const app = express()
const port = 1245

app.get('/', (_, response) => {
  const responseText = 'Hello Holberton School!';
  response.setHeader('Content-Type', 'text/plain');
  response.setHeader('Content-Length', responseText.length);
  response.statusCode = 200;
  response.write(Buffer.from(responseText));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})