

//!Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Examples (input -> output)

// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"


function repeatStr (n, s) {
    var str="";
    for(var i=0; i < n; i++)
      str+=s;
      return str;
    }


    // we can use repeat method
// repeat() returns a new string with a number of copies of a string:
// The repeat() method of String values constructs and returns a new string which contains the specified number of copies of this string, concatenated together. 
// syntax(number to be repeated)
    function repeatStr (n, s) {
        return s.repeat(n)
        }

        // ! Qn-2 ...............
        
// !        Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)


var summation = function (num) {
  // Code here
  let value=0
  for(i=1;i<=num;i++){
    value = value+i
  }
  return value
}

function summation(num) {
  return num * (num + 1) / 2
}


// !Write a function that removes the spaces from the string, then return the resultant string.

function noSpace(x){
  return x.replaceAll(" ",'')
  }

  // OR

  function noSpace(x){
    return x.split(" ").join('')
  }

    // OR
     
    const noSpace = (x)=>{
      return x.replace(/\s/g, '');
    }