// test cases goes here
var chai = require('chai');
var expect  = chai.expect;
const server = require('../server.js');
var supertest = require('supertest'),
 api = supertest('http://localhost:3000');
describe('Hitting test api', () => {
  it('test login api ', (done) => {
	    api.get('/test')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
            done();
        });
  });
  it('test signup api ', (done) => {
	    api.get('/test')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
            done();
        });
  });
    it('test create user api ', (done) => {
	    api.get('/test')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
            done();
        });
  });
    it('test update user api ', (done) => {
	    api.get('/test')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
            done();
        });
  });
    it('test delete user api', (done) => {
	    api.get('/test')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
            done();
        });
  });

  });