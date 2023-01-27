import { useReducer, useContext, createContext, useEffect } from "react";
import { AuthReducer, initialState } from "./Reducer";
import { ACTIONS } from "./Actions";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../utils/firebase-config";

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

  const createUser = (email, password) => async (dispatch) => {
    try {
      dispatch({ type: ACTIONS.CREATE_USER });
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch({ type: ACTIONS.CREATE_USER_SUCCESS, payload: user });
    } catch (error) {
      dispatch({ type: ACTIONS.CREATE_USER_ERROR, payload: error });
    }
  };

  const signIn = (email, password) => async () => {
    try {
      dispatch({ type: ACTIONS.SIGNIN_USER });
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      dispatch({ type: ACTIONS.SIGNIN_USER_SUCCESS, payload: user });
    } catch (error) {
      dispatch({ type: ACTIONS.SIGNIN_USER_ERROR, payload: error });
    }
  };
  
  const logout = () => (dispatch) => {
    try {
      dispatch({ type: ACTIONS.SIGNOUT_USER });
      signOut(auth);
      dispatch({ type: ACTIONS.SIGNOUT_USER_SUCCESS });
    } catch (error) {
      dispatch({ type: ACTIONS.SIGNOUT_USER_ERROR, payload: error });
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      dispatch({ type: ACTIONS.SET_USER, payload: currentUser });
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  const value = {
    user,
    createUser,
    signIn,
    logout,
  };

  return (
    <AuthStateContext.Provider value={value}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};
