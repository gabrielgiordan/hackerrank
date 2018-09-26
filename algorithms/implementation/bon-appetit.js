// Complete the bonAppetit function below.
function bonAppetit(bill, k, b) {
  let s = 0
  for (let i = bill.length; i-- > 0;)
    if (i != k)
      s += bill[i]

  s = b - s / 2

  console.log(s == 0 ? 'Bon Appetit' : s)
}

bonAppetit([3,10,2,9], 1, 12)
bonAppetit([3,10,2,9], 1, 7)