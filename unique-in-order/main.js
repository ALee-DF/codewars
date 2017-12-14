/* eslint-disable no-unused-vars */
const uniqueInOrder = function (iterable) {
  const result = []
  let check
  for (let i = 0; i < iterable.length; i++) {
    if (check !== iterable[i]) {
      result.push(iterable[i])
      check = iterable[i]
    }
  }
  return result
}
