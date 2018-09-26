function catAndMouse(x, y, z) {
  let a = Math.abs(z - x),
      b = Math.abs(z - y)
  
  return a - b == 0 ? 'Mouse C' : (a < b ? 'Cat A' : 'Cat B')
}

console.log(catAndMouse(2,5,4))
console.log(catAndMouse(1,2,3))
console.log(catAndMouse(1,3,2))