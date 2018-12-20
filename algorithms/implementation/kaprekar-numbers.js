function kaprekarNumbers(p, q) {
  function countDigits(x) {
    return (x < 10 ? 1 :   
        (x < 100 ? 2 :   
        (x < 1000 ? 3 :   
        (x < 10000 ? 4 :   
        (x < 100000 ? 5 :   
        (x < 1000000 ? 6 :   
        (x < 10000000 ? 7 :  
        (x < 100000000 ? 8 :  
        (x < 1000000000 ? 9 :  
        (x < 10000000000 ? 10 :
        (x < 100000000000 ? 11 :
        12)))))))))))
  }

  let a = []

  for (let n = q + 1; n-- > p;) {
    let d = countDigits(n),
        n2 = n * n,
        p10 = Math.pow(10, d),
        r = n2 % p10,
        l = (n2 - r) / p10

    if (r + l == n)
      a.unshift(n)
  }

  console.log(a.length > 0 ? a.join(" ") : "INVALID RANGE")
}

kaprekarNumbers(1,100)