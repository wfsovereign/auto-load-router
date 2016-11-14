var cors = require('koa-cors');

module.exports = function (access) {
  return cors(access || {
      'origin': '*',
      'headers': 'access,content-type,x-auth-token'
    });
};
