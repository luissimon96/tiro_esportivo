import React, { createContext, useContext, useState } from 'react';
import { auth } from '../services/firebase';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<auth.User | null>(null);

  const signInWithGoogle = async () => {
    const provider = new auth.GoogleAuthProvider();
    try {
      const result = await auth().signInWithPopup(provider);
      setUser(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value= {{ user, signInWithGoogle }
}>
  { children }
  </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
