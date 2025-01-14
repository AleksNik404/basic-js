const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;

  [...s1].forEach((char) => {
    if (s2.includes(char)) {
      s2 = s2.replace(char, '');
      count++;
    }
  });

  return count;
}
// console.log(); //

// console.log(getCommonCharacterCount('aabcc', 'adcaa')); //, 3);
// console.log(getCommonCharacterCount('zzzz', 'zzzzzzz')); //, 4);
// console.log(getCommonCharacterCount('abca', 'xyzbac')); //, 3);
// console.log(getCommonCharacterCount('', 'abc')); //, 0);
// console.log(getCommonCharacterCount('a', 'b')); //, 0);

module.exports = {
  getCommonCharacterCount,
};
