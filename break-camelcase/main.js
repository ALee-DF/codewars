/* eslint-disable no-unused-vars */
function solution(string) {
  if (string.length === 0) return ''
  return string[0] === string[0].toUpperCase()
    ? ' ' + string[0] + solution(string.substring(1, string.length))
    : string[0] + solution(string.substring(1, string.length))
}
