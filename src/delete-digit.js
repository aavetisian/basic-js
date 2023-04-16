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
function deleteDigit(n) {
  let nStr = n.toString();
  let max = 0;
  for (let i = 0; i < nStr.length; i++) {
    let temp = parseInt(nStr.slice(0, i) + nStr.slice(i + 1));
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}


module.exports = {
  deleteDigit
};
