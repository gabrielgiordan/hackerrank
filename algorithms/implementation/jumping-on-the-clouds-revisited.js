function jumpingOnClouds(c, k) {

  let e = 100

  for (let i = c.length / k; i-- > 0;) {
    e -= c[i * k] == 1 ? 3 : 1
  }
  
  return e
}

console.log(jumpingOnClouds([0,0,1,0], 2)) // 96
console.log(jumpingOnClouds([0,0,1,0,0,1,1,0], 2)) // 92
console.log(jumpingOnClouds([1,1,1,0,1,1,0,0,0,0], 3)) // 94
