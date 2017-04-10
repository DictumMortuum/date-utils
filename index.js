'use strict';

module.exports = {
  startOfDay: function(d) {
    let t = new Date(d);
    t.setHours(0, 0, 0, 0);
    return t;
  },
  endOfDay: function(d) {
    let t = new Date(d);
    t.setHours(23, 59, 59, 999);
    return t;
  },
  daysAgo: function(d, n) {
    let t = new Date(d);
    t.setDate(d.getDate() - (n || 30));
    return t;
  },
  aDay: function() {
    return 24*60*60*1000;
  },
  timeSince: function(d) {
    // http://stackoverflow.com/a/3177838
    var seconds = Math.floor((new Date() - d) / 1000);
    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
      return interval + ' years';
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + ' months';
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + ' days';
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + ' hours';
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + ' minutes';
    }
    return Math.floor(seconds) + ' seconds';
  }
};
