function utopianTree(n) {
  return ~(~1 << (n >> 1)) << n % 2
}

console.log(utopianTree(0))
console.log(utopianTree(1))
console.log(utopianTree(4))