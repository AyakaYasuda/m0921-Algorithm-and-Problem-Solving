'use strict';

// multiples of 3, print "fizz"
// multiples of 5, print "buzz"
// mutiples of both 3 and 5, print "fizzbuzz"

/*
solution
*/
// 1. Create a function called fizzbuzz.
// 2. In the function, the first thing to examine is if it's mitiples of both 3 and 5 by using the modulus operator. If true, return fizzbuzz.
// 3. Next, examine if it's multiples of 3. If true, return fizz.
// 4. Next, examine if it's multiples of 5. If true, return buzz.
// 5. Finally, if it's not either of them, return the number.

const fizzbuzz = function (n) {
  for (let i = 1; i < n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
};

fizzbuzz(60);
