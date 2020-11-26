import { useState, useEffect, useContext } from 'react';
import FirebaseContext from '../context/firebase/FirebaseContext';

const useProduct = (order) => {
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
    firebase.db.collection('products').orderBy(order, 'desc').onSnapshot(handleSnapshot);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return { products };
};

export default useProduct;
