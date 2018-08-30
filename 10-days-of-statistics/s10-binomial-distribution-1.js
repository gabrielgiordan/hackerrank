function processData(input) {
    //Enter your code here
    input = input.split(' ')

    let b = parseFloat(input[0]),
        g = parseFloat(input[1])

    function combination(n, x) {

        let p = 1

        for (let i = x + 1; i-- > 1;) {
            p *= (n + 1 - i) / i
        }

        return p
    }

    function binomial(x, n, p) {
        return combination(n, x) * Math.pow(p, x) * Math.pow(1 - p, n - x)
    }

    function cumulativeProbability(n, p, i) {
        let s = 0

        for (let j = n + 1; j-- > i;) {
            s += binomial(j, n, p)
        }

        return s
    }

    let p = b / (g + b)

    console.log(cumulativeProbability(6, p, 3).toFixed(3))
}

processData(`1.09 1`)