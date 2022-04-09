import { postRequest } from '../../fetch/index';
import url from '../../fetch/urls';

export const signUp = (values) => {
  return (dispatch) => {
    postRequest(url.signup, values)
      .then((token) => {
        localStorage.setItem('token', token.data);
        dispatch({
          type: 'SIGN_UP',
          token: token.data,
        });
      })
      .catch((error) => console.log(error.response));
  };
};

export const login = (value) => {
  return (dispatch) => {
    postRequest(url.login, value)
      .then((token) => {
        localStorage.setItem('token', token.data);
        dispatch({
          type: 'LOGIN',
          token: token.data,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const loadUser = () => {
  return (dispatch, getState) => {
    const token = getState().auth.token;
    if (token) {
      dispatch({
        type: 'USER_LOADED',
        token,
      });
    } else {
      return null;
    }
  };
};
