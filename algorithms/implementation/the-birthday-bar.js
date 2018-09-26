// Complete the birthday function below.
function birthday(s, d, m) {
  let su = 0,
    c = 0

  for (let i = 0; i <= s.length - m; ++i) {
    su += s[i]
    for (let j = i + m; j-- > i + 1;) {
      su += s[j]
    }

    if (su === d)
      ++c

    su = 0
  }

  return c
}

console.log(birthday([2, 2, 1, 3, 2], 4, 2))
console.log(birthday([1, 2, 1, 3, 2], 3, 2))
console.log(birthday([1, 1, 1, 1, 1], 3, 2))
console.log(birthday([4], 4, 1))