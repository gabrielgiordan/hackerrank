'use strict';

const fs = require('fs');

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

// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let hourglasses = []

    for (let i = 0; i + 2 < arr.length; i++) {
        hourglasses[i] = []

        for (let j = 0; j + 2 < arr[i].length; j++) {
            hourglasses[i][j] = []

            for (let k = j, l = 0; k < j + 3, l < 3; k++, l++) {
                hourglasses[i][j][l] = arr[i][k]
                hourglasses[i][j][l + 1] = arr[i + 1][k - 1]

                for (let h = 3; h-- > 0;) {
                    hourglasses[i][j][l + 4 - h] = arr[i + 2][k - h]
                }
            }
        }
    }

    let maxSum = null

    for (let i = 0; i < hourglasses.length; i++) { 
        for (let j = 0; j < hourglasses.length; j++) {
            let sum = hourglasses[i][j].reduce((a, b) => a + b)
            if (maxSum < sum || maxSum === null) {
                maxSum = sum
            }
        }
    }

    return maxSum
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}
