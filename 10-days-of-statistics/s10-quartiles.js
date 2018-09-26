function processData(input) {
  //Enter your code here

  function median(arr) {
    let len = arr.length
    if (len % 2 === 0) {
      let i = parseInt(len / 2)
      return parseInt((arr[i - 1] + arr[i]) / 2)
    } else {
      return arr[parseInt(len / 2)]
    }
  }

  input = input.split('\n')
  let len = parseInt(input[0]),
    arr = input[1].split(' ').map(Number).sort((a, b) => a - b)
  middle = parseInt(len / 2)

  let q1 = median(arr.slice(0, middle)),
    q2 = median(arr),
    q3 = median(arr.slice(len % 2 === 0 ? middle : middle + 1, len))

  console.log(q1 + "\n" + q2 + "\n" + q3)
}

processData(`9
3 7 8 5 12 14 21 13 18`)