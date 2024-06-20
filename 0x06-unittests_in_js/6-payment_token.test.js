// const sinon = require('sinon');
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe("Do you think testing promises is easy?", function() {
  it("Imma test the true condition here ain't gonna lie", function(done) {
    getPaymentTokenFromAPI(true)
    .then((result) => {
      expect(result).to.deep.equal({data: 'Successful response from the API'});
      done();
    })
    .catch((error) => {
      console.log(error);
    });
  });
});