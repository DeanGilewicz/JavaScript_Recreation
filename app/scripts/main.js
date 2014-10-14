
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


// Last Function - Returns the last element of an array.


var test_array2 = ['Steve', 'Lee', 'Jane', 'Sue', 'Graham', 'Pam', 'Heather', 'John'];

dean.last = function () {

	return test_array2[test_array2.length - 1];
}

console.log(dean.last(test_array2));


// Max Function - Returns the max value in a list

var test_array3 = [54, 32, 231253, 2341, 12, 4, 5875, 3];

dean.highest = function (x) {
	var max = 0;
	for (i = 0; i < x.length; i ++) {
			if (x[i] > max) {
					max = x[i];
			}
	}
	return max;
};
console.log(dean.highest(test_array3));
