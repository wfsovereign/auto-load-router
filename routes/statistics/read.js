const Read = require('../../controller/statistics/read');

module.exports = function (R) {
  R.get('/article/pv', Read.allArticlePV);
};
