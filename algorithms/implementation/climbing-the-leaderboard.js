function climbingLeaderboard(scores, alice) {

  let r = []

  for (let i = 0, p = 0, a = alice.pop(); i < scores.length; ++i) {
    let s = scores[i]

    if (s != scores[i - 1]) {

      ++p

      while (a >= s) {
        r.unshift(p)
        a = alice.pop()
      }

      if (i == scores.length - 1 && a) {
        r.unshift(...new Array(alice.length + 1).fill(++p))
      }
    }
  }

  return r
}

console.log(climbingLeaderboard([100,90,90,80],[70,80,105]))
console.log(climbingLeaderboard([100,100,50,40,40,20,10],[5,25,50,120]))
console.log(climbingLeaderboard([100,90,90,80,75,60],[50,65,77,90,102]))
console.log(climbingLeaderboard([100,100,90,40,40,10],[10,40,90,100]))
console.log(climbingLeaderboard([46,38,30,28,25,22,15,14,12,6,4],[5,5,6,14,19,20]))
