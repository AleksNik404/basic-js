const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // A copy of the matrix with a depth of 2. By filling all elements with 0
  const copyMatrix = matrix.map((el) => new Array(el.length).fill(0));

  matrix.forEach((row, indexM, arrMatrix) => {
    row.forEach((cell, indexC, arrRow) => {
      if (cell === true) {
        // If a cell is true. Increase the value of all cells around by 1 in the copyMatrix

        // prev and next cell on the current row
        if (arrRow[indexC - 1] !== undefined) copyMatrix[indexM][indexC - 1]++;
        if (arrRow[indexC + 1] !== undefined) copyMatrix[indexM][indexC + 1]++;

        //row above
        if (arrMatrix[indexM - 1]?.[indexC - 1] !== undefined) copyMatrix[indexM - 1][indexC - 1]++;
        if (arrMatrix[indexM - 1]?.[indexC] !== undefined) copyMatrix[indexM - 1][indexC]++;
        if (arrMatrix[indexM - 1]?.[indexC + 1] !== undefined) copyMatrix[indexM - 1][indexC + 1]++;

        //row below
        if (arrMatrix[indexM + 1]?.[indexC - 1] !== undefined) copyMatrix[indexM + 1][indexC - 1]++;
        if (arrMatrix[indexM + 1]?.[indexC] !== undefined) copyMatrix[indexM + 1][indexC]++;
        if (arrMatrix[indexM + 1]?.[indexC + 1] !== undefined) copyMatrix[indexM + 1][indexC + 1]++;
      }
    });
  });

  return copyMatrix;
}
// matrix = [
//   [true, false, false],
//   [false, true, false],
//   [false, false, false],
// ];

// minesweeper(matrix);

module.exports = {
  minesweeper,
};

// if (arrMatrix[indexM + 1]?.[indexC - 1] !== undefined) {
//   typeof arrMatrix[indexM + 1][indexC - 1] === 'boolean'
//     ? (arrMatrix[indexM + 1][indexC - 1] = 1)
//     : arrMatrix[indexM + 1][indexC - 1]++;
// }
// if (arrMatrix[indexM + 1]?.[indexC] !== undefined) {
//   typeof arrMatrix[indexM + 1][indexC] === 'boolean'
//     ? (arrMatrix[indexM + 1][indexC] = 1)
//     : arrMatrix[indexM + 1][indexC]++;
// }
// if (arrMatrix[indexM + 1]?.[indexC + 1] !== undefined) {
//   typeof arrMatrix[indexM + 1][indexC + 1] === 'boolean'
//     ? (arrMatrix[indexM + 1][indexC + 1] = 1)
//     : arrMatrix[indexM + 1][indexC + 1]++;
// }

// if (cell === true) {
// if (arrRow[indexC - 1] !== undefined) {
//   typeof arrRow[indexC - 1] === 'boolean' ? (arrRow[indexC - 1] = 1) : arrRow[indexC - 1]++;
// }
// if (arrRow[indexC + 1] !== undefined) {
//   typeof arrRow[indexC + 1] === 'boolean' ? (arrRow[indexC + 1] = 1) : arrRow[indexC - 1]++;
// }
// if (arrMatrix[indexM - 1]?.[indexC - 1] !== undefined) {
//   typeof arrMatrix[indexM - 1][indexC - 1] === 'boolean'
//     ? (arrMatrix[indexM - 1][indexC - 1] = 1)
//     : arrMatrix[indexM - 1][indexC - 1]++;
// }
// if (arrMatrix[indexM - 1]?.[indexC] !== undefined) {
//   typeof arrMatrix[indexM - 1][indexC] === 'boolean'
//     ? (arrMatrix[indexM - 1][indexC] = 1)
//     : arrMatrix[indexM - 1][indexC]++;
// }
// if (arrMatrix[indexM - 1]?.[indexC + 1] !== undefined) {
//   typeof arrMatrix[indexM - 1][indexC + 1] === 'boolean'
//     ? (arrMatrix[indexM - 1][indexC + 1] = 1)
//     : arrMatrix[indexM - 1][indexC + 1]++;
// }
// if (arrMatrix[indexM + 1]?.[indexC - 1] !== undefined) {
//   typeof arrMatrix[indexM + 1][indexC - 1] === 'boolean'
//     ? (arrMatrix[indexM + 1][indexC - 1] = 1)
//     : arrMatrix[indexM + 1][indexC - 1]++;
// }
// if (arrMatrix[indexM + 1]?.[indexC] !== undefined) {
//   typeof arrMatrix[indexM + 1][indexC] === 'boolean'
//     ? (arrMatrix[indexM + 1][indexC] = 1)
//     : arrMatrix[indexM + 1][indexC]++;
// }
// if (arrMatrix[indexM + 1]?.[indexC + 1] !== undefined) {
//   typeof arrMatrix[indexM + 1][indexC + 1] === 'boolean'
//     ? (arrMatrix[indexM + 1][indexC + 1] = 1)
//     : arrMatrix[indexM + 1][indexC + 1]++;
// }
// }
// if (cell === false) cell = 0;
