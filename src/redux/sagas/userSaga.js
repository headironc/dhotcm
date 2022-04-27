import Taro from "@tarojs/taro";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { LOGIN_START, LOGIN_SUCCESS } from "../constants/userConstants";
import { getTokenSuccess, loginSuccess } from "../actions/userAction";
import api from "../../../api";

export function* login() {
  try {
    const { code } = yield call(Taro.login);
    yield put(loginSuccess(code));
  } catch (e) {
    console.log(e);
  }
}

export function* getToken({ payload }) {
  try {
    const { data } = yield call(Taro.request, {
      url: api.token,
      method: "GET",
      data: {
        code: payload,
      },
    });
    const { token, user } = data;
    yield put(getTokenSuccess({ token, user }));
  } catch (e) {
    console.log(e);
  }
}

export function* onLoginStart() {
  yield takeLatest(LOGIN_START, login);
}

export function* onLoginSuccess() {
  yield takeLatest(LOGIN_SUCCESS, getToken);
}

export default function* userSaga() {
  yield all([call(onLoginStart), call(onLoginSuccess)]);
}
