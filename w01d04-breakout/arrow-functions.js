// added with ES6 in 2015
// 1. no function keyword needed
// 2. if only one argument, no parens needed
// 3. if only one line of code, no curly braces needed
// 4. if there are no curly braces, then the line of code is implicitly returned
// 5. arrow funcs do not create the `this` variable

const sayHello1 = function(name) {
  return `hello there ${name}`;
};

const sayHello2 = name => `hello there ${name}`;

const returnVal = sayHello2('alice');
console.log('returnVal', returnVal);

// if (!loggedIn) console.log('not logged in');

// if (err) throw err;
