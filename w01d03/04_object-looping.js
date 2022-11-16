// ways to loop through arrays
// for..of
// for..in
// c-style loop
// .forEach

// ways to loop through objects
// for..in

const studentOne = {
  name: 'alison',
  lastName: 'wonderland',
  cohort: 'nov 14 2022',
  friends: ['carol', 'dean', 'elise']
};

// for (const key in studentOne) {
//   console.log('key', key);
//   console.log('value', studentOne[key]);
// }

const studentOneKeysArr = Object.keys(studentOne);

for (const key of studentOneKeysArr) {
  console.log(key);
  console.log(studentOne[key]);
}

// studentOne.friends.push('bob');
// console.log(studentOne.friends);
