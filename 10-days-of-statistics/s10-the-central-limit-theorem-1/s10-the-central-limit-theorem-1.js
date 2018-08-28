function processData(input) {
    //Enter your code here
    function erf(x) {
        let a1 =  0.254829592,
            a2 = -0.284496736,
            a3 =  1.421413741,
            a4 = -1.453152027,
            a5 =  1.061405429,
            p  =  0.3275911

        let sign = 1

        if (x < 0)
            sign = -1

        x = Math.abs(x)

        // A&S formula 7.1.26
        let t = 1.0 / (1.0 + p * x)
        let y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x)

        return sign * y
    }
    
    function cumulativeDistribution(m, sd, x) {
        return .5 * (1 + erf((x - m) / (sd * Math.sqrt(2))))
    }

    input = input.split('\n')
    let mx = parseFloat(input[0]),
		n = parseFloat(input[1]),
		m = parseFloat(input[2]),
		s = parseFloat(input[3]),
		sm = n * m,
		ss = Math.sqrt(n) * s

	console.log(cumulativeDistribution(sm, ss, mx).toFixed(4))
}

processData(`9800
49
205
15
`)