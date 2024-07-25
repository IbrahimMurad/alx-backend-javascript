const request = require('request');
const { expect } = require('chai/index.js');
const sinon = require('sinon');

describe('index page', () => {
  it('status code 200', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it('body message', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
  it('NotFound', (done) => {
    request.get('http://localhost:7865/blah', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
  it('content-length', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(response.headers['content-length']).to.equal('29');
      done();
    });
  });
  it('Content-Type', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(response.headers['content-type']).to.equal('text/html; charset=utf-8');
      done();
    });
  });
  it('the url', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(response.request.uri.href).to.equal('http://localhost:7865/');
      done();
    });
  });
});

describe('cart page', () => {
  it('status code 200', (done) => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it('body message', (done) => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });
  it('NotFound', (done) => {
    request.get('http://localhost:7865/cart/blah', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
  it('content-length', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.headers['content-length']).to.equal('27');
      done();
    });
  });
  it('Content-Type', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.headers['content-type']).to.equal('text/html; charset=utf-8');
      done();
    });
  });
  it('the url', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.request.uri.href).to.equal('http://localhost:7865/cart/12');
      done();
    });
  });
});

describe('available payments', () => {
  it('status code 200', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it('body message', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      expect(body).to.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
      done();
    });
  });
  it('response type', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response).to.be.an('object');
      done();
    });
  });
  it('response value', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      expect(JSON.parse(body)).to.deep.equal({ payment_methods: { credit_cards: true, paypal: false } });
      done();
    });
  });
  it('content-length', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response.headers['content-length']).to.equal('56');
      done();
    });
  });
  it('Content-Type', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
      done();
    });
  });
  it('the url', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response.request.uri.href).to.equal('http://localhost:7865/available_payments');
      done();
    });
  });
});

describe('login', () => {
  const options = {
    url: 'http://localhost:7865/login',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userName: 'Betty' }),
  };
  it('status code 200', (done) => {
    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it('body message', (done) => {
    request(options, (error, response, body) => {
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
  it('content-length', (done) => {
    request(options, (error, response, body) => {
      expect(response.headers['content-length']).to.equal('13');
      done();
    });
  });
  it('Content-Type', (done) => {
    request(options, (error, response, body) => {
      expect(response.headers['content-type']).to.equal('text/html; charset=utf-8');
      done();
    });
  });
  it('the url', (done) => {
    request(options, (error, response, body) => {
      expect(response.request.uri.href).to.equal('http://localhost:7865/login');
      done();
    });
  });
  it('the method', (done) => {
    request(options, (error, response, body) => {
      expect(response.request.method).to.equal('POST');
      done();
    });
  });
});
