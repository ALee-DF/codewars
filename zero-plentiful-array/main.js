/* eslint-disable no-unused-vars */
function zeroPlentiful(arr) {
  let counter = 0
  const zerosTrack = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      counter++
    }
    else {
      zerosTrack.push(counter)
      counter = 0
    }

    if (i + 1 === arr.length && counter !== 0) {
      zerosTrack.push(counter)
    }
  }

  const sequenceOfZeros = zerosTrack.filter(element => element !== 0)
  if (sequenceOfZeros.length === 0) {
    return 0
  }
  else {
    if (sequenceOfZeros.filter(element => element < 4).length > 0) {
      return 0
    }
    else {
      return sequenceOfZeros.filter(element => element >= 4).length
    }
  }
}
