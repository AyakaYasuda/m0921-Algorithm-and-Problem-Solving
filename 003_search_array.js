'use strict';

// returns true if the given array contains the given value
// e.g. contains([1,2,3,4,5], 4) -> true
// e.g. contains([1,2,3], 4) -> false

/*
solutions
*/
// 1. Write a function called contains and pass an arr and a valur as parameters.
// 2. In the for loop, examine if every single number is equal to the value. If so, return true.
// 3. The for loop is over, and if all numbers are not equal to the value, then return false.

const contains = function (arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
};

console.log(contains([], 67)); // false
console.log(contains([14, 15, 16, 22, 32], 67)); // false
console.log(contains([14, 15, 16, 22, 32, 67], 67)); // true

// Check if the array is sorted by ascedinding order

/*
solution
*/

// 1. Write a function where compare two numbers in an array.
// 2. If the first one is less than the next one, that means it's not sorted array, so return false.
// 3. Otherwise, finally return true. 

const isSorted = function (arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) return false;
  }
  return true;
};

console.log(isSorted([])) // true
console.log(isSorted([1])) // true
console.log(isSorted([1,2])) // true
console.log(isSorted([1,2,3,4,5])) // true
console.log(isSorted([1,2,4,3,5])) // false
console.log(isSorted([1,2,3,5,4])) // false