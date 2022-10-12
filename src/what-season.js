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
  if (!arguments.length) return 'Unable to determine the time of year!';
  if (date.hasOwnProperty('getMonth')) throw new Error('Invalid date!');

  try {
    const month = date.getMonth();
    const seasons = {
      spring: [2, 3, 4],
      summer: [5, 6, 7],
      autumn: [8, 9, 10],
      winter: [11, 0, 1],
    };

    for (let [season, monthNumber] of Object.entries(seasons)) {
      if (monthNumber.includes(month)) return season;
    }
  } catch (err) {
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason,
};
