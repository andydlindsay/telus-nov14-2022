const users = {
  userRandomID: {
    id: "userRandomID",
    email: "a@a.com",
    password: "1234",
  },
  user2RandomID: {
    id: "user2RandomID",
    email: "user2@example.com",
    password: "5678",
  },
};

// POST /register
app.post('/register', (req, res) => {
  // get the info we have access to
  const email = req.body.email;
  const password = req.body.password;

  // check that the client sent us the info we need
  if (!email || !password) {
    // respond with an error message
  }

  // does a user with this email already exist?
  const foundUser = findUserByEmail(email);
  if (foundUser) {
    // respond with an error that the email is already in use
  }

  // create the user object
  const id = generateRandomId();

  const newUser = {
    id: id,
    email: email,
    password: password
  };

  // add the new user to the users object
  users[id] = newUser;
  console.log(users);

  // set the cookie
  res.cookie('user_id', id);

  // redirect the user
  res.redirect('/urls');
});

app.get('/urls', (req, res) => {
  const userId = req.cookies.user_id;
  const user = users[userId];

  const templateVars = {
    urls: urlDatabase,
    username: req.cookies.username
    // user: users[req.cookies.user_id]
  };

  res.render('urls_index', templateVars);
  // res.render('_header');

  // <%- include('_header') %>


});
