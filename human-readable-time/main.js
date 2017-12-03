/* eslint-disable no-unused-vars */
function humanReadable(seconds) {
  const hours = Math.floor(seconds / 3600)
  const hoursRemainder = seconds % 3600

  const minutes = Math.floor(hoursRemainder / 60)
  const minutesRemainder = hoursRemainder % 60

  const second = minutesRemainder % 60

  let resultHours = '00'
  let resultMinutes = '00'
  let resultSeconds = '00'
  if (hours > 0 && hours < 10) {
    resultHours = '0' + hours
  }
  else if (hours >= 10) {
    resultHours = hours
  }

  if (minutes > 0 && minutes < 10) {
    resultMinutes = '0' + minutes
  }
  else if (minutes >= 10) {
    resultMinutes = minutes
  }

  if (second > 0 && second < 10) {
    resultSeconds = '0' + second
  }
  else if (second >= 10) {
    resultSeconds = second
  }

  return resultHours + ':' + resultMinutes + ':' + resultSeconds
}
