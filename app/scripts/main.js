
/***********************************************************************

1. Pick 4 Underscore methods and create your own version of them

2. Recreate the functionality without using jQuery or any other library

3. Add them to properties of an object you create so I can call the method in the console

**********************************************************************/

var dean = {};


// Random Function - Returns a random integer between min and max (inclusive).

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
	for (i = 0; i < x.length; i++) {
			var min = x[0];
			if (min < x.length) {
					return min;
			} else (

			)
	}
	return min;
};
console.log(dean.lowest(test_array4));


// ._object - converts arrays into objects with matching pair

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


	// map - this function will return a new array. Takes two paramenters - 1. an array, 2. a callback, function

	dean.map = function (arr, funct) {

		var results = [], i;

		for (i = 0; i < arr.length; i++) {

			results[i] = funct(arr[i]);

		}
		return results;
	};


// Examples of new arrays that can be created using dean.map

	var a = [1, 2, 3, 4];

	dean.map(a, function (x) {

		return x + 1;

	});

	var aa = ['Tim', 'Bill', 'Greg'];

	dean.map(aa, function (x) {

		return "Hello, my name is " + x;

	});



/****************************************************************************************************************
Question 1: Define a function max() that takes two numbers as arguments and returns the largest of them.
Use the if-then-else construct available in Javascript.

*****************************************************************************************************************/

var largest_num = function max(num1, num2) {
	if (num1 > num2) {
		return num1;
	} else {
		return num2;
	}
};
console.log(largest_num(12, 7));


/****************************************************************************************************************
Question 2: Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

*****************************************************************************************************************/

var largest_of_three = function maxOfThree(num1, num2, num3) {
	if (num1 > num2 && num1 > num3) {
		return num1;
	} else if (num2 > num1 && num2 > num3) {
		return num2;
	} else {
		return num3;
	}
};
console.log(largest_of_three(1340, 100, 203));


/****************************************************************************************************************
Question 3: Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

*****************************************************************************************************************/

var vowel = function char(letter) {

	if ( letter.length === "a" || "e" || "i" || "o" || "u") {
		return "It is a vowel";
	}
	else {
		return "No vowel here";
	}
};
console.log(vowel("p"));


/****************************************************************************************************************
Question 4: Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".

*****************************************************************************************************************/



/****************************************************************************************************************
Question 5: Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

*****************************************************************************************************************/




/****************************************************************************************************************
Question 6: Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".


*****************************************************************************************************************/


/****************************************************************************************************************
Question 7: Represent a small bilingual lexicon as a Javascript object in the following fashion {"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"} and use it to translate your Christmas cards from English into Swedish.

*****************************************************************************************************************/



/****************************************************************************************************************
Question 8: Write a function findLongestWord() that takes an array of words and returns the length of the longest one.


*****************************************************************************************************************/



/****************************************************************************************************************
Question 9: Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.


*****************************************************************************************************************/




/****************************************************************************************************************
Question 10: Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").


*****************************************************************************************************************/
