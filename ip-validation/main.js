/* eslint-disable no-unused-vars */
function isValidIP(str) {
  const stringIP = str.split('.')
  let isValid = true
  if (stringIP.length === 4) {
    for (let i = 0; i < stringIP.length; i++) {
      if (stringIP[i] === '') {
        isValid = false
      }
      else {
        if ((Number(stringIP[i]) < 0) || (Number(stringIP[i] > 255)) || isNaN(Number(stringIP[i]))) {
          isValid = false
        }
        if (stringIP[i].split('').includes(' ')) {
          isValid = false
        }
      }
    }
  }
  else {
    isValid = false
  }
  return isValid
}
