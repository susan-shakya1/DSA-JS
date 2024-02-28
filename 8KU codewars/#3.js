

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
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