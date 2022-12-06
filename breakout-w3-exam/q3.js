"use strict";

/* Question 03 (stretch)

This is a STRETCH QUESTION.

Let's revisit Question 01 which had us convert an array of arrays into an object.

This time, make it support nested arrays.

The nested arrays also only contain 2 element arrays to represent key & value:
[key, value]. However, this time we are allowing the value to be another array.

Non-array objects need NOT be supported/handled at all.

Examples:

- deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', 4]]]])
  => { a: 1, b: 2, c: { d: 4 } }
- deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', [['e', 5], ['f', 6]]]]]])
  => { a: 1, b: 2, c: { d: { e: 5, f: 6 } } }

*/

const deepArrayToObject = function(arr) {
  // create an output object
  const output = {};

  // loop through the provided array
  for (const subarray of arr) {
    // console.log('subarray', subarray);
    // pull off the key and value from the subarray
    const key = subarray[0];
    const value = subarray[1];

    // check if the value is an array
    if (Array.isArray(value)) {
      // const returnVal = deepArrayToObject(value);
      // output[key] = returnVal;

      output[key] = deepArrayToObject(value);
    } else {
      // add they key/value pair to the output object
      output[key] = value;
    }
  }

  // return the output object
  return output;
};

// Don't change below:
module.exports = { deepArrayToObject };
