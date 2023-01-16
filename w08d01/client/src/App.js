import './App.css';
import {useState, useEffect} from 'react';
import PizzaList from './components/PizzaList';
import axios from 'axios';

const App = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get('/pizzas')
      .then((response) => {
        setPizzas(response.data);
      });
  }, []);

  return (
    <div className="App">
      <h2>Pat's Pizza Place</h2>
      <PizzaList pizzas={pizzas} />
    </div>
  );
};

export default App;
