function processData(input) {
  //Enter your code here
  input = input.split('\n')
  let n = parseInt(input[0]),
    x = input[1].split(' ').map(Number),
    m = x.reduce((a, b) => a + b) / n,
    v = 0

  for (let i = n; i-- > 0;) {
    v += Math.pow(x[i] - m, 2)
  }
  v /= n

  sd = Math.sqrt(v)

  console.log(sd.toFixed(1))
}

processData(`5
10 40 30 50 20`)