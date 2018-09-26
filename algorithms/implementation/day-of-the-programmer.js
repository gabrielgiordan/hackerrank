// Complete the dayOfProgrammer function below.
function dayOfProgrammer(year) {

  let m = 9,
      d = 243,
      leap = year % 4 === 0 // Julian calendar leap year

  if (year === 1918) // transition between calendars
    d -= 13
  else if (year > 1918) // Gregorian calendar
    leap = year % 400 === 0 || leap && year % 100 !== 0 // Gregorian calendar leap year

  if (leap) 
    d += 1

  return `${256 - d}.0${m}.${year}`
}

console.log(dayOfProgrammer(1918))