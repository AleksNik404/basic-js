const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let bombsIndex = [];
  let sum = 0;

  for (let row of matrix) {
    sum += row.reduce((acc, cell, index) => {
      if (cell == 0) bombsIndex[index] = 0;
      // return bombsIndex[index] !== 0 ? acc + cell : acc + 0;
      if (bombsIndex[index] == 0) return acc;
      return acc + cell;
    }, 0);
  }
  return sum;
}

// console.log(
//   getMatrixElementsSum([
//     [0, 1, 1, 2],
//     [0, 5, 0, 0],
//     [2, 0, 3, 3],
//   ])
// );

module.exports = {
  getMatrixElementsSum,
};
