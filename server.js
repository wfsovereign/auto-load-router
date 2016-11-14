var koa = require('koa');
var middleware = require('./middleware');
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
  this.use(middleware.accessAllow());
  this.use(middleware.responseTime());
  this.use(middleware.bodyParser());
  this.use(middleware.logger());
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
