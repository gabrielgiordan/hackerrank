// Complete the divisibleSumPairs function below.
function divisibleSumPairs(n, k, ar) {
	let c = 0

	for (let i = n; i-- > 0;) {
		for (let j = i + n; j-- > i + 1;) {
			if (((ar[i] + ar[j]) % k === 0)) {
				++c
			}
		}
	}

	return c
}

console.log(divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6]))
console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]))