/* eslint-disable no-unused-vars */
function generateHashtag(str) {
  if (str === '') return false
  const hashtag = '#' + str.split(' ').map(word => word !== '' ? word[0].toUpperCase() + word.substring(1, word.length) : '').join('')
  return hashtag.length > 140 ? false : hashtag
}
