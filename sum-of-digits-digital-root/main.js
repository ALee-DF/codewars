/* eslint-disable no-unused-vars */
function digitalRoot(n) {
  const result = n.toString().split('').reduce((sum, number) => sum + Number(number), 0)
  return result > 10
    ? digitalRoot(result)
    : result
}
