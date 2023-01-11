import {useState} from 'react';

const Pizza = () => {
  // if (true) {
    const [newTopping, setNewTopping] = useState('');
  // }

  // const [toppings, setToppings] = useState([]);
  // const [crust, setCrust] = useState('stuffed');

  const [pizza, setPizza] = useState({
    toppings: [],
    crust: 'stuffed'
  });

  const addToppingToPizza = () => {
    // toppings.push(newTopping);
    // setToppings([...toppings, newTopping]);

    // setToppings((prev) => {
    //   return [
    //     ...prev,
    //     newTopping
    //   ];
    // });

    setPizza((prev) => {
      return {
        ...prev,
        toppings: [
          ...prev.toppings,
          newTopping
        ]
      };
    });

    setNewTopping('');
  };

  const mappedToppings = pizza.toppings.map((topping, index) => {
    return <p key={index}>{topping}</p>;
  });

  const onCrustChange = (event) => {
    setPizza((prev) => {
      return {
        ...prev,
        crust: event.target.value
      };
    });
  };

  return (
    <div>
      <h2>Create your own pizza!</h2>
      <div>
        <label>Crust type:</label>
        <input 
          value={pizza.crust}
          onChange={onCrustChange}
        />
      </div>
      <div>
        <label>New topping:</label>
        <input 
          value={newTopping}
          onChange={(event) => setNewTopping(event.target.value)}
        />
        <button onClick={addToppingToPizza}>Add to pizza!</button>
      </div>
      { mappedToppings }
    </div>
  );
};

export default Pizza;
