/* eslint-disable no-unused-vars */
function toCamelCase(str) {
  if (str === '') return ''
  return str.replace(/_|-/gi, ' ').split(' ').map((word, index) => {
    if (index === 0) return word
    const letters = word.split('')
    letters[0] = letters[0].toUpperCase()
    return letters.join('')
  }).join('')
}
