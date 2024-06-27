const request = require('request');
// const sinon = require('sinon');
const { expect } = require('chai');
const { response } = require('./api');
const url = `http://localhost:7865`;

const responseObject = {
  payment_methods: {
    credit_cards: true,
    paypal: false
  }
};

describe("Look here I'm testing the server I guess", function()
{
  it('The test is here as you can see', function(done) {
    request.get(url, function(_, response, body)  {
      expect(response.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});

describe("I think now I'm testing something new", function () {
  it('Let the test be normal at the beginning', function(done) {
    const url = 'http://localhost:7865/cart/12';
    request.get(url, function(_, response, body) {
      expect(response.statusCode).to.be.equal(200);
      expect(body).to.be.equal(`Payment methods for cart :12`);
      done();
    });
  });

  it('Let the other test be a failuer', function(done) {
    const url = 'http://localhost:7865/cart/Amr';
    request.get(url, function(_, response, _) {
      expect(response.statusCode).to.be.equal(404);
      done();
    });
  });

  it('I think failure is just the answer', function(done) {
    const url = 'http://localhost:7865/cart/-50';
    request.get(url, function(_, response, _) {
      expect(response.statusCode).to.be.equal(404);
      done();      
    });
  });

  it('Have you thought before about adding a digit', function(done) {
    const url = 'http://localhost:7865/cart/5.0';
    request.get(url, function(_, response, _) {
      expect(response.statusCode).to.be.equal(404);
      done();            
    });
  });
});

describe("I'm testing the avaiable_payments endpoint", () => {
  it('Let take the simple example here', function(done) {
    const url = 'http://localhost:7865/available_payments';
    request.get(url, function(_, response, body) {
      expect(response.statusCode).to.be.equal(200);
      expect(JSON.parse(body)).to.be.deep.equal(responseObject);
      done();
    });
  });

  it("There are only two test cases as you can see", function(done) {
    const url = 'http://localhost:7865/avaiable_payment';
    request.get(url, function(_, response, _) {
      expect(response.statusCode).to.be.equal(404);
      done();
    });
  });
});

describe("I'm testing something else now", () => {
  it('Let test the last test using the testing endpoint test', function(done) {
    request.post(`http://localhost:7865/login`, {json: {userName: 'Pinkbrook'}}, (_, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Pinkbrook');
      done();
    });
  });
});
