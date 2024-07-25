const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('wait for Successful response from the API', (done) => {
    getPaymentTokenFromAPI(true).then((data) => {
      assert.deepStrictEqual(data, { data: 'Successful response from the API' });
      done();
    });
  });
});
