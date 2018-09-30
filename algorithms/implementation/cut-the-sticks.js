function cutTheSticks(arr) {
  let a = []

  arr = arr.sort((a, b) => a - b)

  for (let i = arr.length; i-- > 0;) {
    if (arr[i] != arr[i - 1]) {
      a.unshift(arr.length - i)
    }
  }

  return a
}

console.log(cutTheSticks([1,2,3]))
console.log(cutTheSticks([5,4,4,2,2,8]))
console.log(cutTheSticks([1,2,3,4,3,3,2,1]))