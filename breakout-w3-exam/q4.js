"use strict";

/* Question 04 (stretch)

This is a STRETCH QUESTION.

Given a size in bytes convert it to relevant size in B/KB/MB/GB/TB.
Round your answers to two decimal places at most. Use base 10 for sizes.

- 1 B
- 1 kB == 1000 B
- 1 MB == 1000 kB
- 1 GB == 1000 MB
- 1 TB == 1000 GB

More info on these in case you are curious:
https://en.wikipedia.org/wiki/Byte#Unit_symbol

Examples:

- filesize(1)        => "1B"
- filesize(1000)     => "1kB"
- filesize(1000000)  => "1MB"
- filesize(1500000)  => "1.5MB"
- filesize(1250000000) => "1.25GB"
- filesize(9000000000000) => "9TB"

*/

// const filesize = function(bytes) {
//   let anotherVar = bytes;
//   // create an array of possible sizes (all but the catchall/last one)
//   const sizes = ['B', 'kB', 'MB', 'GB'];

//   // loop through the array of sizes
//   for (const size of sizes) {
//     // is bytes less than a 1000
//     if (anotherVar < 1000) {
//       // if yes, return a string containing the number of bytes and the size
//       return `${anotherVar}${size}`;
//     }

//     // if no, divide bytes by 1000
//     // bytes = bytes / 1000;
//     anotherVar /= 1000;
//   }

//   // return a string containing the number of bytes and `TB`
//   return `${anotherVar}TB`;
// };

const filesize = function(bytes) {
  let count = arguments[1];
  if (count === undefined) {
    count = 0;
  }
  
  const units = ['B', 'kB', 'MB', 'GB', 'TB'];
  if ((bytes / 1000) < 1) {
    return `${bytes}${units[count]}`;
  }

  return filesize(bytes / 1000, count + 1);
};


// Don't change below:
module.exports = { filesize };
