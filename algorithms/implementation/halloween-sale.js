function howManyGames(p, d, m, s) {
  let n = 0

  if (s >= p) {
    n = parseInt(1 + (p - m) / d)
    let t = n * (2 * p - (n - 1) * d) / 2

    if (s < t) {
      let b = 2 * p + d
      n = (b - Math.sqrt(b * b - 8 * d * s)) / (2 * d)
    } else {
      n += (s - t) / m
    }
  }

  return parseInt(n)
}

console.log(howManyGames(20,3,6,80)) // 6
console.log(howManyGames(20,3,6,85)) // 7
console.log(howManyGames(13,86,8,9027)) // 1127