function processData(input) {
  //Enter your code here

  input = input.split('\n')
  let mx = parseFloat(input[0]),
    m = parseFloat(input[1]),
    sd = parseFloat(input[2]),
    i = parseFloat(input[3]),
    z = parseFloat(input[4])

  function confidenceInterval(z, sd, mx) {
    return z * (sd / Math.sqrt(mx))
  }

  console.log((m - confidenceInterval(z, sd, mx)).toFixed(2))
  console.log((m + confidenceInterval(z, sd, mx)).toFixed(2))
}

processData(`100
500
80
.95
1.96`)