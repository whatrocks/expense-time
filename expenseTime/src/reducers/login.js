import { STORE_TOKEN } from '../constants/actions';

var initialState = {
  token: 'init',
};

function storeToken(state = initialState, action) {
  switch(action.type) {
    case STORE_TOKEN:
      return {
        ...state,
        token: action['token']
      };
    default:
      return state;
  }
  return state;
};

export default storeToken;
