const names = ['alice', 'bob', 'carol', 'dean', 'elise'];

for (let i = 0; i < names.length; i++) {
  const name = names[i];
  console.log(name, i);
}

console.log(); // add blank line to separate output

names.forEach(function(name, index) {
  console.log(name, index);
  // console.log(index);
  // console.log(ogArray);
});

// const myFunc = function(arg1, arg2, arg3) {};

// myFunc();
// myFunc(1);
// myFunc(1, 2);
// myFunc(1, 2, 3);
// myFunc(1, 2, 3, 4, 5, 7, 8, 9, 10);
