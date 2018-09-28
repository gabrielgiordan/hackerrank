function circularArrayRotation(a, k, queries) {

  let r = []

  for (let i = queries.length; i-- > 0;) {
    r.unshift(a[(a.length - (k % a.length) + queries[i]) % a.length])
  }

  return r
}

console.log(circularArrayRotation([3,4,5], 2, [1,2])) // 5,3
console.log(circularArrayRotation([1,2,3], 2, [0,1,2])) // 2,3,1