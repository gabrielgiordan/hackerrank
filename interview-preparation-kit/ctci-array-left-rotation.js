// Complete the rotLeft function below.
function rotLeft(a, d) {
  let r = []

  d %= a.length

  for (let i = 0; i < a.length; ++i) {
    r[i] = a[(i + d) % a.length]
  }

  return r
}