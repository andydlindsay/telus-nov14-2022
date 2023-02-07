import {Link, useNavigate} from 'react-router-dom';
import {useEffect} from 'react';

const Products = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      // navigate(1); // history.forward()
      navigate(-1); // history.back()
    }, 3000);
  }, []);

  return (
    <div>
      <h2>Products Component</h2>
      <Link to="/products/1">Product #1</Link><br/>
      <Link to="/products/2">Product #2</Link><br/>
      <Link to="/products/3">Product #3</Link><br/>
      <Link to="/products/4">Product #4</Link><br/>
    </div>
  );
};

export default Products;