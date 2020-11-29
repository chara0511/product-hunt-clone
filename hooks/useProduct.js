import { useState, useEffect, useContext } from 'react';
import FirebaseContext from '../context/firebase/FirebaseContext';

const useProduct = (order) => {
  const { firebase } = useContext(FirebaseContext);

  const [products, setProducts] = useState([]);

  // Cleanup component with a flag mounted variable
  useEffect(() => {
    let mounted = true;

    firebase.db
      .collection('products')
      .orderBy(order, 'desc')
      .onSnapshot((snapshot) => {
        const firebaseProducts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        if (mounted) {
          setProducts(firebaseProducts);
        }
      });

    // eslint-disable-next-line no-return-assign
    return () => (mounted = false);
  }, []);

  return { products };
};

export default useProduct;
