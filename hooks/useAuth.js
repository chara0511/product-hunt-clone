import { useState, useEffect } from 'react';
import firebase from '../firebase';

const useAuth = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unsuscribe = firebase.auth.onAuthStateChanged(async (user) => {
      if (user) {
        const currentUser = {
          uid: user.uid,
          displayName: user.displayName,
          photoURL:
            user.photoURL ||
            'https://res.cloudinary.com/dfvra50ch/image/upload/v1606514656/defaultUser_vm0sut.jpg',
          email: user.email,
        };

        setAuthUser(currentUser);
      } else {
        setAuthUser(null);
      }
    });

    return () => unsuscribe();
  }, []);

  return authUser;
};

export default useAuth;
