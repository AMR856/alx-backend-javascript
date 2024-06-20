const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');


describe('Testing the Utils as you can see', function () {
  it("I'm checking something but ain't gonna lie I don't understand so much", function() {
    const mySpy = sinon.spy(Utils);
    sendPaymentRequestToApi(100, 20);
    expect(mySpy.calculateNumber.calledWith(100, 20, 'SUM')).to.be.true;
    expect(mySpy.calculateNumber.calledOnce).to.be.true;
    mySpy.calculateNumber.restore();
  });
});
