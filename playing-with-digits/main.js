/* eslint-disable no-unused-vars */
function digPow(n, p) {
  const digits = n.toString().split('').map(digit => Number(digit))

  let result = 0
  for (let i = 0; i < digits.length; i++) {
    result = result + Math.pow(digits[i], p + i)
  }

  let product = 0
  let k = 0
  while (product < result) {
    if (result === (n * k)) {
      return k
    }
    product = n * k
    k++
  }
  return -1
}
