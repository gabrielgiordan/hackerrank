function permutationEquation(p) {
  let r = []

  for (let i = p.length + 1; i-- > 1;) {
    r.unshift(p.indexOf(p.indexOf(i) + 1) + 1)
  }

  return r
}

console.log(permutationEquation([5,2,1,3,4])) // 4,2,5,1,3
console.log(permutationEquation([2,3,1])) // 2,3,1
console.log(permutationEquation([4,3,5,1,2])) // 1,3,5,4,2