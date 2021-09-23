'use strict';

// examine all numbers through the array and return the biggest delta

/*
solution
*/
// 1. Set valuable to store the first delta supposing that it's the biggest delta
// 2. Loop over the array and store the delta between each two numbers in delta valuable
// 3. Compare delta and max_delta in each iteration. If delta is greater than current max_delta, max_delta will be replaced with delta.
// 4. Finally, print the max_delta in console.

const arr = [32, 30, 15, 16, 18, 40, 35];

let max_delta = arr[0] - arr[1];

for (let i = 1; i < arr.length; i++) {
  let delta = Math.abs(arr[i - 1] - arr[i]);

  console.log('comparing', arr[i - 1], arr[i], '\ndelta', delta);

  if (max_delta < delta) {
    max_delta = delta;
  }
}
console.log(max_delta);
