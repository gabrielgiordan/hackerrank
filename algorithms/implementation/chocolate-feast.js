function chocolateFeast(n, c, m) {
  return Math.ceil(Math.floor(n / c) / (1 - (1 / m))) - 1
}

console.log(chocolateFeast(10,2,5))
console.log(chocolateFeast(12,4,4))
console.log(chocolateFeast(6,2,2))