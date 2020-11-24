import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import FirebaseContext from '../context/firebase/FirebaseContext';

import ProductDetails from '../components/products/ProductDetails';

const StyledTitle = styled.h1`
  color: red;
`;

const Home = () => {
  const { firebase } = useContext(FirebaseContext);

  const [products, setProducts] = useState([]);

  const handleSnapshot = (snapshot) => {
    const firebaseProducts = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setProducts(firebaseProducts);
  };

  const getProducts = () => {
    firebase.db.collection('products').orderBy('created', 'desc').onSnapshot(handleSnapshot);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Layout>
      <StyledTitle>Products</StyledTitle>
      <div>
        <ul>
          {products.map((product) => (
            <ProductDetails key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Home;
