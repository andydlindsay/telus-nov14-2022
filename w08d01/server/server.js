const express = require('express');
const morgan = require('morgan');
// const cors = require('cors');

const app = express();
const port = process.env.PORT || 54321;

// middleware
app.use(morgan('dev')); // (req, res, next) => {}
// app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(cors());
app.use(express.static('../client/build'));

// database
const pizzas = [
  {
    id: 'abc',
    cheeseType: 'mozza',
    size: 'large',
    flavour: 'Canadian',
    sauceType: 'tomato',
    crustType: 'deep dish',
    toppings: 'lots',
  },
  {
    id: 'def',
    cheeseType: 'cottage',
    size: 'medium',
    flavour: 'Hamburger',
    sauceType: 'tomato',
    crustType: 'flat',
    toppings: 'pineapple, pineapple',
  },
  {
    id: 'ghi',
    cheeseType: 'cheddar',
    size: 'small',
    flavour: 'Perogi',
    sauceType: 'tomato',
    crustType: 'regular',
    toppings: 'potato, bacon, sour cream',
  },
]; // Object.values(pizzas)

// routes
app.get('/pizzas', (req, res) => {
  res.json(pizzas);
});

app.post('/pizzas', (req, res) => {
  const newId = Math.random().toString(36).substring(2, 5);

  const newPizza = {
    id: newId,
    cheeseType: req.body.cheeseType,
    size: req.body.size,
    flavour: req.body.flavour,
    sauceType: req.body.sauceType,
    crustType: req.body.crustType,
    toppings: req.body.toppings,
  };

  pizzas.push(newPizza);

  res.json(newPizza);
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
