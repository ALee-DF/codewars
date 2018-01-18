/* eslint-disable no-unused-vars */
function toWeirdCase(string) {
  return string.split(' ').map(word => {
    let result = ''
    for (let i = 0; i < word.length; i++) {
      if (i % 2 === 0) {
        result = result + word[i].toUpperCase()
      }
      else {
        result = result + word[i]
      }
    }
    return result
  }).join(' ')
}
