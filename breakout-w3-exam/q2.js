"use strict";

/* Question 02

Write a function which will split an array into two arrays (i.e. partition it).

It will take two parameters, the first is an array of Integer values,
and the second will be a callback which will return a boolean.
If the callback returns true for an element, it should be placed into the left array,
otherwise it should be placed into the right array.

Examples:

- partition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], n => n % 2 === 0)
  => [[2, 4, 6, 8, 10], [1, 3, 5, 7, 9]]
- partition([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5], n => n < 0)
  => [[-5, -4, -3, -2, -1], [0, 1, 2, 3, 4, 5]]

*/

const partition = function(arr, callback) {
  // arr.forEach(element => callback(element) ? left.push(element) : right.push(element));

  // create two arrays: left and right
  const left = [];
  const right = [];

  // loop through the input array
  for (const element of arr) {
    // call the callback with the element from the array AND capture the return value
    const returnVal = callback(element);

    // if the return value is true, add the element to the left array
    if (returnVal) {
      left.push(element);
      continue;
    }

    // else, add the element to the right array
    right.push(element);
  }

  // return an array which contains left and right
  return [left, right];
};

// Don't change below:
module.exports = { partition };
