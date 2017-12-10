/* eslint-disable no-unused-vars */
function firstNonRepeatingLetter(s) {
  const lettersArray = s.split('').map(letter => letter.toLowerCase())
  for (let i = 0; i < lettersArray.length; i++) {
    let letterCopies = 0
    for (let j = 0; j < lettersArray.length; j++) {
      if (lettersArray[j] === lettersArray[i]) letterCopies++
    }
    if (letterCopies === 1) return s[i]
  }
  return ''
}
