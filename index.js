'use strict';

const startOfDay = d => {
  let t = new Date(d);
  t.setHours(0, 0, 0, 0);
  return t;
};

const endOfDay = d => {
  let t = new Date(d);
  t.setHours(23, 59, 59, 999);
  return t;
};

const daysAgo = (d, n)=> {
  let t = new Date(d);
  t.setDate(d.getDate() - (n || 30));
  return t;
};

module.exports = {
  startOfDay,
  endOfDay,
  daysAgo
};
