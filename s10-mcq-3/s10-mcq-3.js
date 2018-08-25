// x, y, z
let arr = [[4, 3],  [5, 4], [4, 4]]

function gcd(a, b) {
  if (!b) return a
  return gcd(b, a % b)
}

function probability(arr) {
	
	let r = []

	for (let i = 0; i < arr.length; i++) {

		let s = arr[i].reduce((a, b) => a + b)
		r[i] = []

		for (let j = 0; j < arr[i].length; j++) {
			let g = gcd(arr[i][j], s)

			r[i][j] = [arr[i][j] / g, s / g]
		}
	}

	let a = [[],[]]

	for (let i = 0; i < r.length; i++) {

		a[0][i] = []
		a[1][i] = []

		for (let j = 0; j < r.length; j++) {

			// 0 0 1  0 1 0  1 0 0  
			// x y z  x y z  x y z

			let k = i - j === 0 ? 1 : 0
			
			a[0][i][j] = r[j][k][0]
			a[1][i][j] = r[j][k][1]
		}

		a[0][i] = a[0][i].reduce((a, b) => a * b)
		a[1][i] = a[1][i].reduce((a, b) => a * b)
	}

	let ra = a[0].reduce((a, b) => a + b),
		rb = a[1][0],
		gr = gcd(ra, rb)
		r = ra / gr + '/' + rb / gr

	return r
}

console.log(probability(arr))

