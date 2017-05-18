process.env.DEBUG = 'wfsovereign-*';
const should = require('should'), request = require('supertest')('http://127.0.0.1:3000');

describe('statistics read interface', () => {

  it('should return read count', (done) => {
    request.get('/api/stat/article/pv')
      .expect(200)
      .end((error, response) => {
        if (error) {
          done(error);
          throw error;
        }
        should(response.body).be.a.Object();
        done();
      });
  });
});
