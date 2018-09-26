function timeConversion(s) {
  let hh = parseInt(s.slice(0, 2)),
    f = s.slice(8, 10)
  s = s.slice(0, 8)

  if (f === 'PM') {
    hh += hh !== 12 ? 12 : 0
  } else if (hh === 12) {
    hh = 0
  }

  return (hh > 9 ? hh : '0' + hh) + s.slice(2, 8)
}

console.log(timeConversion('07:05:45PM'))