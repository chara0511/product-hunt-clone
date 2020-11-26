import styled from 'styled-components';
import Layout from '../components/layout/Layout';

import ProductDetails from '../components/products/ProductDetails';
import useProduct from '../hooks/useProduct';

const StyledTitle = styled.h1`
  color: red;
`;

const Home = () => {
  const { products } = useProduct('created');

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
