'use strict';
/*
What's an anagram?
'hello', 'olleh' --> true
'hello', 'olle' --> false
*/

/*
charMap looks like...
h:1,
e:1,
l:2,
o:1
*/

/*
solution
*/
// 1. Create charMap function, and in there create a temporry object to store the number of each character that a string has as a value.
// 2. Create anagrma function, and excute charMap function and create two objects for each parameter.
// 3. In anagram function, if the number of keys are defferent to the others, return false. Also if the value (the number of character) is defferent each other, return the false.

const anagram = function (sideA, sideB) {
  const mapSideA = charMap(sideA);
  const mapSideB = charMap(sideB);
  console.log(mapSideA);
  console.log(mapSideB);

  if (Object.keys(mapSideA).length !== Object.keys(mapSideB).length) {
    console.log('throw 1');
    return false;
  }

  for (let char in mapSideA) {
    if (mapSideA[char] !== mapSideB[char]) {
      console.log('throw 2');
      return false;
    }
  }

  return true;
};

const charMap = function (str) {
  const tempCharObj = {};
  let stringArr = str.replace(/[\W]/g,'').toLowerCase();

  for (const char of stringArr) {
    if (tempCharObj[char]) {
      tempCharObj[char]++;
    } else {
      tempCharObj[char] = 1;
    }
  }
  return tempCharObj;
};

console.log(anagram('hello', 'eollh'));
console.log(anagram('Eleven plus two', 'twelve plus one'));
console.log(anagram('bad credit', 'debit card'));
console.log(anagram('A gentleman', 'Elegant man'));
console.log(anagram('Tom marvolo riddle', 'i am Lord voldemort'));
