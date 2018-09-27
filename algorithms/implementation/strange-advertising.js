// See diff pattern here https://oeis.org/A061418
function viralAdvertising(n) {
  let r = 0

  for (let i = n + 1; i-- > 1;) {
    r += Math.ceil(1.08151366859 * Math.pow(1.5, i))
  }

  return r
}

console.log(viralAdvertising(3))