'use strict';

// return true if the array is sorted either
// ascending, or descending.
// [] => true
// [42] => true
// [39, 42] => true
// [42, 39] => true
// [1, 2, 3, 4, 5] => true
// [5, 4, 3, 2, 1] => true
// [1, 5, 2] => false

/*
solution #1
*/

// 1. If the items in the array are less equal than 2, the result is always true.
// 2. If not, loop over the array and check 3 items for each, which are previous item, current item and next item.
// 3. If previous item  is less than current item, and curren item is less than next, too => return true.
// 4. Also, if previous item is greater than current item, and curren item is greater than next, too => return true.
// 5. Once the result become false, meaning that items are sorted both ascending and descending, the loop breaks, and the final result will be false.

function isSorted(arr) {
  let result;
  if (arr.length <= 2) {
    result = true;
  } else {
    for (let i = 1; i < arr.length - 1; i++) {
      let prev = arr[i - 1];
      let curr = arr[i];
      let next = arr[i + 1];
      //   console.log(prev, curr, next);
      if ((prev < curr && curr < next) || (prev > curr && curr > next)) {
        result = true;
      } else {
        result = false;
        break;
      }
    }
  }
  if (result === true) {
    return true;
  } else {
    return false;
  }
}

// console.log(isSorted([]));
// console.log(isSorted([42]));
// console.log(isSorted([39, 42]));
// console.log(isSorted([42, 39]));
// console.log(isSorted([1, 2, 3, 4, 5]));
// console.log(isSorted([5, 4, 3, 2, 1]));
// console.log(isSorted([1, 5, 2]));

// true
// up
console.log(isSorted([1, 4, 7]));
// down
console.log(isSorted([10, 5, 3]));

// false
// up, down
console.log(isSorted([1, 4, 7, 2, 1]));
// down, up
console.log(isSorted([5, 4, 3, 10, 11]));

// empty
console.log(isSorted([]));
// same number
console.log(isSorted([1, 1, 1, 1, 1, 1]));

console.log('--------------------');

/* 
solution #2
*/

// 1. Create two functions called inAscending and isDescending.
// 2. In each function, check if one item is less than the next one, greater than the next one.
// 3. Create a function called isSorted, where both results returned in the two functions are true, or either of them is true, the final result will be true. Otherwise, it will be false.

const isAscending = function (arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] < arr[i]) {
      return true;
    }
  }
};

const isDescending = function (arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      return true;
    }
  }
};

const isSorted2 = function (arr) {
  isAscending || isDescending ? true : '';
};

console.log(isSorted2([]));
console.log(isSorted2([42]));
console.log(isSorted2([39, 42]));
console.log(isSorted2([42, 39]));
console.log(isSorted2([1, 2, 3, 4, 5]));
console.log(isSorted2([5, 4, 3, 2, 1]));
console.log(isSorted2([1, 5, 2]));

/*
solution #3
*/

function isSorted3(arr) {
  let isDescending2 = true;
  let isAscending2 = true;
  
  for (let i = 1; i < arr.length; i++) {
    let v1 = arr[i - 1];
    let v2 = arr[i];

    if (v1 < v2) {
      isDescending2 = false;
    }
    if (v1 > v2) {
      isAscending2 = false;
    }
  }
  return isDescending2 || isAscending2;
}

console.log(isSorted3([]));
console.log(isSorted3([42]));
console.log(isSorted3([39, 42]));
console.log(isSorted3([42, 39]));
console.log(isSorted3([1, 2, 3, 4, 5]));
console.log(isSorted3([5, 4, 3, 2, 1]));
console.log(isSorted3([1, 5, 2]));

/*
v1 --> 1, v2 --> 5  isDescending = false
v1 --> 1, v2 --> 5  isAscending = true

v1 --> 5, v2 --> 2  isDescending = false *no change
v1 --> 5, v2 --> 2  isAscending = false 
