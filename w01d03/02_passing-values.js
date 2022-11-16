// const changeNum = function(num) {
//   num = 5;
//   console.log('num inside function', num);
// };

// const myNum = 10;

// console.log('before the function call', myNum);
// changeNum(myNum);
// console.log('after the function call', myNum);

// primitives are passed to functions by value; which means a copy is made

const changeMyObj = function(obj) {
  let newObj = obj;
  newObj.name = 'Bob';
  console.log('inside the function', obj);
};

const myObj = {
  name: 'Alice'
};

console.log('before the func call', myObj);
changeMyObj(myObj);
console.log('after the func call', myObj);

// objects are passed by reference; you give the original object to the function
