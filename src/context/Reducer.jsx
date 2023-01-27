import {
  ACTIONS
} from "./Actions";

export const initialState = {
  user: {},
  isLoading: false,
  error: null,
};

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CREATE_USER:
    case ACTIONS.SIGNIN_USER:
    case ACTIONS.SIGNOUT_USER:
      return {
        ...state,
        loading: true,
      };
    case ACTIONS.CREATE_USER_SUCCESS:
    case ACTIONS.SIGNIN_USER_SUCCESS:
    case ACTIONS.SET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
      };
    case ACTIONS.CREATE_USER_ERROR:
    case ACTIONS.SIGNIN_USER_ERROR:
    case ACTIONS.SIGNOUT_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ACTIONS.SIGNOUT_USER_SUCCESS:
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
