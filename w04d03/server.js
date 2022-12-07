const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 8080;

const characters = [
  {
    id: 'abc',
    name: 'Pippin',
    saying: 'what about second breakfast'
  },
  {
    id: 'def',
    name: 'Boromir',
    saying: 'one does not simply walk into Mordor'
  },
  {
    id: 'ghi',
    name: 'Gandalf',
    saying: 'fool of a Took'
  },
];

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

// GET /characters
app.get('/characters', (req, res) => {
  res.json(characters);
});

// POST /characters
app.post('/characters', (req, res) => {
  const id = Math.random().toString(36).substring(2, 5);
  const saying = req.body.saying;
  const name = req.body.name;

  const newCharacter = {
    id,
    saying,
    name
  };

  characters.push(newCharacter);

  res.json(newCharacter);
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
