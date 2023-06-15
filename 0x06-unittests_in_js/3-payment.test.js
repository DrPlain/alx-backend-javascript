const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const sinon = require('sinon');
const chai = require('chai');
const { expect } = chai;

describe('sendPaymentRequestToApi', function () {
  it('Validate the usage of the Utils function', function () {
    const calculateNumberSpy = sinon.spy(Utils.calculateNumber);

    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
    expect(calculateNumberSpy.callCount).to.equal(1);
  });
});
