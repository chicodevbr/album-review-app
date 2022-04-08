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
