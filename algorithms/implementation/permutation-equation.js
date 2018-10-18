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

/**
 * Alternative using map
 * with O(1) look-up
 */
function permutationEquationV2(p) {
  const map = {}
  for (let i = 0; i < p.length; i += 1) {
    map[p[i]] = i + 1
  }

  return Object.values(map).map(k => map[k])
}

console.log(permutationEquationV2([5,2,1,3,4])) // 4,2,5,1,3
console.log(permutationEquationV2([2,3,1])) // 2,3,1
console.log(permutationEquationV2([4,3,5,1,2])) // 1,3,5,4,2
