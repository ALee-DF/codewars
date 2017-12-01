function dirReduc(arr){
  let directions = arr.slice('')
  let notOptimized = true
  while(notOptimized) {
    let optimizationCheck = 0
    for (let i = 0; i < directions.length - 1; i++) {
      if ((directions[i] === 'NORTH' && directions[i+1] === 'SOUTH') || (directions[i] === 'SOUTH' && directions[i+1] === 'NORTH')) {
        var firstIndex = i
        var secondIndex = i + 1
        optimizationCheck++
      }
      else if ((directions[i] === 'EAST' && directions[i+1] === 'WEST') || (directions[i] === 'WEST' && directions[i+1] === 'EAST')) {
        var firstIndex = i
        var secondIndex = i + 1
        optimizationCheck++
      }
    }
    if (optimizationCheck === 0) {
      notOptimized = false
    }
    else {
      directions.splice(secondIndex, 1)
      directions.splice(firstIndex, 1)
    }
  }
  return directions
}
