// !We need a function that can transform a string into a number. What ways of achieving this do you know?

var stringToNumber = function(str){
    return parseInt(str);
  }

// OR


var stringToNumber = function(str){
    // put your code here
    return Number(str);
  }

//   ! The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Examples

// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// 2742 --> 28

function century(year) {
    return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
  }


//   OR

const century = year => year % 100 === 0 ? parseInt(year / 100) : parseInt(year / 100) + 1;