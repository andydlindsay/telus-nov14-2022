// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      // console.log(`Waldo's position is ${i}`);
      found(i);   // execute callback
      // console.log("Found him!");
    }
  }
}

// const actionWhenFound = function(index) {
//   console.log("Found him!", index);
// }

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log("Found him!", index);
});

const username = 'alice';
console.log(username);

console.log('alice');
