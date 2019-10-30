function dynamicArray(n, queries) {

  let sl = {},
      la = 0,
      las = [],
      l = queries.length

  for (let i = 0; i < l; ++i) {
    let [q, x, y] = queries[i],
        si = (x ^ la) % n

    if (q == 1) {
      if (sl[si])
        sl[si].push(y)
      else
        sl[si] = [y]

    } else if (q == 2) {
      la = sl[si][y % sl[si].length]
      las.push(la)
    }
  }

  return las
}