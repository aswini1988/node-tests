var request = require('supertest');
var expect = require('expect');

var app = require('./server').app;

describe('Server', () => {
  describe('GET /', () => {
    it('should return Hello World response', (done) => {
      request(app)
      .get('/')
      .expect(404)
      .expect((res) => {
        expect(res.body).toInclude({
          error : 'Page not found.'
        });
      })
      .end(done);
    });
  });
  describe('GET /Users', () => {
    it('should return a user object', (done) => {
      request(app)
      .get('/users')
      .expect(200)
      .expect((res) => {
        expect(res.body).toInclude({
          name : 'Rahul',
          age : 27
        });
      })
      .end(done);
    });
  });
});
