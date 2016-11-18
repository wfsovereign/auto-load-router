process.env.DEBUG = 'wfsovereign-*';
var should = require('should'), request = require('supertest')('http://127.0.0.1:3000');

describe('admin user interface', () => {

  it('should return user list data', (done) => {
    request.get('/api/admin/users')
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
