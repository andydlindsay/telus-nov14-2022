import {useParams, Navigate} from 'react-router-dom';
import {useEffect} from 'react';

const Product = () => {
  const params = useParams();
  // console.log(params);

  // useEffect(() => {
  //   axios.get(`/products/${params.productId}`)
  //     .then(data => setProduct(data.data));
  // }, [params.productId]);

  if (true) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h2>Product Component for Product Number {params.productId}</h2>
    </div>
  );
};

export default Product;
