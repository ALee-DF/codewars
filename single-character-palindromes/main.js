/* eslint-disable no-unused-vars */
function solve(s) {
  if (s === s.split('').reverse().join('')) {
    return 'OK'
  }

  const stringArray = s.split('')
  for (let i = 0; i < s.length; i++) {
    const editedStringArray = stringArray.slice('')
    editedStringArray.splice(i, 1)
    if (editedStringArray.join('') === editedStringArray.reverse().join('')) {
      return 'remove one'
    }
  }

  return 'not possible'
}
