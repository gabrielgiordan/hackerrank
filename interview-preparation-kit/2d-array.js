// Complete the hourglassSum function below.
function hourglassSum(arr) {
  let hourglasses = []

  for (let i = 0; i + 2 < arr.length; i++) {
    hourglasses[i] = []

    for (let j = 0; j + 2 < arr[i].length; j++) {
      hourglasses[i][j] = []

      for (let k = j, l = 0; k < j + 3, l < 3; k++ , l++) {
        hourglasses[i][j][l] = arr[i][k]
        hourglasses[i][j][l + 1] = arr[i + 1][k - 1]

        for (let h = 3; h-- > 0;) {
          hourglasses[i][j][l + 4 - h] = arr[i + 2][k - h]
        }
      }
    }
  }

  let maxSum = null

  for (let i = 0; i < hourglasses.length; i++) {
    for (let j = 0; j < hourglasses.length; j++) {
      let sum = hourglasses[i][j].reduce((a, b) => a + b)
      if (maxSum < sum || maxSum === null) {
        maxSum = sum
      }
    }
  }

  return maxSum
}