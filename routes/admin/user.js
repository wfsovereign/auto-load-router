var User = require('../../controller/admin/user');

module.exports = function (R) {
  R.get('/users', User.list);
};
