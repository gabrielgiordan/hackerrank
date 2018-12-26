function beautifulTriplets(d, arr) {

  let m = new Map(),
      c = 0

  for (let i = 0; i < arr.length; ++i) {
    let e = arr[i],
        a = m.get(e - d),
        b = m.get(e - 2 * d)

    if (a && b)
      c += a * b

    let v = m.get(e)

    if (v)
      m.set(e, ++v)  
    else
      m.set(e, 1)
  }

  return c
}

console.log(beautifulTriplets(3, [1,6,7,7,8,10,12,13,14,19])) // 2
console.log(beautifulTriplets(1, [2,2,3,4,5])) // 3
console.log(beautifulTriplets(3, [1,2,4,5,7,8,10])) // 3