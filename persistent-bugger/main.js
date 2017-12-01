function persistence(num) {
   return checkPersistence(num, 0)
}

function checkPersistence(num, iteration) {
   if (num < 10) return iteration
   const digitsArray = num.toString().split('').map(digit => Number(digit))
   const persistence = digitsArray.reduce((result, digit) => result * digit, 1)
   return checkPersistence(persistence, ++iteration)
}
