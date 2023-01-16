# W08D01 - Bootcamp Review

### To Do
- [x] Build an Express app from scratch
- [x] Test the Express app with Postman
- [x] Build a React app from scratch
- [x] Connect React to Express
- [x] CORS
- [x] `npm run build` command

CRUD/BREAD app

pizza
 - cheeseType
 - size
 - flavour
 - sauceType
 - crustType
 - toppings?

div
article
section
aside

PUT - replaces a resource completely
PATCH - replaces a piece of resource
POST - resource creation

when to use { () => setDay('Monday') } or just { setDay }

```js
// parent
<DayListItem setDay={props.setDay} />
<DayListItem onClick={() => props.setDay('Tuesday')} />

// child
<button onClick={props.onClick}>Click me</button>
```


### Components
<!-- - state: pizzas -->
- App - state: pizzas
  - PizzaList - props: pizzas
    - PizzaListItem - props: pizza
  - NewPizzaForm - props: pizzas

<!-- useContext (w11) -->


css
scss => superset of css
nesting, variables, partials, mixins, extends

PizzaListItem.scss => sass compiler => PizzaListItem.css

props.pizzas && props.pizzas.map
