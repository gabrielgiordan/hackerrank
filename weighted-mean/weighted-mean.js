function processData(input) {
    //Enter your code here
    input = input.split('\n')
    let l = parseInt(input[0]),
		x = input[1].split(' ').map(Number),
		w = input[2].split(' ').map(Number),
		mxw = 0,
		sw = 0,
		wm = 0

	for (let i = l; i-- > 0;) {
		mxw += x[i] * w[i]
		sw += w[i]
	}

	wm = (mxw / sw).toFixed(1)

	console.log(wm)
} 

let s = '5\n10 40 30 50 20\n1 2 3 4 5'
processData(s)

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
