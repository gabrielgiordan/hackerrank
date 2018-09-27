function saveThePrisoner(n, m, s) {
  return (m + s - 2) % n + 1
}

console.log(saveThePrisoner(4,6,2))
console.log(saveThePrisoner(5,2,1))
console.log(saveThePrisoner(5,2,2))