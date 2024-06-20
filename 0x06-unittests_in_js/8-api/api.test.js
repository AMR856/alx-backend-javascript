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
