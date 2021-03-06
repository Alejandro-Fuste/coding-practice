// Write code to create a function that returns the factorial of `num`

// let factorial = function(num) {
// 	// create total state variable
// 	let total = 1;
// 	// guard clause to return 1 if num = 0
// 	if (num === 0) return 1;
// 	// Use for loop to pass in num as the conditional
// 	for (i = 1; i <= num; i++) {
// 		// multiple numbers inside loop
// 		total *= i;
// 	}
// 	return total;
// };

// console.time('linear solution');
// console.log(factorial(96));
// console.timeEnd('linear solution');

// Solved solution
// var factorial = function(num) {
// 	var result = 1;

// 	for (var i = num; i > 1; i--) {
// 		result = result * i;
// 	}

// 	return result;
// };

// console.time('solved linear solution');
// console.log(factorial(96));
// console.timeEnd('solved linear solution');

// refractored solution
// use right and left variables to perform multiplication
// from both ends

let factorial = function(num) {
	let [ left, right, middle, total ] = [ 1, num, Math.floor(num / 2), 1 ];

	for (i = 1; i < middle; i++) {
		left *= i + 1;
		right *= num - i;
		total = left * right;
	}
	if (num === 0) return 1;
	if (num % 2 != 0) return (middle + 1) * total;
	return total;
};
// console.time('log time solution');
// console.log(factorial(96));
// console.timeEnd('log time solution');

module.exports = factorial;

// if (num % 2 != 0) return (middle + 1) * left * right;
