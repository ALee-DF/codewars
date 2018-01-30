/* eslint-disable no-unused-vars */
function findOutlier(integers) {
  const evenNumbers = []
  const oddNumbers = []
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      evenNumbers.push(integers[i])
    }
    else {
      oddNumbers.push(integers[i])
    }
  }
  return evenNumbers.length === 1 ? evenNumbers[0] : oddNumbers[0]
}
