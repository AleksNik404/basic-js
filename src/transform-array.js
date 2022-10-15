const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error(`'arr' parameter must be an instance of the Array!`);

  const commands = '--discard-next --discard-prev --double-next --double-prev';

  const newArr = [...arr];
  for (let i = 0; i < arr.length; i++) {
    if (newArr[i] == '--discard-next' && i !== newArr.length - 1)
      newArr[i + 1] = false;
    if (newArr[i] == '--discard-prev' && i !== 0) newArr[i - 1] = false;

    if (newArr[i] == '--double-next' && i !== arr.length - 1)
      newArr.splice(i + 1, 0, newArr[i + 1]);

    if (newArr[i] == '--double-prev' && i !== 0) {
      newArr.splice(i - 1, 0, newArr[i - 1]);
      i++;
    }
  }

  return newArr.filter((el) => el !== false && !commands.includes(String(el)));
}

module.exports = {
  transform,
};
// console.log(transform([1]));
// console.log(transform(['--discard-prev', '1']));

// console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5])); // output: [1, 2, 3, 4, 5]

// console.log(transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5])); //  output: [1, 2, 3, 1337, 1337, 1337, 4, 5]

// console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5])); //  output: [1, 2, 3, 4, 5]

// console.log(transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5])); //  output: [1, 2, 3, 1337, 4, 5]
