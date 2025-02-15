import { useState, useContext, createContext } from 'react';
import { auth } from '../services/firebase';

const AuthContext = createContext<any>(null);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  const signInWithGoogle = async (tokenId: string) => {
    const credential = auth.GoogleAuthProvider.credential(tokenId);
    try {
      const result = await auth().signInWithCredential(credential);
      setUser(result.user);
    } catch (error) {
      console.error('Error signing in with Google:', error);
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
