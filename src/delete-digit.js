const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(number) {
  let variationsNum = [];
  let numberStr = String(number);

  for (let i = 0; i < numberStr.length; i++) {
    variant = numberStr.slice(0, i) + numberStr.slice(i + 1);
    variationsNum.push(variant);
  }

  let maxVariant = Math.max(...variationsNum);

  return maxVariant;
}

// console.log(deleteDigit(152)); //, 52);
// console.log(deleteDigit(1001)); //, 101);
// console.log(deleteDigit(10)); //, 1);
// console.log(deleteDigit(222219)); //, 22229);
// console.log(deleteDigit(109)); //, 19);
// console.log(deleteDigit(342)); //, 42);

module.exports = {
  deleteDigit,
};
