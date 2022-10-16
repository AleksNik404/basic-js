const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let {
    repeatTimes = 1,
    separator = '+',
    addition,
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options;

  if (typeof str !== 'undefined') str = str + '';
  if (typeof addition !== 'undefined') addition = addition + '';

  let main = [];
  let second = [];

  // create main str witch separator
  for (let i = 0; i < repeatTimes; i++) {
    main.push(str);
  }

  // create addition str witch additionSeparator
  if (addition) {
    for (let i = 0; i < additionRepeatTimes; i++) {
      second.push(addition);
    }
  }

  // merger addition str to main if exists
  if (second.length !== 0) {
    main.forEach((el, index, arr) => {
      arr[index] = el + second.join(additionSeparator);
    });
  }

  return main.join(separator);
}

module.exports = {
  repeater,
};
