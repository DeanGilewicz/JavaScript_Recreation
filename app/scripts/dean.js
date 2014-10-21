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


  // Highest Function - Returns the max value in a list.
  dean.highest = function (x) {
    var max = 0;
    for (i = 0; i < x.length; i ++) {
        if (x[i] > max) {
            max = x[i];
        }
    }
    return max;
  };


  // Lowest Function - Returns the minimum value in a list ** ONLY COMPARES 1st AND SECOND VALUES AT THE MOMENT
  var array = [50, 60, 77, 9, 489, 6, 6234];

  dean.lowest = function (x) {

    // iterate through data and sort data from smallest to largest
    // return 1st value

    var data = [];

    for (i = 0; i < x.length; i++) {

    var current = x[i];

    var next = x[i + 1];

      if (x = null) {
        return "This is not an array";

      } else if (current < next) {
          current = current;
          return current;

      } else {
          current = next;
          return next;
      }
    }
  };


  // Object Function - converts arrays into objects. Pass either a single list of key:value pairs, or a list of keys and a list of values.
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
