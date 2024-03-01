// // !User
//! Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// !The output should be two capital letters with a dot separating them.


function abbrevName(name){

    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}


//! Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.
function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0
  }

// OR

function isDivisible(n, x, y) {
    if (n % x === 0 && n % y === 0) {
      return true;
    }
    return false;
  }