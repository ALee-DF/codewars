/* eslint-disable no-unused-vars */
function tribonacci(signature, n) {
  if (n === 0) return []
  if (n < 3) {
    const array = []
    for (let i = 0; i < n; i++) {
      array.push(signature[i])
    }
    return array
  }
  if (n <= signature.length) return signature
  return tribonacci([...signature, signature.slice(signature.length - 3, signature.length).reduce((sum, number) => sum + number, 0)], n)
}
