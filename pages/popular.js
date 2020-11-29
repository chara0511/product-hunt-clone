import React, { useContext } from 'react';
import Layout from '../components/layout/Layout';
import ProductDetails from '../components/products/ProductDetails';
import { SearchContext } from '../context/search/searchContext';
import useProduct from '../hooks/useProduct';

const Popular = () => {
  const { searchMode } = useContext(SearchContext);
  const { products } = useProduct('votes');

  return (
    <Layout title="popular" zindex={searchMode ? '-1' : '99'}>
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

export default Popular;
