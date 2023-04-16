const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */

  // throw new NotImplementedError('Not implemented');
  function calculateHanoi(diskNumber, turnsSpeed) {
    const turns = 2 ** diskNumber - 1; // calculate the minimum number of turns required to solve the puzzle
    const seconds = Math.floor(turns * 3600 / turnsSpeed); // calculate the minimum number of seconds (rounded down)
    return { turns, seconds }; // return an object with the turns and seconds properties
  }



module.exports = {
  calculateHanoi
};
