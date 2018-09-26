function gradingStudents(grades) {
  for (var i = 0; i < grades.length; i++) {
    if (grades[i] >= 38) {
      let m = Math.ceil(grades[i] / 5) * 5
      
      if (m - grades[i] < 3) {
        grades[i] = m
      }
    }
  }

  return grades
}

console.log(gradingStudents([73,67,38,33]))