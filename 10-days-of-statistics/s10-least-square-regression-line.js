function processData(input) {
    //Enter your code here
    input = input.split('\n')
    let x = [],
    y = []

    for (let i = input.length; i-- > 0;) {
    let v = input[i].split(' ').map(Number)
    x[i] = v[0]
    y[i] = v[1]
  }

    function linearRegression(x, y, z) {
    let n = x.length,
      sx = 0,
      sy = 0,
      sxx = 0,
      sxy = 0,
      syy = 0

    for (let i = n; i-- > 0;) {
      sx += x[i]
      sy += y[i]
      sxx += Math.pow(x[i], 2)
      sxy += x[i] * y[i]
      syy += Math.pow(y[i], 2)
    }

    let b = (n * sxy - sx * sy) / (n * sxx - Math.pow(sx, 2)),
      a = (1 / n) * sy - b * (1 / n) * sx

    return [ a, b ]
    }

    function regressionEquation(a, b, x) {
    return b * x + a
    }

    console.log(regressionEquation(...linearRegression(x, y), 80).toFixed(3))
} 

// processData(`1 2
// 2 1
// 3 4
// 4 3
// 5 5`)

processData(`95 85
85 95
80 70
70 65
60 70`)

// processData(`1.47 52.21
// 1.50 53.12
// 1.52 54.48
// 1.55 55.84
// 1.57 57.20
// 1.60 58.57
// 1.63 59.93
// 1.65 61.29
// 1.68 63.11
// 1.70 64.47
// 1.73 66.28
// 1.75 68.10
// 1.78 69.92
// 1.80 72.19
// 1.83 74.46`)