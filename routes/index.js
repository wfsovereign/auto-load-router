var R = require('koa-router');
var fs = require('fs');
var path = require('path');
var config = require(rootDir + '/configs');
var debug = require('debug')('wfsovereign-routes-index');
var isReady = false;
var routerCache = [];

module.exports = function () {
  if (isReady) return routerCache;
  isReady = true;
  var router = [], routes = [], routerPrefix = config.router.prefix;

  var routersName = Object.keys(routerPrefix);
  routersName.forEach(ele => {
    router.push(new R({prefix: routerPrefix[ele]}));
    routes.push(fs.readdirSync(path.join(__dirname, ele)));
  });
  routersName.forEach((ele, index) => {
    loadRouter(routes[index], router[index], ele);
  });

  routerCache = router;

  return router;
};

function loadRouter(routes, router, middle) {
  routes.forEach((file) => {
    var currentPath = path.join(__dirname, middle, file);
    if (currentPath.indexOf('.') > 0) require(currentPath)(router);
    else loadRouter(fs.readdirSync(currentPath), router, (middle + '/' + file));
  });
}
