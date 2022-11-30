const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const languages = require('./languages.json');
// console.log(languages);

const port = 3001;
const app = express();

const users = {
  abc: {
    id: 'abc',
    email: 'a@a.com',
    password: '1234'
  },
  def: {
    id: 'def',
    email: 'jstamos@mail.com',
    password: '1234'
  }
};

// configure the express app
app.set('view engine', 'ejs');

// middleware
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// GET /protected
app.get('/protected', (req, res) => {
  // check if the user DOES NOT have a user_id cookie
  const userId = req.cookies.user_id;

  if (!userId) {
    // if they don't, respond with an error message
    return res.status(401).send('You must have a cookie to see this page');
  }

  // render the protected page with the user's email
  const user = users[userId];

  const templateVars = {
    email: user.email
  };

  res.render('protected', templateVars);
});

// GET /login
app.get('/login', (req, res) => {
  res.render('login');
});

// POST /login
app.post('/login', (req, res) => {
  // read the information from the request body
  // console.log('req.body', req.body);
  const email = req.body.email;
  const password = req.body.password;

  // are email and/or password undefined
  if (!email || !password) {
    return res.status(400).send('please provide an email AND a password');
  }

  // attempt to find a user with the provided email address
  let foundUser = null;

  for (const userId in users) {
    const user = users[userId];
    if (user.email === email) {
      // we found our user!!
      foundUser = user;
    }
  }

  if (!foundUser) {
    return res.status(400).send('email address does not exist');
  }

  console.log('foundUser', foundUser);

  // check if the passwords DON'T match
  if (foundUser.password !== password) {
    return res.status(400).send('passwords do not match');
  }

  // happy path!! yay! the user is who they say they are!
  res.cookie('user_id', foundUser.id);

  // redirect to the protected page
  res.redirect('/protected');
});

// POST /logout
app.post('/logout', (req, res) => {
  // clear the user_id cookie
  res.clearCookie('user_id');

  // redirect the user to the login page
  res.redirect('/login');
});

// GET /home
app.get('/home', (req, res) => {
  console.log('req.cookies', req.cookies);
  const languagePref = req.cookies.language;

  const templateVars = {
    heading: languages.homeHeadings[languagePref],
    body: languages.homeBodies[languagePref]
  };

  // console.log(templateVars);

  res.render('home', templateVars);
});

// GET /about
app.get('/about', (req, res) => {
  const languagePref = req.cookies.language;

  const templateVars = {
    heading: languages.aboutHeadings[languagePref],
    body: languages.aboutBodies[languagePref]
  };

  res.render('about', templateVars);
});

// GET /languages/:languagePref
app.get('/languages/:languagePref', (req, res) => {
  // get the user's language preference from the request
  const languagePref = req.params.languagePref;

  // set a cookie with the language preference
  res.cookie('language', languagePref);

  // redirect the user to the home page
  res.redirect('/home');
});

// start the server listening
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
