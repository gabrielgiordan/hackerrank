function processData(input) {
    //Enter your code here
    function median(arr) {
		let len = arr.length
		if (len % 2 === 0) {
			let i = parseInt(len / 2)
			return (arr[i - 1] + arr[i]) / 2
		} else {
			return arr[parseInt(len / 2)]
		}
	}

    input = input.split('\n')
    let len = parseInt(input[0]),
		x = input[1].split(' ').map(Number),
		f = input[2].split(' ').map(Number),
		s = []

	for (let i = len; i-- > 0;) {
		for (let j = f[i]; j-- > 0;) {
			s.push(x[i])
		}
	}
	s.sort((a, b) => a - b)

	let middle = parseInt(s.length / 2),
		q1 = median(s.slice(0, middle)),
		q2 = median(s),
		q3 = median(s.slice(s.length % 2 === 0 ? middle : middle + 1, s.length)),
		iqr = (q3 - q1).toFixed(1)

	console.log(iqr)
}

processData(`6
6 12 8 10 20 16
5 4 3 2 1 5`)