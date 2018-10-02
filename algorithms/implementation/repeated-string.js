function repeatedString(s, n) {
  
  let c = 0,
      ca = 0,
      r = n % s.length

  for (let i = s.length; i-- > 0;) {
    if (s.charAt(i) == 'a') {
      ++c

      if (i < r)
        ++ca
    }
  }

  return ((n - r) / s.length * c) + ca
}


//abad abad ab

console.log(repeatedString('ababa', 4))
console.log(repeatedString('abcac', 10))
console.log(repeatedString('abad', 11))
console.log(repeatedString('aba', 10))
console.log(repeatedString('a', 1000000000000))