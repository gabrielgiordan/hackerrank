function angryProfessor(k, a) {
  
  for (let i = a.length; i-- > 0;) {
    if (a[i] <= 0) {
      --k
    }
  }

  return k <= 0 ? 'NO' : 'YES'
}

console.log(angryProfessor(4, [ -1, -1, 0, 0, 1, 1 ]))
console.log(angryProfessor(5, [ -1, -1, 0, 0, 1, 1 ]))
console.log(angryProfessor(3, [ -1, -3, 4, 2 ]))
console.log(angryProfessor(2, [ 0, -1, 2, 1 ]))