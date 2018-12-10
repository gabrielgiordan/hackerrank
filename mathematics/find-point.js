function findPoint(px, py, qx, qy) {
  return [2 * qx - px, 2 * qy - py]
}

console.log(findPoint(0,0,1,1))
console.log(findPoint(1,1,2,2))