function appendAndDelete(s, t, k) { 
  // Case 1
  if (s.length + t.length <= k)
    return 'Yes'

  // Case 2
  let i = 0

  for (; i < Math.min(s.length, t.length); ++i) {
    if (s.charAt(i) != t.charAt(i))
      break
  }

  let m = (s.length + t.length) - i * 2

  return k >= m && (k - m) % 2 == 0 ? 'Yes' : 'No'
}

console.log(appendAndDelete('abc', 'def', 6))
console.log(appendAndDelete('hackerhappy', 'hackerrank', 9))
console.log(appendAndDelete('aba', 'aba', 7))
console.log(appendAndDelete('ashley', 'ash', 2))