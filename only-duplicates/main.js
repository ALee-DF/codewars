/* eslint-disable no-unused-vars */
function onlyDuplicates(str) {
  const nonDuplicateArray = []
  for (let i = 0; i < str.length; i++) {
    if (str.split('').reduce((sum, letter) => str[i] === letter ? ++sum : sum, 0) > 1) {
      nonDuplicateArray.push(str[i])
    }
  }
  return nonDuplicateArray.join('')
}
