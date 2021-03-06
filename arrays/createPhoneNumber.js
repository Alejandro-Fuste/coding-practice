/*

Instructions:

Write a function that accepts an array of 10 integers (between 0 and 9), 
that returns a string of those numbers in the form of a phone number. The 
returned format must be correct in order to complete this challenge. Don't 
forget the space after the closing parentheses!

Example:
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"


*/

/*

My Solution:

    function createPhoneNumber(numbers) {
            // use template literal to format numbers into phone numbers
            // use bracket syntax to get values from array

	return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
}


*/

// My Refactored Solution

// use template literal to format numbers into phone numbers
// use bracket syntax to get values from array
const createPhoneNumber = (numbers) =>
	`(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;

console.log(createPhoneNumber([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ]));
console.log(createPhoneNumber([ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]));
console.log(createPhoneNumber([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ]));

/* Other Solution

function createPhoneNumber(n) {
    return "(012) 345-6789".replace(/\d/g, d => n[d])
  }

  */
