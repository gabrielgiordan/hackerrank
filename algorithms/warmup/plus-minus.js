// Complete the plusMinus function below.
function plusMinus(arr) {

  let p = 0, 
    n = 0, 
    z = 0

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      p++
    } else if (arr[i] < 0) {
      n++
    } else {
      z++
    }
  }

  console.log((p / arr.length).toFixed(6))
  console.log((n / arr.length).toFixed(6))
  console.log((z / arr.length).toFixed(6))
}

plusMinus([-4,3,-9,0,4,1])