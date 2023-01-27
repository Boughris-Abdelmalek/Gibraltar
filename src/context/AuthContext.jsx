import { createContext, useReducer, useEffect } from "react";
import { authReducer } from "../reducers/authReducer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase-config";

export const AuthContext = createContext();

const initialState = {
  user: null,
  authIsReady: false,
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  console.log(state);

  // This useEffect is for persisting the login
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch({ type: "AUTH_IS_READY", payload: user });
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
