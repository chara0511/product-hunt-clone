import Layout from '../components/layout/Layout';

import ProductDetails from '../components/products/ProductDetails';
import useProduct from '../hooks/useProduct';

const Home = () => {
  const { products } = useProduct('created');

  return (
    <Layout title="Today">
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
