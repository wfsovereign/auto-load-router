process.env.DEBUG = 'wfsovereign-*';
var debug = require('debug')('wfsovereign-app');
var koa = require('koa');

var app = koa();

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
});

// logger

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

// response

app.use(function *(){
  this.body = 'Hello World';
});

app.listen(3000, () => {
  console.log('server success start, listen 3000');
});

