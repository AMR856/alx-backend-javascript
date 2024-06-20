const request = require('request');
const port = require('./api');
// const sinon = require('sinon');
const { expect } = require('chai');
const url = `http://localhost:${port}`;

// function (error, response, body)
describe("Look here I'm testing the server I guess", function(){
  it('The test is here as you can see', function(done) {
    request.get(url, function(_, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
