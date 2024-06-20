const request = require('request');
// const sinon = require('sinon');
const { expect } = require('chai');
const url = `http://localhost:7865`;


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
