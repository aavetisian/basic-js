const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
// function createDreamTeam(members) {
//   if (typeof members.map(v => v )!=='string'){
//     return false
//   }
//   const team =members.map(v=>v.slice(0, 1)).sort().join('').toUpperCase()
//   return team
// }
function createDreamTeam(members) {
  // Check if the input is an array
  if (!Array.isArray(members)) {
    return false;
  }

  // Filter out non-string values and extract the first letter of each name
  const initials = members.filter(member => typeof member === 'string')
    .map(member => member.trim()[0].toUpperCase());

  // Sort the initials alphabetically and concatenate them into a string
  const name = initials.sort().join('');

  return name;
}

module.exports = {
  createDreamTeam
};
