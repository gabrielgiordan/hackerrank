function processData(input) {
    //Enter your code here
	function mean(x, n) {
		return x.reduce((a, b) => a + b) / n
	}

	function covariance(x, y, n) {
		let c = 0,
			mx = mean(x, n),
			my = mean(y, n)

		for (let i = n; i-- > 0;) {
			c += (x[i] - mx) * (y[i] - my)
		}

		c /= n - 1

		return c
	}

	function standardDeviation(x, n) {
		let v = 0,
			m = mean(x, n)
		
		for (let i = n; i-- > 0;)
			v += Math.pow(x[i] - m, 2)

		v /= n - 1

		return Math.sqrt(v)
	}

	function pearsonCorrelationCoefficient(x, y, n) {
		return covariance(x, y, n) / (standardDeviation(x, n) * standardDeviation(y, n))
	}

    input = input.split('\n')

    let n = parseInt(input[0]),
		x = input[1].split(' ').map(Number),
		y = input[2].split(' ').map(Number)

    console.log(pearsonCorrelationCoefficient(x, y, n).toFixed(3))
} 

processData(`10
10 9.8 8 7.8 7.7 7 6 5 4 2
200 44 32 24 22 17 15 12 8 4`)