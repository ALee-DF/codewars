function findOdd(A) {
  var numbers = {}
  for (let i = 0; i < A.length; i++) {
    if (numbers.hasOwnProperty(A[i])) {
      numbers[A[i]] = numbers[A[i]] + 1
    }
    else {
      numbers[A[i]] = 1
    }
  }

  for (const key in numbers) {
    if (numbers[key] %2 === 1) {
      return Number(key)
    }
  }
  return 0
}
