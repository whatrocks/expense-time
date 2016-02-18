import { STORE_TOKEN, UPDATE_LOGIN_INPUT_TEXT } from '../constants/actions';

var initialState = {
  token: 'init',
  userDetails: {}
};

function storeToken(state = initialState, action) {
  switch(action.type) {
    case STORE_TOKEN:
      return {
        ...state,
        token: action['token']
      };
    case UPDATE_LOGIN_INPUT_TEXT:
      return {
        ...state,
        userDetails: loginForm(state.userDetails, action)
      }
    default:
      return state;
  }
  return state;
};

function loginForm(state, action) {
  switch (action.type) {
    case UPDATE_LOGIN_INPUT_TEXT:
      let newVal = {};
      newVal[action.field] = action.text;
      return {
        ...state,
        ...newVal
      }
    default:
      return state;
  }
};

export default storeToken;
