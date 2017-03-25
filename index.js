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
  }
};
