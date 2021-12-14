function fairRations(B) {
  let s = 0

  for (let i = B.length; i-- > 0;) {
    if (B[i] % 2 !== 0) {
      s += 2
      B[i]++

      if (Number.isNaN(B[i - 1]++))
        return "NO"
    }
  }

  return s
}

console.log(fairRations([2, 3, 4, 5, 6])) // 4
console.log(fairRations([1, 2])) // NO