// Complete the twoStrings function below.
function twoStrings(s1, s2) {
  if (s1.length > s2.length) {
    let t = s2
    s2 = s1
    s1 = t
  }

  let m = {}

  for (let i = s1.length; i-- > 0;)
    m[s1[i]] = true

  for (let i = s2.length; i-- > 0;)
    if (m[s2[i]])
      return "YES"

  return "NO"
}

console.log(twoStrings("hello", "world"))
console.log(twoStrings("world", "hi"))


