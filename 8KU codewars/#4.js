// !Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }

//   OR

class SmallestIntegerFinder {
    findSmallestInt(args) {
      var lowest;
      for(var i in args){
        if(i==0){
          lowest = args[i];
        }
        else {
          if(lowest >= args[i]){
          lowest = args[i];
          }
        }
      }
      return lowest;
      
    }
  }


  // !Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).


  function countSheeps(sheepArray) {
    let sheepCount=0;
     for (i=0;i<sheepArray.length;i++){
       if(sheepArray[i]==true){
         sheepCount++;
       }
     }
    return sheepCount;
  }

  // OR

  function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }

//  OR

function countSheeps(arrayOfSheep) {
  var count = 0;
  
  arrayOfSheep.forEach( function (sheep) {
    if (sheep)
      count++;
  });
  
  return count;
}



// !Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples(Operator, value1, value2) --> output

// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2){
  //Code
   switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            if (value2 !== 0) {
                return value1 / value2;
            } else {
                return "Error: Division by zero!";
            }
        default:
            return "Error: Invalid operation!";
    }
  
}

// OR

function basicOp(operation, value1, value2)
{
  return eval(value1 + operation + value2);
}