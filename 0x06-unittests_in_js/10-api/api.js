const express = require('express');

const app = express();
const port = 7865;
app.use(express.json());

app.get('/cart/:id(\\d+)', (request, response) => {
  const id = request.params.id;
  const responseText = `Payment methods for cart :${id}`;
  response.setHeader('Content-Type', 'text/plain');
  response.setHeader('Content-Length', responseText.length);
  response.statusCode = 200;
  response.write(Buffer.from(responseText));
});


app.get('/available_payments', (_, response) => {
  const responseObject = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  };
  response.statusCode = 200;
  response.json(responseObject);
});


app.post('/login', (request, response) => {
  let userName = '';
  if (request.body) {
    userName  = request.body.userName;;
  }
  response.statusCode = 200;
  response.send(`Welcome ${userName}`);
});

app.get('/', (_, response) => {
  const responseText = 'Welcome to the payment system';
  response.setHeader('Content-Type', 'text/plain');
  response.setHeader('Content-Length', responseText.length);
  response.statusCode = 200;
  response.write(Buffer.from(responseText));
});

if(!module.parent){
  app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`),
  );
}

module.exports = app;
