function multipleRegression(x, y, q) {

  /* Gabriel Giordano's implementation from C to JavaScript with some modifications
     on the research "An Efficient and Simple Algorithm for Matrix Inversion" by Ahmad Farooq and Khan Hamid */
  function matrixInverse(a) {
    let pivot = 0

    for (let p = a.length; p-- > 0;) {
      pivot = a[p][p]

      if (Math.abs(pivot) < 1e-5)
        return 0

      for (let i = a.length; i-- > 0;)
        a[i][p] /= -pivot

      for (let i = a.length; i-- > 0;)
        if (i != p)
          for (let j = a.length; j-- > 0;)
            if (j != p)
              a[i][j] += a[p][j] * a[i][p]

      for (let j = a.length; j-- > 0;)
        a[p][j] /= pivot

      a[p][p] = 1 / pivot
    }

    return a
  }

  function matrixTranspose(a) {
    return Object.keys(a[0]).map((c) => a.map((r) => r[c]))
  }

  function matrixMultiply(a, b) {
    return a.map(x => matrixTranspose(b).map(y => dotProduct(x, y)))
  }

  function dotProduct(a, b) {
    return a.map((x, i) => a[i] * b[i]).reduce((m, n) => m + n)
  }

  let t = matrixTranspose(x),
    b = matrixMultiply(matrixMultiply(matrixInverse(matrixMultiply(t, x)), t), y)

  return dotProduct([1, ...q], b)
}

function processData(input) {
  //Enter your code here
  input = input.split('\n')

  let [m, n] = input[0].split(' ').map(Number),
    x = [],
    y = []

  for (let i = n + 1; i-- > 1;) {
    let e = input[i].split(' ').map(Number)
    let xe = [1]
    for (let j = m + 1; j-- > 1;) {
      xe[j] = e[j - 1]
    }
    x.push(xe)
    y.push([e[m]])
  }
  for (let i = input.length - input[n + 1]; i < input.length; ++i) {
    let f = input[i].split(' ').map(Number)
    console.log(multipleRegression(x, y, f).toFixed(2))
  }
}

processData(`2 7
0.18 0.89 109.85
1.0 0.26 155.72
0.92 0.11 137.66
0.07 0.37 76.17
0.85 0.16 139.75
0.99 0.41 162.6
0.87 0.47 151.77
4
0.49 0.18
0.57 0.83
0.56 0.64
0.76 0.18`)
