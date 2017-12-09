/* eslint-disable no-unused-vars */
function spinWords(phrase) {
  return phrase.split(' ').map((word) => {
    return word.length >= 5
      ? word.split('').reverse().join('')
      : word
  }).join(' ')
}
