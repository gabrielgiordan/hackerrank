function lowestTriangle(base, area){
  return Math.ceil(2 * area / base)
}

console.log(lowestTriangle(2, 2))
console.log(lowestTriangle(17, 100))