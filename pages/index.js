import { useContext } from 'react';
import Layout from '../components/layout/Layout';

import ProductDetails from '../components/products/ProductDetails';
import { SearchContext } from '../context/search/searchContext';
import useProduct from '../hooks/useProduct';

const Home = () => {
  const { searchMode } = useContext(SearchContext);
  const { products } = useProduct('created');

  return (
    <Layout title="today" zindex={searchMode ? '-1' : '99'}>
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
