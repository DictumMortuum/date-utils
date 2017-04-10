'use strict';

module.exports = {
  startOfDay: function(d) {
    var t = new Date(d);
    t.setHours(0, 0, 0, 0);
    return t;
  },
  endOfDay: function(d) {
    var t = new Date(d);
    t.setHours(23, 59, 59, 999);
    return t;
  },
  daysAgo: function(d, n) {
    var t = new Date(d);
    t.setDate(d.getDate() - (n || 30));
    return t;
  },
  aDay: function() {
    return 24*60*60*1000;
  },
  timeSince: function(d) {
    // http://stackoverflow.com/a/3177838

    function plural(i, item) {
      return i + ' ' + item + 's';
    }

    function singular(item) {
      return '1 ' + item;
    }

    var intervals = [31536000, 2592000, 86400, 3600, 60, 1];
    var formats = ['year', 'month', 'day', 'hour', 'minute', 'second'];
    var seconds = Math.floor((new Date() - d) / 1000);

    for (var i = 0; i < intervals.length; i++) {
      var interval = Math.floor(seconds / intervals[i]);
      if (interval == 1) {
        return singular(formats[i]);
      } else if (interval > 1) {
        return plural(interval, formats[i]);
      }
    }
  }
};
