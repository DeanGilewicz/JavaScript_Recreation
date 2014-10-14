
/***********************************************************************

1. Pick 4 Underscore methods and create your own version of them

2. Recreate the functionality without using jQuery or any other library

3. Add them to properties of an object you create so I can call the method in the console

**********************************************************************/

// Random Function - Returns a random integer between min and max (inclusive).

var dean = {};

dean.random = function (min, max) {
	if (max == null) {
		max = min;
		min = 0;
	}
	return min + Math.floor(Math.random() * (max - min + 1));
};

dean.random();



// First Function - Returns the first element of an array.

var test_array1 = ['hello', 2, 'twitter', 7, 'apple', 12];

dean.first = function (x) {
		return x[0];
}

console.log(dean.first(test_array1));
