const express = require('express')
const app = express()
const port = 1245

app.get('/', (_, response) => {
  const responseText = 'Hello Holberton School!';
  response.send(responseText);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})