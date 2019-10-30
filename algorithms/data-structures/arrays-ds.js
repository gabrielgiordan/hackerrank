function reverseArray(a) {

  let l = a.length,
      l2 = l - 1,
      r = []

  for (let i = l; i--> 0;) {
    r[l2 - i] = a[i]
  }

  return r
}