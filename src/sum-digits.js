const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  // Convert number to string to access each digit
  let str = n.toString();
  let sum = 0;

  // Loop through digits and add them up
  for (let i = 0; i < str.length; i++) {
    sum += parseInt(str[i]);
  }

  // If sum is greater than 9, repeat the process with the sum
  if (sum > 9) {
    return getSumOfDigits(sum);
  } else {
    return sum;
  }
}


module.exports = {
  getSumOfDigits
};
