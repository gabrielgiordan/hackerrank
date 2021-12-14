function flatlandSpaceStations(n, c) {
  c.sort((a, b) => a - b)

  let l = c.length - 1,
      d = Math.max(c[0], n - 1 - c[l])

  for (let i = l; i-- > 0;) {
    d = Math.max(Math.floor((c[i + 1] - c[i]) / 2), d)
  }

  return d
}

console.log(flatlandSpaceStations(2, [0, 4])) // 2
console.log(flatlandSpaceStations(6, [0, 1, 2, 3, 4, 5])) // 0