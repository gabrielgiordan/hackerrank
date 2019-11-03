function organizingContainers(containers) {

  let n = containers.length,
      c = {},
      t = {}

  for (let i = n; i--> 0;) {
    for (let j = n; j--> 0;) {
      let x = containers[i][j]

      c[i] = c[i] ? c[i] + x : x
      t[j] = t[j] ? t[j] + x : x
    }
  }

  for (let i = 0; i < n; i++) {

    let j = 0

    for (j = i; j < n; j++) {
      if (c[i] == t[j]) {
        let tmp = t[j]
        t[j] = t[i]
        t[i] = tmp
        break
      }
    }

    if (j == n)
      return "Impossible"
  }

  return "Possible"
}