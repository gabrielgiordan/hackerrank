function timeInWords(h, m) {

  let w = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"],
      f = { 15: "quarter", 30: "half" },
      t

  if (m == 0)
    return w[h] + " o' clock"
  
  if (m <= 30) {
    t = "past"
  } else {
    t = "to"
    h++
    m = 60 - m
  }

  let ft = f[m]
  if (ft)
    return `${ft} ${t} ${w[h]}`

  return `${m > 20 ? `${w[20]} ${w[m - 20]}` : w[m]} ${m == 1 ? "minute" : "minutes"} ${t} ${w[h]}`
}

console.log(timeInWords(5, 47)) // thirteen minutes to six
console.log(timeInWords(7, 15)) // quarter past seven
console.log(timeInWords(3, 0)) // three o' clock