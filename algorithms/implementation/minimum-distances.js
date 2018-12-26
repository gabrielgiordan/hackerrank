function minimumDistances(a) {
  let min = Number.MAX_SAFE_INTEGER,
      m = new Map()

  for (let i = a.length; i-- > 0;) {
    let e = a[i],
        l = m.get(e)

    if (l) 
      min = Math.min(min, Math.abs(i - l))

    m.set(e, i)
  }

  return min == Number.MAX_SAFE_INTEGER ? -1 : min
}

console.log(minimumDistances([3,2,1,2,3])) // 2
console.log(minimumDistances([7,1,3,4,1,7])) // 3