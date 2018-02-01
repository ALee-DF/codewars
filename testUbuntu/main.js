/* eslint-disable no-unused-vars */
function sumFibs(n) {
  function fibonacci(array, n) {
    if (array.length >= n + 1) return array
    return fibonacci([...array, array[array.length - 1] + array[array.length - 2]], n)
  }
  const startArray = [0, 1]
  return fibonacci(startArray, n).reduce((sum, number) => number % 2 === 0 ? sum + number : sum, 0)
}

// Ubuntu Test 3
