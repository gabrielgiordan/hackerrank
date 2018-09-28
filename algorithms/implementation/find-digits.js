function findDigits(n) {
  let a = n.toString().split(''),
      r = 0

  for (let i = a.length; i-- > 0;) {
    if (n % Number(a[i]) == 0)
      ++r
  }

  return r
}

console.log(findDigits(111))
console.log(findDigits(12))
console.log(findDigits(1012))