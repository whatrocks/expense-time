import { STORE_TOKEN } from '../constants/actions';

export function storeToken(token) {
  console.log("Storing token: ", token);
  return {
    type: STORE_TOKEN,
    'token': token
  };
};
