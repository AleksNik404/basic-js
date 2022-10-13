const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let heh = '';
  count = 0;
  [...str].forEach((el, index, arr) => {
    if (arr[index + 1] == el) count++;
    else if (count == 0) heh += el;
    else {
      heh += `${count + 1}${el}`;
      count = 0;
    }
  });

  return heh;
}
// encodeLine('aaaatttt'); //, '4a4t'));
// console.log(encodeLine('aaaatttt')); //, '4a4t'));
// console.log(encodeLine('aabbccc')); //, '2a2b3c'));
// console.log(encodeLine('abbcca')); //, 'a2b2ca'))/;
// console.log(encodeLine('xyz')); //, 'xyz')//);
// console.log(encodeLine('')); //, ''));

module.exports = {
  encodeLine,
};
