/* eslint-disable no-unused-vars */
function findEvenIndex(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    const leftSide = arr.slice(0, i)
    const rightSide = arr.slice(i + 1)
    if (arraySum(leftSide) === arraySum(rightSide)) {
      return i
    }
  }
  return -1
}

function arraySum(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i]
  }
  return sum
}
