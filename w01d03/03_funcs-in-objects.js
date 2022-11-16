const sayHello = function() {
  console.log('hello there');
};

// return;/

// console.log('did we reach this line?');

// sayHello();

let studentOne = {
  name: 'alison',
  lastName: 'wonderland',
  cohort: 'nov 14 2022',
  sayHello: sayHello,
  fullName: function() {
    console.log(`${this.name} ${this.lastName}`);
  },
  bff: {
    name: 'Bob',
    sayMyFirstName: function(lastName) {
      console.log(`my first name is ${lastName}`);
    }
  }
};

studentOne.bff.sayMyFirstName(studentOne.lastName);

// const copy = studentOne;
// studentOne = null;

// // console.log(studentOne);

// copy.fullName();

// console.log(this);
