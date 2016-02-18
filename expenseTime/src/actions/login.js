import { STORE_TOKEN, UPDATE_LOGIN_INPUT_TEXT } from '../constants/actions';
import api from '../utils/api';

export function updateLoginInputText(field, text) {
  return {
    type: UPDATE_LOGIN_INPUT_TEXT,
    field,
    text
  };
};

export function authenticateWithExpensify(userDetails, cb) {
  return dispatch => {
    return api.authExpensify(userDetails)
      .then((res) => {
        if (res.jsonCode === 200) {
          dispatch(storeToken(res.authToken));
        }
        cb(res);
    });
  }
};

export function storeToken(token) {
  console.log("Storing token: ", token);
  return {
    type: STORE_TOKEN,
    'token': token
  };
};
