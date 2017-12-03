/* eslint-disable no-unused-vars */
function prefill(n, v) {
  let number = parseFloat(n)
  if (Number.isInteger(number) && number >= 0) {
    if (number === 0) return []
    return [v, ...prefill(--number, v)]
  }
  else {
    throw new TypeError(n + ' is invalid')
  }
}
