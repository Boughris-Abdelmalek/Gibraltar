import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../utils/firebase-config";

export const CREATE_USER = "CREATE_USER";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_ERROR = "CREATE_USER_ERROR";
export const SIGNIN_USER = "SIGNIN_USER";
export const SIGNIN_USER_SUCCESS = "SIGNIN_USER_SUCCESS";
export const SIGNIN_USER_ERROR = "SIGNIN_USER_ERROR";
export const SIGNOUT_USER = "SIGNOUT_USER";
export const SIGNOUT_USER_SUCCESS = "SIGNOUT_USER_SUCCESS";
export const SIGNOUT_USER_ERROR = "SIGNOUT_USER_ERROR";
export const SET_USER = "SET_USER";

export const createUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_USER });
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    dispatch({ type: CREATE_USER_SUCCESS, payload: user });
  } catch (error) {
    dispatch({ type: CREATE_USER_ERROR, payload: error });
  }
};

export const signIn = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: SIGNIN_USER });
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    dispatch({ type: SIGNIN_USER_SUCCESS, payload: user });
  } catch (error) {
    dispatch({ type: SIGNIN_USER_ERROR, payload: error });
  }
};

export const logout = () => (dispatch) => {
  try {
    dispatch({ type: SIGNOUT_USER });
    signOut(auth);
    dispatch({ type: SIGNOUT_USER_SUCCESS });
  } catch (error) {
    dispatch({ type: SIGNOUT_USER_ERROR, payload: error });
  }
};

export const setUser = (dispatch) => {
  return onAuthStateChanged(auth, (currentUser) => {
    console.log(currentUser);
    dispatch({ type: SET_USER, paload: currentUser });
  });
};
