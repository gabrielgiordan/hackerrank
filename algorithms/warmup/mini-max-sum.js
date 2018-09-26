function miniMaxSum(arr) {

  arr = arr.sort((a, b) => a - b)
  let min = arr.slice(0, arr.length - 1).reduce((a, b) => a + b)
  let max = arr.slice(1, arr.length).reduce((a, b) => a + b)

  console.log(min + ' ' + max)
}

miniMaxSum([1, 2, 3, 4, 5])