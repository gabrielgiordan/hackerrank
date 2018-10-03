function equalizeArray(arr) {
  let c = {},
      m = 0

  for (let i = arr.length; i-- > 0;) {
    let a = arr[i]

    if (isNaN(c[a]))
      c[a] = 0

    if (++c[a] > m)
      m = c[a]
  }

  return arr.length - m
}

console.log(equalizeArray([1,2,2,3])) // 2
console.log(equalizeArray([3,3,2,1,3])) // 2
