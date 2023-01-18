import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase-config";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  /* const [loading, setLoading] = useState(true); */

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOut = () => {
    return auth.signOut();
  };

  const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const getUser = () => {
    return auth.currentUser;
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      /* setLoading(false); */
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    getUser,
    login,
    signOut,
    signUp,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
