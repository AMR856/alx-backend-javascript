const sinon = require('sinon');
const { expect } = require('chai');
// const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('What is going on here', function() {
  let consoleSpy;

  beforeEach(function() {
    if (!consoleSpy)
      consoleSpy = sinon.spy(console);
  });

  afterEach(function() {
    consoleSpy.log.resetHistory();
    // consoleSpy.restore();
  });

  it("Let's test the console now", function() {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.log.calledWith('The total is: 120')).to.be.true;
    expect(consoleSpy.log.calledOnce).to.be.true;
  });

  it('You thought you could defeat me', function() {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.log.calledWith('The total is: 20')).to.be.true;
    expect(consoleSpy.log.calledOnce).to.be.true;
  });
});
