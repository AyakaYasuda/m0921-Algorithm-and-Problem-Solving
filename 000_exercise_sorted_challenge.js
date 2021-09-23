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

// solution #1
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
// no sort
console.log(isSorted([1, 1, 1, 1, 1, 1]));

console.log('--------------------')

// solution #2
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

const isSorted2 = function() {
    isAscending || isDescending ? true : '';
}

console.log(isSorted([]));
console.log(isSorted([42]));
console.log(isSorted([39, 42]));
console.log(isSorted([42, 39]));
console.log(isSorted([1, 2, 3, 4, 5]));
console.log(isSorted([5, 4, 3, 2, 1]));
console.log(isSorted([1, 5, 2]));


