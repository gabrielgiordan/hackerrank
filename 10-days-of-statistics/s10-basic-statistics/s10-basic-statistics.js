function processData(input) {
    //Enter your code here
    input = input.split('\n')[1].split(' ').map(Number)

    frequency = []
    input = input.sort((a, b) => {
		if (a === b)
			frequency.push(a)
		return a - b
	})

    let mean = input.reduce((a, b) => a + b) / input.length

    let median = 0
    if (input.length % 2 === 0) { // even
		median = (input[input.length / 2 - 1] + input[input.length / 2]) / 2
    } else { // odd
		median = input[(input.length - 1) / 2]
    }

    let mode = input[0]
    if (frequency.length > 0) {
		mode = frequency.sort((a, b) => {
			let fa = frequency.filter(v => v === a).length
			let fb = frequency.filter(v => v === b).length

			if (fa === fb && a < b) {
				return fa - fb + 1
			}

			return fa - fb
		})
		mode = mode.pop()
	}

    console.log(parseFloat(mean.toFixed(1)) + '\n' + parseFloat(median.toFixed(1)) + '\n' + mode)
}

processData(`10
64630 11735 14216 99233 14470 4978 73429 38120 51135 67060`)