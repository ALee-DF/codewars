function ipsBetween(start, end){
  const startArray = start.split('.').map(number => Number(number))
  const endArray = end.split('.').map(number => Number(number))
  const diff = []
  for (let i = 0; i < startArray.length; i++) {
    diff.push(endArray[i] - startArray[i])
  }
  return diff[0] * Math.pow(256,3) + diff[1] * Math.pow(256,2) + diff[2] * 256 + diff[3]
}
