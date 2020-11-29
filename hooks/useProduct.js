import { useState, useEffect, useContext } from 'react';
import FirebaseContext from '../context/firebase/FirebaseContext';

const useProduct = (order) => {
  const { firebase } = useContext(FirebaseContext);

  const [products, setProducts] = useState([]);

  // Cleanup component
  useEffect(() => {
    firebase.db
      .collection('products')
      .orderBy(order, 'desc')
      .onSnapshot((snapshot) => {
        const firebaseProducts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(firebaseProducts);
      });
  }, []);

  return { products };
};

export default useProduct;
