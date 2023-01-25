import { useReducer, useContext, createContext, useEffect } from "react";
import { AuthReducer, initialState } from "./Reducer";
import { setUser } from "./Actions";

const AuthStateContext = createContext(null);
const AuthDispatchContext = createContext(null);

export const useAuthState = () => {
  const context = useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error("useAuthState must be used within a AuthProvider");
  }

  return context;
};

export const useAuthDispatch = () => {
  const context = useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error("useAuthDispatch must be used within a AuthProvider");
  }

  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    const unsubscribe = setUser(dispatch);
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthStateContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};
