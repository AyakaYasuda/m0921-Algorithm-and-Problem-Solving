'use strict';

// 1. Create a function called sumDalta to sum up every delta
// 2. At first, store 0 in a variable called total
// 3. Loop over an array and contain every delta in the delta variable
// 4. In each iteration, delta is added to the total
// 5. Finally, return the total

const sumDelta = function (arr) {
  let total = 0;
  for (let i = 1; i < arr.length; i++) {
    const delta = Math.abs(arr[i - 1] - arr[i]);
    total += delta;
  }
  return total;
};

console.log(sumDelta([]));
console.log(sumDelta([8]));
console.log(sumDelta([8,10]));
console.log(sumDelta([8,10,18,19]));
