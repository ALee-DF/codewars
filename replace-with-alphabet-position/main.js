/* eslint-disable no-unused-vars */
function alphabetPosition(text) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  return text.replace(/ /g, '').split('').map(letter => letter.toLowerCase()).reduce((array, letter) => {
    return alphabet.indexOf(letter) === -1 ? array : [...array, alphabet.indexOf(letter) + 1]
  }, []).join(' ')
}
