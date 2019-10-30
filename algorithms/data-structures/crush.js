function arrayManipulation(n, queries) {

  let r = {},
      t = 0,
      m = 0
      
  for (let i = queries.length; i--> 0;) {
    let [a, b, k] = queries[i]

    if (r[--a])
      r[a] += k
    else 
      r[a] = k

    if (b < n)
      if (r[b])
        r[b] -= k
      else
        r[b] = -k
  }

  for (const v of Object.values(r)) {
    t += v

    if (t > m) 
      m = t
  }
  
  return m
}