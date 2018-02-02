/* eslint-disable no-unused-vars */
const variance = function (numbers) {
  const average = numbers.reduce((sum, n) => sum + n, 0) / numbers.length
  return numbers.reduce((result, n) => result + Math.pow(n - average, 2), 0) / numbers.length
}
