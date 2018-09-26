// Complete the sockMerchant function below.
function sockMerchant(n, ar) { // O(log n) solution
  let p = 0

  for (let i = n; i-- > 0;) {
    let c = ar[i]
    ar.splice(i, 1)
    let of = ar.indexOf(c)

    if (of != -1) {
      ar.splice(of, 1)
      --i
      ++p
    }
  }

  return p
}

console.log(sockMerchant(9, [10,20,20,10,10,30,50,10,20]))