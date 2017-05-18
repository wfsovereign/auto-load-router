process.env.DEBUG = 'wfsovereign-*';
const should = require('should'), request = require('supertest')('http://127.0.0.1:3000');

describe('wechat notification interface', () => {

  it('should return notification number', (done) => {
    request.get('/api/wx/notification/counts')
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
