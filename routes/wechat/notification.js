const Notification = require('../../controller/wechat/notification');

module.exports = function (R) {
  R.get('/notification/counts', Notification.getAllNotificationCount);
};
