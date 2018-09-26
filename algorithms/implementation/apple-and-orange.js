// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {

  function count(s, t, f, arr) {
    let c = 0

    for (var i = 0; i < arr.length; i++) {
      let d = f + arr[i]
      if (d >= s && d <= t) {
        ++c
      }
    }
    return c
  }

  console.log(count(s, t, a, apples))
  console.log(count(s, t, b, oranges))
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])