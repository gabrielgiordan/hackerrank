function serviceLane(n, cases, widths) {
  let arr = [cases.length]

  for (let k = cases.length; k-- > 0;) {
    let i = cases[k][0],
        j = cases[k][1],
        m = 100000

    for (let o = j + 1; o-- > i;) {
      let w = widths[o]

      if (m > w) {
        m = w
      }
    }

    arr[k] = m
  }

  return arr
}

let c = [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]],
    w = [2, 3, 1, 2, 3, 2, 3, 3]
console.log(serviceLane(w.length, c, w))