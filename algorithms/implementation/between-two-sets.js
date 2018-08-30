function getTotalX(a, b) {

	function lcm(a, b) {
		return a * b / gcd(a, b)
	}

	function gcd(a, b) {
		// Euclid's division algorithm
		let t
		while (b !== 0) {
			t = b
			b = a % b
			a = t
		}
		return a
	}

	let l = a.reduce(lcm),
		g = b.reduce(gcd),
		c = 0

	for (let i = l; i < g + 1; i += l) {
		if (g % i === 0) {
			++c
		}
	}

	return c
}

console.log(getTotalX([2, 6], [24, 36]))
console.log(getTotalX([2, 4], [16, 32, 96]))