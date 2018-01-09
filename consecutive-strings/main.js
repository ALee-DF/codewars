/* eslint-disable no-unused-vars */
function longestConsec(strarr, k) {
  if (k < 1 || k > strarr.length || strarr.length === 0) return ''
  let longestString = ''
  for (let i = 0; i < strarr.length - k + 1; i++) {
    const combinedString = strarr.slice(i, i + k).join('')
    if (combinedString.length > longestString.length) {
      longestString = combinedString
    }
  }
  return longestString
}
