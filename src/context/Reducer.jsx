import {
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  SIGNIN_USER,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_ERROR,
  SIGNOUT_USER,
  SIGNOUT_USER_SUCCESS,
  SIGNOUT_USER_ERROR,
  SET_USER
} from "./Actions";

export const initialState = {
  user: {},
  isLoading: false,
  error: null,
};

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case CREATE_USER:
    case SIGNIN_USER:
    case SIGNOUT_USER:
      return {
        ...state,
        loading: true,
      };
    case CREATE_USER_SUCCESS:
    case SIGNIN_USER_SUCCESS:
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
      };
    case CREATE_USER_ERROR:
    case SIGNIN_USER_ERROR:
    case SIGNOUT_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SIGNOUT_USER_SUCCESS:
      return {
        ...state,
        user: null,
        loading: false,
        error: null,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
