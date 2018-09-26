function birthdayCakeCandles(ar) {
  let max = Math.max(...ar)
  return ar.filter((v) => v === max).length
}

console.log(birthdayCakeCandles([3, 2, 1, 3]))