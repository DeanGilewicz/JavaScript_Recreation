
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


// Min Function - Returns the minimum value in a list

var test_array4 = [423, 32, 77, 3, 489, 49, 6234];

dean.lowest = function (x) {
	var min = 0;
	for (i = 0; i < x.length; i ++) {
			if (x[i] < min) {
					min = x[i];
			}
	}
	return min;
};
console.log(dean.lowest(test_array4));


// Size Function - Returns the number of values in a list

var test_array5 = {temp:'cool', age:20, color:'blue', street:99, food:'ice cream', pets:13, holiday:'halloween'};

dean.value_num = function (obj) {
	var num = obj.value;
	for (i = 0; i < obj.length; i ++) {
		return num;
	}
}

console.log(dean.value_num(test_array5));


// ._object - converts arrays into objects

var ironYard = ["Tim","Wendy","Richard", "Chelsea", "Emory", "Victoria", "John", "Joanna","Max", "Dean"];
var age = ["30yrs", "25yrs", "24yrs", "23yrs", "22yrs", "31yrs", "29yrs", "35yrs", "27yrs", "30yrs"];

dean.object = function( ironYard, age) {
    if (ironYard == null) return {};
    var result = {};

    for (var i = 0, length = ironYard.length; i < length; i++) {
      if (age) {

        result[ironYard[i]] = age[i];
      }

      else {
        result[ironYard[i][0]] = ironYard[i][1];
      }
    }
    return result;
  };

  var object_to_array = dean.object(ironYard, age);

  console.log(object_to_array);
