let d = [1, 2, 3, 4, 5, 6]
let c = 0
let p = 0

for (var i = 0; i < d.length; i++) {
	for (var j = 0; j < d.length; j++) {
		if (d[i] !== d[j] && d[i] + d[j] === 6) {
			console.log(d[i] + ' + ' + d[j])
			c++
		}
		p++
	}
}

function gcd(a, b) {
  if (!b) return a
  return gcd(b, a % b)
}

console.log('Total number of possible outcomes: ' + p)
console.log('Total no of favourable outcomes: ' + c)

console.log(c + '/' + p)

let g = gcd(c, p)

console.log(c / g + '/' + p / g)
console.log(((c / g) / (p / g) * 100).toFixed(2) + '%')