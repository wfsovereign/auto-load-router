const Order = require('../../controller/web/order');

module.exports = function (R) {
  R.get('/orders', Order.list);
};
