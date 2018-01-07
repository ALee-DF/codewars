/* eslint-disable no-unused-vars */
function createPhoneNumber(numbers) {
  const numbersCopy = numbers.slice('')
  numbersCopy.splice(6, 0, '-')
  numbersCopy.splice(3, 0, ') ')
  numbersCopy.splice(0, 0, '(')
  return numbersCopy.join('')
}
