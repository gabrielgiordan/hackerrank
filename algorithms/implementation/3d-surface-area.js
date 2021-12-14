function surfaceArea(cells) {
  let area = 0

  for (let i = 0; i < cells.length; ++i) {
    for (let j = 0; j < cells[0].length; ++j) {
      area += 4 * cells[i][j] + 2
      area -= 2 * Math.min(cells[i][j], cells[i - 1]?.[j] ?? 0)
      area -= 2 * Math.min(cells[i][j], cells[i]?.[j + 1] ?? 0)
    }
  }

  return area
}

let cells

cells = [
  [1, 3, 4],
  [2, 2, 3],
  [1, 2, 4]
]

console.log(surfaceArea(cells))