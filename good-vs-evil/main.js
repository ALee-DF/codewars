/* eslint-disable no-unused-vars */
function goodVsEvil(good, evil) {
  const goodStats = good.split(' ').map(num => Number(num))
  const evilStats = evil.split(' ').map(num => Number(num))
  const sumGood = goodStats[0] * 1 + goodStats[1] * 2 + goodStats[2] * 3 + goodStats[3] * 3 + goodStats[4] * 4 + goodStats[5] * 10
  const sumEvil = evilStats[0] * 1 + evilStats[1] * 2 + evilStats[2] * 2 + evilStats[3] * 2 + evilStats[4] * 3 + evilStats[5] * 5 + evilStats[6] * 10
  if (sumGood > sumEvil) return 'Battle Result: Good triumphs over Evil'
  if (sumGood < sumEvil) return 'Battle Result: Evil eradicates all trace of Good'
  return 'Battle Result: No victor on this battle field'
}
