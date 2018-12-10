function gameWithCells(n, m) {
  return ((n + (n % 2)) * (m + (m % 2))) / 4
}

console.log(gameWithCells(2, 2))