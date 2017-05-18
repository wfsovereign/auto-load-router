process.env.DEBUG = 'wfsovereign-*';
const should = require('should'), request = require('supertest')('http://127.0.0.1:3000');

describe('web order interface', () => {

  it('should return order list data', (done) => {
    request.get('/api/web/orders')
      .expect(200)
      .end((error, response) => {
        if (error) {
          done(error);
          throw error;
        }
        should(response.body).be.a.Array();
        done();
      });
  });
});
