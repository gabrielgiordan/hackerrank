function processData(input) {
    input = input.split('\n')
    
    let l = parseFloat(input[0]),
        k = parseFloat(input[1])
    
    //Enter your code here
    function factorial(n) {
        if (n <= 1)
            return 1

        for (let i = n; i-- > 1;)
            n *= i

        return n
    }
    
    function poissonDistribution(l, k) {
        return (Math.pow(l, k) * Math.pow(Math.E, -l)) / factorial(k)
    }
    
    console.log(poissonDistribution(l, k).toFixed(3))
} 

processData(`2.5
5`)