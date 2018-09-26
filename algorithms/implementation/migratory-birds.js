// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
  arr = arr.sort((a, b) => a - b)

  let r = arr.length,
    c = 0,
    s = 0

  for (let i = arr.length; --i > 1;) {
    if (arr[i] > arr[i - 1]) {
      if (r - i >= c) {
        c = r - i
        s = i
      }
      r = i
    }
  }

  if (r >= c)
    s = 0

  return arr[s]
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3]))
console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 3, 2, 1, 3, 4]))