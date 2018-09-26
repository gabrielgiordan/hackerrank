function processData(input) {
  //Enter your code here
  function spearmansRankCorrelationCoefficient(x, y, n) {

    let xs = [...x].sort((a, b) => a - b),
      ys = [...y].sort((a, b) => a - b),
      d = 0

    for (let i = n; i-- > 0;) {
      d += Math.pow(xs.indexOf(x[i]) - ys.indexOf(y[i]), 2)
    }

    return 1 - ((6 * d) / (n * (Math.pow(n, 2) - 1)))
  }

  input = input.split('\n')

  let n = parseInt(input[0]),
    x = input[1].split(' ').map(Number).slice(0, n),
    y = input[2].split(' ').map(Number).slice(0, n)

  console.log(spearmansRankCorrelationCoefficient(x, y, n).toFixed(3))
}

// processData(`10
// 106 86 100 101 99 103 97 113 112 110
// 7 0 27 50 28 29 20 12 6 17`)

processData(`10
10 9.8 8 7.8 7.7 1.7 6 5 1.4 2 
200 44 32 24 22 17 15 12 8 4`)