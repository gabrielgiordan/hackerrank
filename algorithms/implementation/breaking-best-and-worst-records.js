// Complete the breakingRecords function below.
function breakingRecords(scores) {

  let l = scores[0],
    h = scores[0],
    lc = 0,
    hc = 0

  for (var i = 1; i < scores.length; ++i) {
    if (h < scores[i]) {
      h = scores[i]
      ++hc
    } else if (l > scores[i]) {
      l = scores[i]
      ++lc
    }
  }

  return [hc, lc]
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))
console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]))