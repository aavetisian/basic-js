const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
// function countCats(matrix) {
//   const count = matrix.reduce((a, v) => a + v.includes('^^'), 0)
//   return count
// }
function countCats(backyard) {
  // Flatten the array into a one-dimensional array
  const flattened = backyard.flat();

  // Count the number of cats (i.e. the number of occurrences of "^^")
  const count = flattened.filter(item => item === '^^').length;

  return count;
}

module.exports = {
  countCats
};
// console.log(countCats([
//   ["^^", ".", null, 0, false, "", NaN, "^^", 2, true, "dasdas", 1],
//   [2, null, 0, 1, ".", "dasdas", true, NaN, "", false, "^^", "^^"],
//   [false, ".", 1, 0, "^^", null, "", 2, "dasdas", "^^", NaN, true],
//   [".", false, 1, null, NaN, 2, 0, "dasdas", true, "^^", "", "^^"],
//   [false, ".", 1, 0, "^^", true, null, "^^", "", NaN, 2, "dasdas"],
//   [false, NaN, 1, 0, ".", "^^", null, true, "dasdas", "^^", 2, ""],
//   [null, 1, NaN, true, ".", "^^", "^^", 2, "", false, "dasdas", 0],
//   [null, NaN, "", false, ".", 1, 0, "^^", "dasdas", true, 2, "^^"]
// ]));
