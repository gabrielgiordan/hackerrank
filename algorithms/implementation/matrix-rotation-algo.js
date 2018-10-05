function matrixRotation(matrix, r) {

  function rotateSpiral(m, n, x, y, r) {

    let nrmx = x - (n - x - 1), // calc normalization
        nrmy = y - (m - y - 1),
        nrm = ((m + n + 1) - Math.max(Math.abs(nrmy) + n, Math.abs(nrmx) + m)) / 2,

        clen = n - (nrm - 1) * 2, // calc length
        rlen = m - (2 * nrm),
        len = (clen + (rlen > -1 ? rlen : -clen / 2)) * 2,

        upc = ((x + clen) - (n - x)) / 2, // calc upper
        upr = ((y + rlen + 2) - (m - y)) / 2,

        lowc = (clen - 1) - upc, // calc lower
        lowr = (rlen + 1) - upr,

        i = (lowr * upc) - (upr * lowc) < 0 ? lowc + lowr + rlen + clen : upc + upr, // calc index

        ri = (i + r) % len // calc rotation

    let rx = 0,
        ry = 0

    // calc rotated matrix index
    if (ri < clen) {
      rx = ri + nrm - 1
      ry = nrm - 1
    } else if (ri < clen + rlen) {
      rx = clen + nrm - 2
      ry = ri - clen + nrm
    } else if (ri < clen * 2 + rlen) {
      rx = (clen * 2 + rlen) - ri + nrm - 2
      ry = rlen + nrm
    } else {
      rx = nrm - 1
      ry = len - ri + nrm - 1
    }

    return {
      x: rx,
      y: ry
    }
  }

  let m = matrix.length,
      n = matrix[0].length,
      res = ''

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      let s = rotateSpiral(m, n, j, i, r)
      res += `${matrix[s.y][s.x]} `
    }
    res += '\n'
  }

  console.log(res)
}

matrixRotation([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], 2)
//matrixRotation([[1, 2, 3, 4], [7, 8, 9, 10], [13, 14, 15, 16], [19, 20, 21, 22], [25, 26, 27, 28]], 7)
//matrixRotation([[1, 1], [1, 1]], 3)