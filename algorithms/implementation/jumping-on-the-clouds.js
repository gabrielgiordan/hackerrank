function jumpingOnClouds(c) {

  let j = 0;

  for (let i = c.length; i-- > 1; ++j) {
    if (c[i - 2] == 0)
      --i
  }

  return j
}

console.log(jumpingOnClouds([0,1,0,0,0,1,0])) // 3
console.log(jumpingOnClouds([0,0,1,0,0,1,0])) // 4
console.log(jumpingOnClouds([0,0,0,0,1,0])) // 3