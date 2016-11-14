var koa = require('koa');
var debug = require('debug')('wfsovereign-server');

function Server(option) {
  this.opts = option || {
      keys: {
        main: 'wfsovereign'
      }
    };
}

Server.prototype = koa();

Server.prototype.start = function () {
  var port = process.env.PORT || this.opts.port || 3000;
  this.keys = [this.opts.keys.main];
  this.proxy = true;
  this.use(function *(next) {
    var start = new Date;
    yield next;
    var ms = new Date - start;
    this.set('X-Response-Time', ms + 'ms');
  });

  this.use(function *(next) {
    var start = new Date;
    yield next;
    var ms = new Date - start;
    console.log('%s %s - %s', this.method, this.url, ms);
  });

  this.use(function *() {
    this.body = 'Hello World';
  });

  this.listen(port, function () {
    debug('server start up in ' + (port));
  });
};

Server.prototype.errHandle = function (callback) {
  process.on('uncaughtException', callback);
  process.on('exception', callback);
  process.on('Exception', callback);
  process.on('ReferenceError', callback);
  process.on('ENOENT', callback);
  process.on('error', callback)
};

module.exports = Server;
