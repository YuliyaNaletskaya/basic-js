const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date) || isNaN(date.getTime()) || Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error('Invalid date!');
  }

  const dateMethods = ['getTime', 'getFullYear', 'getMonth', 'getDate', 'getHours', 'getMinutes', 'getSeconds', 'getMilliseconds'];
  for (const method of dateMethods) {
    if (typeof date[method] !== 'function') {
      throw new Error('Invalid date!');
    }
  }

  let season;
  if (date.getMonth() >= 2 && date.getMonth() < 5) {
    season = 'spring';
  } else if (date.getMonth() >= 5 && date.getMonth() < 8) {
    season = 'summer';
  } else if (date.getMonth() >= 8 && date.getMonth() < 11) {
    season = 'autumn';
  } else {
    season = 'winter';
  } 
  return season;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
