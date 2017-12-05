/* eslint-disable no-unused-vars */
function duplicateCount(text) {
  const lowerCaseText = text.toLowerCase()
  const letters = {}
  let duplicates = 0
  for (let i = 0; i < lowerCaseText.length; i++) {
    if (letters.hasOwnProperty(lowerCaseText[i])) {
      letters[lowerCaseText[i]] = letters[lowerCaseText[i]] + 1
      if (letters[lowerCaseText[i]] === 2) {
        duplicates++
      }
    }
    else {
      letters[text[i]] = 1
    }
  }
  return duplicates
}
