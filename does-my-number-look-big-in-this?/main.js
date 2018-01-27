/* eslint-disable no-unused-vars */
function narcissistic(value) {
  const digits = value.toString().split('').map(Number)
  return digits.reduce((sum, digit) => sum + Math.pow(digit, digits.length), 0) === value
}
