function diagonalDifference(arr) {
  let ltr = 0,
    rtl = arr.length,
    ltrd = 0,
    rtld = 0

  for (let i = 0; i < arr.length; i++) {
    ltrd += arr[i][ltr++]
    rtld += arr[i][--rtl]
  }

  return Math.abs(ltrd - rtld)
}

// [[1, 2, 3], [4, 5, 6], [9, 8, 9]]  
console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]))