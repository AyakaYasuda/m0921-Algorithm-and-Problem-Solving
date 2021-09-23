'use strict';

// reverse a given string

/*
solution
*/

// solution #1
// Use specific methods to reverse the string.

const reverse1 = function (str) {
  return str.split('').reverse().join('');
};
console.log(reverse1('hello'));

// solution #2
// 1. Create the function called reverse2.
// 2. Store an enpty value in the variable called reversed.
// 3. Loop over the string and add every element to the beginning of reserved string, so that new character comes before the previous characters.
// 4. Finally, return the reserved.
const reverse2 = function (str) {
  let reversed = '';
  for (let char of str) {
    reversed = char + reversed;

    // 0 ---> h
    // 1 ---> h = e + h
    // 2 ---> eh = l + eh
    // 3 ---> leh = l + leh
    // 4 ---> lleh = o + lleh
    // output --> olleh
  }
  return reversed;
};
console.log(reverse2('hello'));

// solution #3
// 1. In the function, create an empty array and use unshift method to add the character to the beggining of the array.
// 2. Before returning the result, convert the reversed array to string.
const reverse3 = function (str) {
  let reversedStrArr = [];
  for (let character of str) {
    reversedStrArr.unshift(character);
  }
  const reservedStr = reversedStrArr.join('');
  return reservedStr;
};
console.log(reverse3('hello'));
