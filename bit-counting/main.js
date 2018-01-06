/* eslint-disable no-unused-vars */
const countBits = function (n) {
  return n.toString(2).toString().split('').reduce((sum, digit) => Number(digit) === 1 ? ++sum : sum, 0)
}
