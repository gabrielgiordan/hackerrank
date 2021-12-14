// function absolutePermutation(n, k) {
//   let arr = []

//   if (k == 0) {
//     for (let i = 1; i <= n; ++i) {
//       arr.push(i)
//     }
//   } else if (n % k > 0) {
//     return [-1]
//   } else
//     for (let i = 1; i <= n; ++i) {
//       arr.push(((i + (n - k - 1)) % n) + 1)
//     }
//   }

//   return arr
// }

let n
let k

// n = 4
// k = 2

// console.log(absolutePermutation(n, k))

// n = 2
// k = 1

// console.log(absolutePermutation(n, k))

// n = 3
// k = 0

// console.log(absolutePermutation(n, k))

// n = 3
// k = 2

// console.log(absolutePermutation(n, k))

n = 100
k = 2

console.log(absolutePermutation(n, k))