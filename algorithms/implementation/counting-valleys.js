function countingValleys(n, s) {

  let l = 0,
      v = 0

  for (let i = n; i-- > 0;) {
    if (s.charAt(i) === 'U') {
      if (l++ == 0)
        ++v
    } else {
      --l
    }
  }

  return v
}

console.log(countingValleys(8, 'UDDDUDUU'))
console.log(countingValleys(12, 'DDUUDDUDUUUD'))