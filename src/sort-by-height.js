const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
// function sortByHeight(arr) {
//   const sorted = arr.sort(a, b=>(a-b))
//   return sorted
// }
function sortByHeight(arr) {
  // Create a new array with all the heights (excluding -1)
  const heights = arr.filter(h => h !== -1).sort((a, b) => a - b);
  // Loop through the original array and replace heights with sorted values
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arr[i] = heights[index];
      index++;
    }
  }
  return arr;
}


module.exports = {
  sortByHeight
};
