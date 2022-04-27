import {
  GET_TOKEN_SUCCESS,
  LOGIN_START,
  LOGIN_SUCCESS,
} from "../constants/userConstants";

export const loginStart = () => ({
  type: LOGIN_START,
});

export const loginSuccess = (code) => ({
  type: LOGIN_SUCCESS,
  payload: code,
});

export const getTokenSuccess = ({ token, user }) => ({
  type: GET_TOKEN_SUCCESS,
  payload: { token, user },
});
