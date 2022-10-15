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
  throw new NotImplementedError('Not implemented');
  // let {
  //   repeatTimes = 1,
  //   separator,
  //   addition,
  //   additionRepeatTimes,
  //   additionSeparator,
  // } = options;
  // if (typeof str !== 'string') str = str + '';
  // if (typeof addition !== 'string') addition = addition + '';
  // let templateArr = [];
  // for (let i = 0; i < repeatTimes; i++) {}
  // return templateArr.join('');
}

// console.log(
//   repeater('STRING', {
//     repeatTimes: 3,
//     separator: '**',
//     addition: 'PLUS',
//     additionRepeatTimes: 3,
//     additionSeparator: '00',
//   })
// );

module.exports = {
  repeater,
};
