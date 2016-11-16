process.env.DEBUG = 'wfsovereign-*';
global.rootDir = __dirname;

var config = require('./configs/index');
var Server = require('./server');
var server = new Server(config);
var debug = require('debug')('wfsovereign-app');

server.start();

server.errHandle(function (err) {
  debug(err);
});

module.exports = server.start;

