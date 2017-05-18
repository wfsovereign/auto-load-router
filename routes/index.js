const R = require('koa-router');
const fs = require('fs');
const path = require('path');
const config = require(rootDir + '/configs');
const debug = require('debug')('wfsovereign-routes-index');
let routerCache = [];
let isReady = false;

module.exports = function () {
  if (isReady) return routerCache;
  isReady = true;
  const router = [], routes = [], routerPrefix = config.router.prefix;

  const routersName = Object.keys(routerPrefix);
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
    const currentPath = path.join(__dirname, middle, file);
    if (currentPath.indexOf('.') > 0) require(currentPath)(router);
    else loadRouter(fs.readdirSync(currentPath), router, (middle + '/' + file));
  });
}
