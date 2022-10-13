const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, curDeep = 1, maxDeep = 1) {
    for (let el of arr) {
      if (Array.isArray(el)) maxDeep = this.calculateDepth(el, curDeep + 1, maxDeep);
    }

    if (curDeep > maxDeep) maxDeep = curDeep;
    return maxDeep;
  }
}

module.exports = {
  DepthCalculator,
};

// let p = [1, 2, 3, [4, 5], 2, ['', [4]]];
