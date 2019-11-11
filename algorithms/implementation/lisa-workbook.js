function workbook(n, k, arr) {

  let i = 0,
      p = 0,
      s = 0

  while (i < arr.length) {

    let q = arr[i],
        j = 0

    while (j < q) {

      let r = j + k

      if (r > q)
        r = q

      if (p >= j && p <= r - 1)
        ++s

      j = r
      ++p
    }

    ++i
  }

  return s
}

console.log(workbook(5, 3, [4,2,6,1,10]))
