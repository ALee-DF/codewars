/* eslint-disable no-unused-vars */
const largestDifference = function (data) {
  let largestDiff = 0
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if ((data[i] <= data[j]) && (j - i > largestDiff)) {
        largestDiff = j - i
      }
    }
  }
  return largestDiff
}
