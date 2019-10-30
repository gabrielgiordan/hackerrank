function matchingStrings(strings, queries) {
  
  let cs = {},
      ql = queries.length,
      res = []

  for (let i = strings.length; i-- > 0;) {
    let c = cs[strings[i]]
    cs[strings[i]] = c ? ++c : 1
  }

  for (let i = 0; i < ql; ++i) {
    let c = cs[queries[i]]
    res.push(c ? c : 0)
  }

  return res
}