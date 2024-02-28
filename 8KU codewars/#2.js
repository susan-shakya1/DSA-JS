// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 12+22+22=91^2 + 2^2 + 2^2 = 912+22+22=9.

// Syntax
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

// [15, 16, 17, 18, 19].reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   10,
// );

// using reduce method
function squareSum(numbers){
    return numbers.reduce((sum,numbers)=>{
      return sum+numbers*numbers
    },0)
    }



    // using for loop
    function squareSum(num){
        let sum = 0;
        for (let i=0;i<num.length;i++){
            sum +=(num[i]*num[i])
        }
        return sum
    }

    //using forEach method for array
    function squareSum(numbers){
        var sum = 0;
        numbers.forEach(function(n) {
          sum += n * n
        });
        return sum;
      }