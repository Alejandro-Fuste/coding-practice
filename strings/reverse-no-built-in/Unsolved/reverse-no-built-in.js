// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

var reverse = function(str) {
	let reversed = '';

	for (i = 1; i <= str.length; i++) {
		reversed += str[str.length - i];
	}

	return reversed;
};

console.log(reverse('luke skywalker'));
