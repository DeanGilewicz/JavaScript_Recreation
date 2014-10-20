(function() {

  // Setup my Main Object
  var root = this;
  var dean = {};

  // Set `dean` as global
  root.dean = dean;


  // Map Function - will return a new array. Takes two parameters.
  dean.map = function (arr, funct) {
    if ( Array.isArray(arr) ) {
      if (arr.length > 0) {
        var res = [], i;
        for (i = 0; i < arr.length; i++){
          res[i] = funct(arr[i]);
        }
        return res;
      }
      return [];
    } else {
      return console.log('This is not an array');
    }
  };


  // Now Function - get current time.
  dean.now = function (arr) {
    return new Date().getTime();
  };


  // Greeting Function - returns message based on time of day.
  dean.greeting = function (message) {

    // Check for Time of Day
    var time = new Date(),
        initial_greeting = '',
        time_hours = time.getHours(),
        final_greeting;

    if (time_hours < 12) {
      initial_greeting = 'Good Morning';
    } else if (time_hours >= 12 && time_hours <= 17) {
      initial_greeting = 'Good Afternoon';
    } else if (time_hours > 17 && time_hours <= 21) {
      initial_greeting = 'Good Evening';
    } else if (time_hours > 21 && time_hours <= 24) {
      initial_greeting = 'Good Night';
    }

    final_greeting = (message != null) ? initial_greeting + ', ' + message : initial_greeting;

    return final_greeting;
  };


  // Random Function - Returns a random integer between min and max (inclusive).
  dean.random = function (min, max) {
      if (max == null) {
        max = min;
        min = 0;
      }
      return min + Math.floor(Math.random() * (max - min + 1));
  };


  // First Function - Returns the first element of an array.
  dean.first = function (x) {
      return x[0];
  };


  // Last Function - Returns the last element of an array.
  dean.last = function (x) {
    return x[x.length - 1];
  };


  // Highest Function - Returns the max value in a list
  dean.highest = function (x) {
    var max = 0;
    for (i = 0; i < x.length; i ++) {
        if (x[i] > max) {
            max = x[i];
        }
    }
    return max;
  };


  // Lowest Function - Returns the minimum value in a list ** ONLY COMPARES 1st AND SECOND VALIES AT THE MOMENT
  // var test_array = [50, 60, 77, 9, 489, 6, 6234];
  //
  // dean.lowest = function (x) {
  //
  //   for (i = 0; i < x.length; i++) {
  //     var current = x[i];
  //     var next = x[i + 1];
  //
  //     if (x = null) {
  //       return "This is not an array";
  //
  //     } else if (current > next) {
  //         current = next;
  //         return next;
  //
  //     } else {
  //         next = current;
  //         return current;
  //     }
  //   }
  // };
  //
  // console.log(dean.lowest(test_array));



  // Object Function - converts arrays into objects. Pass either a single list of key:value pairs, of a list of keys. and a list of values
  dean.object = function(list, values) {
      if (list == null) return {};
      var result = {};

      for (var i = 0, length = list.length; i < length; i++) {
        if (values) {
          result[list[i]] = values[i];
        }
        else {
          result[list[i][0]] = list[i][1];
        }
      }
      return result;
    };


  // MaxTwo Function - returns largest of two numbers.
  dean.maxTwo = function (num1, num2) {
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  };


  // MaxThree Function - returns largest of three numbers.
  dean.maxThree = function (num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
      return num1;
    } else if (num2 > num1 && num2 > num3) {
      return num2;
    } else {
      return num3;
    }
  };


}());



/****************************************************************************************************************
Question 3: Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

*****************************************************************************************************************/
// dean.vowel = function (x) {
//   if (x.string === "a" || "e" || "i" || "o" || "u") {
//     return "It is a vowel";
//   }
//   else {
//     return "No vowel here";
//   }
// };
// console.log(vowel(x));


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
