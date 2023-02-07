import Products from './components/Products';
import Product from './components/Product';
import Home from './components/Home';
import About from './components/About';

import {Link, Route, Routes} from 'react-router-dom';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <h2>React Router Demo</h2>
      <Link to="/">Home </Link>
      <Link to="/about">About </Link>
      <Link to="/products">Products </Link>

      <Routes>
        <Route path="*" element={<h2>Page not found</h2>} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hidden" element={<h2>This is a secret page</h2>} />
      </Routes>
    </div>
  );
};

export default App;
