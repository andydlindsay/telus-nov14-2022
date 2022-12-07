console.log('hello');

const url = 'http://my-json-server.typicode.com/andydlindsay/chef-andy/recipes';

// $.ajax({
//   method: 'GET',
//   url: url,
//   success: (response) => {
//     console.log(response);
//   }
// });

// $.get(url, (response) => {
//   console.log('callback response', response);
// });

$.get(url)
  .then((response) => {
    console.log('promise', response);
  });

