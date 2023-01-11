// mutable = we can change the value
// immutable = we can't change the value

const user = {
  username: 'alice',
  age: 42,
  likes: ['pizza']
};

// const copy = user;
// const copy = JSON.parse(JSON.stringify(user));
const copy = {
  ...user, 
  username: 'Bob',
  likes: [
    ...user.likes,
    'pineapple',
  ]
};

// copy.likes.push('pineapple');

// copy.username = 'Bob';

console.log(user);
console.log(copy);
