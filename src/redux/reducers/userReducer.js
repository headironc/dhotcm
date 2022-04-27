import {
  GET_TOKEN_SUCCESS,
  LOGIN_START,
  LOGIN_SUCCESS,
} from "../constants/userConstants";

const INITIAL_STATE = {
  user: null,
  code: "",
  token: "",
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_START:
      return state;
    case LOGIN_SUCCESS:
      return { ...state, code: action.payload };
    case GET_TOKEN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    default:
      return state;
  }
}
