// Complete the compareTriplets function below.
function compareTriplets(a, b) {
  let ap = 0,
    bp = 0

  for (let i = a.length; i-- > 0;) {
    if (a[i] > b[i])
      ap++
    else if (a[i] < b[i])
      bp++
  }

  return [ap, bp]
}

a = '5 6 7'.split(' ').map(a => parseInt(a))
b = '3 6 10'.split(' ').map(b => parseInt(b))

console.log(compareTriplets(a, b))
