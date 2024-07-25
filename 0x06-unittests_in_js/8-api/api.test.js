const request = require('request');
const { expect } = require('chai');
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
});
