process.env.DEBUG = 'wfsovereign-*';
global.rootDir = __dirname;

const config = require('./configs/index');
const Server = require('./server');
const server = new Server(config);
const debug = require('debug')('wfsovereign-app');

server.start();

server.errHandle(function (err) {
  debug(err);
});

module.exports = server.start;

