function processData(input) {
  //Enter your code here
  input = input.split('\n')
  input[0] = input[0].split(' ')

  let p = parseFloat(input[0][0]) / parseFloat(input[0][1]),
    n = parseFloat(input[1])

  function geometricDistribution(n, p) {
    return Math.pow(1 - p, n - 1) * p
  }

  function cumulativeProbability(n, p, i) {
    let s = 0

    for (let j = n + 1; j-- > 1;) {
      s += geometricDistribution(j, p)
    }

    return s
  }

  console.log(cumulativeProbability(n, p, 1).toFixed(3))
}

processData(`1 3
5`)