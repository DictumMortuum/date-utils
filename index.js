'use strict';

const startOfDay = d => {
  d.setHours(0, 0, 0, 0);
  return d;
};

const endOfDay = d => {
  d.setHours(23, 59, 59, 999);
  return d;
};

const daysAgo = (d, n)=> {
  d.setDate(d.getDate() - (n || 30));
  return d;
};

module.exports = {
  startOfDay,
  endOfDay,
  daysAgo
};
