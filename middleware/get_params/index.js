module.exports = function *(next) {
  this.rBody = this.request.body;
  yield next;
};
