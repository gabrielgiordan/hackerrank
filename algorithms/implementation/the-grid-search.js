function gridSearch(grid, pattern) {
  for (let i = 0; i < grid.length; ++i) {
    let gridLine = grid[i]
    let patternLine = pattern[0]

    for (let j = 0; j < gridLine.length; ++j) {
      if (gridLine[j] == patternLine[0]) {
        let k = 1;

        for (; k < patternLine.length; ++k)
          if (gridLine[j + k] != patternLine[k])
            break

        if (k == patternLine.length) {
          let m = 1

          for (; m < pattern.length; ++m) {
            let nextGridLine = grid[i + m]
            let nextPatternLine = pattern[m]
            let nextIndex = j + nextPatternLine.length
            let n = j

            for (; n < nextIndex; ++n)
              if (nextGridLine[n] != nextPatternLine[n - j])
                break

            if (n != nextIndex)
              break
          }

          if (m == pattern.length)
            return "YES"
        }
      }
    }
  }

  return "NO"
}

let grid
let pattern

grid = [
  '4160389485250089289309493',
  '2583470721457150497569300',
  '3220130778636571709490905',
  '3588873017660047694725749',
  '9288991387848870159567061',
]
pattern = ['5250', '1457', '8636', '7660', '7848']

console.log(gridSearch(grid, pattern))