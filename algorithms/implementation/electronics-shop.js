function getMoneySpent(keyboards, drives, b) {
  keyboards = keyboards.sort((a, b) => a - b)
  drives = drives.sort((a, b) => b - a)

  let m = -1,
      i = keyboards.length,
      j = drives.length

  while(i-- > 0) {
    while(j >= 0) {
      let v = keyboards[i] + drives[j]

      if (v > b)
        break
      else if (v > m)
        m = v

      --j
    }
  }

  return m
}

console.log(getMoneySpent([3,1],[5,2,8],10))
console.log(getMoneySpent([4],[5],5))
console.log(getMoneySpent([40,50,60],[5,8,12],60))
console.log(getMoneySpent([1, 2, 8],[3, 5, 8],16))