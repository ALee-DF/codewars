/* eslint-disable no-unused-vars */
function pigIt(str) {
  return str.split(' ').map(word => word.substring(1, word.length) + word[0] + 'ay').join(' ')
}
