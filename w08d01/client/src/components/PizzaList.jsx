import PizzaListItem from './PizzaListItem';

const PizzaList = (props) => {
  // props.pizzas

  const mappedPizzas = props.pizzas.map((pizza) => {
    return <PizzaListItem 
      key={pizza.id}
      id={pizza.id} 
      flavour={pizza.flavour}
      cheeseType={pizza.cheeseType}
      size={pizza.size} 
    />;
  });

  return (
    <div>
      { mappedPizzas }
    </div>
  );
};

export default PizzaList;
