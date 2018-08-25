'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the minimumBribes function below.
function minimumBribes(q) {

    let n = q.length
    
    let c = 0
    for (let p = n; p-- > 0;) {
        if (q[p] - (p + 1) > 2) {
            c = "Too chaotic"
            break;
        }
        for (let j = Math.max(q[p]) - 2; j < p; j++) {
            if (q[j] > q[p])
                c++
        }
    }
    console.log(c)    
}

let s = '2\n5\n2 1 5 3 4\n5\n2 5 1 3 4'

minimumBribes(s)

// Complete the minimumBribes function below.
/*
function minimumBribes(q) {

    q = q.split('\n')
    let tn = q[0],
        t = []

    for (let i = tn; i-- > 0;) {
        let j = tn * (i + 1)
        let n = parseInt(q[j - 1])
        let x = q[j].split(' ').map(Number)

        t[i] = [n, x]
    }

    for (let i = 0; i < tn; i++) {
        let n = t[i][0]
        let x = t[i][1]
        
        let c = 0
        for (let p = n; p-- > 0;) {
            if (x[p] - (p + 1) > 2) {
                c = "Too chaotic"
                break;
            }
            for (let j = Math.max(x[p]) - 2; j < p; j++) {
                if (x[j] > x[p])
                    c++
            }
        }
        console.log(c)
    }
    
}
*/

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}