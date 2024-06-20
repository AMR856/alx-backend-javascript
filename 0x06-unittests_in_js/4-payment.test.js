const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');


describe('Testing the Utils as you can see', function () {
  it("I'm checking something but ain't gonna lie I don't understand so much", function() {
    const consoleSpy = sinon.spy(console);
    const stubbing = sinon.stub(Utils, 'calculateNumber').returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(stubbing.calledWith(100, 20, 'SUM')).to.be.true;
    expect(stubbing.calledOnce).to.be.true;
    expect(consoleSpy.log.calledWith('The total is: 10')).to.be.true;
    expect(consoleSpy.log.calledOnce).to.be.true;
    consoleSpy.log.restore();
    stubbing.restore();
  });
});
