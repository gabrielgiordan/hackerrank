function processData(input) {
	//Enter your code here

    input = input.split('\n')
    input[0] = input[0].split(' ')

    let p = input[0][0] / input[0][1],
        n = input[1]
    
    function geometricDistribution(n, p) {
        return Math.pow(1 - p, n - 1) * p
    }
    
    console.log(geometricDistribution(n, p).toFixed(3))
}

processData(`1 3
5`)