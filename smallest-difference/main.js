/* eslint-disable no-unused-vars */
function smallestDiff(arr1, arr2) {
  if (arr1.length === 0 && arr2.length === 0) {
    return -1
  }
  else if (arr1.length === 0 && arr2.length > 0) {
    return Math.min(...arr2)
  }
  else if (arr1.length > 0 && arr2.length === 0) {
    return Math.min(...arr1)
  }
  else {
    let difference = Math.abs(arr1[0] - arr2[0])
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (Math.abs(arr1[i] - arr2[j]) < difference) {
          difference = Math.abs(arr1[i] - arr2[j])
        }
      }
    }
    return difference
  }
}
