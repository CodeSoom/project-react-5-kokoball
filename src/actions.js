import {
  postLogin,
} from './services/api';

export function changeLoginField({ name, value }) {
  return {
    type: 'changeLoginField',
    payload: { name, value },
  };
}

export function setAccessToken(accessToken) {
  return {
    type: 'setAccessToken',
    payload: { accessToken },
  };
}

export function requestLogin() {
  return async (dispatch, getState) => {
    const { loginFields: { email, password } } = getState();
    // try
    const accessToken = postLogin({ email, password });
    dispatch(setAccessToken(accessToken));
  };
}
