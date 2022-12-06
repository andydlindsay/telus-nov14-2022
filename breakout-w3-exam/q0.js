"use strict";

/* Question 00

Convert a given object into an array of arrays.

Given an object, create an array which contains arrays with the key/value pairs.

To keep this simple, the values will only be primitive types (number, string, etc.) and not other objects or array.

Furthermore, assume that the input is always clean/accurate. In other words, don't worry about handling edge cases.

Examples

- objectToArray({ a: 1, b: 2, c: 3 })
  => [['a', 1], ['b', 2], ['c', 3]]
- objectToArray({name: 'Dave', role: 'Instructor', yearsOfExperience: 10})
  => [['name', 'Dave'], ['role', 'Instructor'], ['yearsOfExperience', 10]]

*/

const objectToArray = function(obj) {
  // return Object.entries(obj);

  // create the output array
  const output = [];

  // loop through the provided object
  for (const key in obj) {
    // pull off the key and value from the object
    const value = obj[key];

    // create a subarray with [key, value]
    const subarray = [key, value];
    // console.log(subarray);

    // output.push([key, obj[key]])

    // add the subarray to the output array
    output.push(subarray);
  }

  // return the output array
  return output;
};

// Don't change below:
module.exports = { objectToArray };
