const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let cache = {};

  domains.forEach((el) => {
    //Reverse the string and add "." first char || 'info.epam.com' => '.com.epam.info'
    let reverse = `.` + el.split('.').reverse().join('.');

    while (reverse) {
      reverse in cache ? cache[reverse]++ : (cache[reverse] = 1);
      //slice part to last dot
      reverse = reverse.slice(0, reverse.lastIndexOf('.'));
    }
  });

  return cache;
}

module.exports = {
  getDNSStats,
};
// console.log();

// console.log(getDNSStats(['epam.com'])); //, { '.com': 1, '.com.epam': 1 });
// console.log(getDNSStats(['epam.com', 'info.epam.com'])); //, { '.com': 2, '.com.epam': 2, '.com.epam.info': 1 });
// console.log(getDNSStats([])); //, {});
