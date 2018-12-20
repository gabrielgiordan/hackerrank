function minimumSwaps(arr) {
  let s = 0

  for (let i = 0; i < arr.length; ++i) {

    let a = arr[i]

    if (a == i + 1) 
      continue

    // Swap
    arr[i] = arr[a - 1]
    arr[a - 1] = a

    ++s
    --i
  }

  return s
}

console.log(minimumSwaps([7,1,3,2,4,5,6]))
console.log(minimumSwaps([4,3,1,2]))
console.log(minimumSwaps([2,3,4,1,5]))