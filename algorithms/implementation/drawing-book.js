function pageCount(n, p) {
  let d = (n % 2 == 0 ? ++n : n) - p
  return Math.floor((d > n / 2 ? p : d) / 2)
}

console.log(pageCount(6,5))
console.log(pageCount(6,2))
console.log(pageCount(5,4))