const request = require('request');
const chai = require('chai');
const { expect } = chai;

describe('Index Page', () => {
  it('GET / returns correct response', (done) => {
    request.get('http://localhost:7865', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(res.body).to.equal('Welcome to the payment system');
      done();
    });
  });
  it('GET /cart/:id returns correct response', (done) => {
    request.get('http://localhost:7865/cart/12', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(res.body).to.equal('Payment methods for cart 12');
      done();
    });
  });
});
