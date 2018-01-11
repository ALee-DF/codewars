/* eslint-disable no-unused-vars */
const palindromeChainLength = function (n) {
  let counter = 0
  let candidateNumber = n
  while (candidateNumber.toString() !== candidateNumber.toString().split('').reverse().join('')) {
    candidateNumber = candidateNumber + Number(candidateNumber.toString().split('').reverse().join(''))
    counter++
  }
  return counter
}
