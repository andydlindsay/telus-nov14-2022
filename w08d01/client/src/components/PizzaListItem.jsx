import './PizzaListItem.scss';

const PizzaListItem = (props) => {
  // cheeseType, size, flavour, id

  return (
    <div className="pizza-list-item">
      <h2>Flavour: {props.flavour} (size: {props.size})</h2>
      <h4>Cheese Type: {props.cheeseType}</h4>
      <h4>Id: {props.id}</h4>
    </div>
  );
};

export default PizzaListItem;
