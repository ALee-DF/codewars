/* eslint-disable no-unused-vars */
function solve(a, b) {
  const letters = {}
  for (let i = 0; i < a.length; i++) {
    if (letters.hasOwnProperty(a[i])) {
      letters[a[i]] = letters[a[i]] + 1
    }
    else {
      letters[a[i]] = 1
    }
  }

  for (let i = 0; i < b.length; i++) {
    letters[b[i]] = letters[b[i]] - 1
    if (letters[b[i]] < 0) return 0
  }

  let sum = 0
  for (var key in letters) {
    sum = sum + letters[key]
  }
  return sum
}
