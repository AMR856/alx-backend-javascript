const Utils = require('./utils')

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  theReturnedValue = Utils.calculateNumber(totalAmount, totalShipping, 'SUM');
  console.log(`The total is: ${theReturnedValue}`);
}

module.exports = sendPaymentRequestToApi;
