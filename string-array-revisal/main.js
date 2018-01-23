/* eslint-disable no-unused-vars */
function dup(s) {
  if (s.length === 0) return []
  const stringCopy = s[0].split('')
  const newString = [stringCopy[0]]
  let lastLetter = stringCopy[0]
  for (let i = 1; i < stringCopy.length; i++) {
    if (stringCopy[i] !== lastLetter) {
      newString.push(stringCopy[i])
    }
    lastLetter = stringCopy[i]
  }
  return [newString.join(''), ...dup(s.slice(1, s.length))]
}
