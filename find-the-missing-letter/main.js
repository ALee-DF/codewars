/* eslint-disable no-unused-vars */
function findMissingLetter(array) {
  let expectedLetter = String.fromCharCode(array[0].charCodeAt() + 1)
  for (let i = 1; i < array.length; i++) {
    if (expectedLetter !== array[i]) {
      return expectedLetter
    }
    expectedLetter = String.fromCharCode(array[i].charCodeAt() + 1)
  }
}
