import { UPDATE_FEED } from '../constants/actions';

import api from '../utils/api';

export function updateFeed(authToken) {
  return dispatch => {
    return api.getTransactions(authToken)
      .then((res) => {
        dispatch(refreshFeedDataAction(res.transactionList));
    })
  }
};

export function refreshFeedDataAction(data) {
  return {
    type: UPDATE_FEED,
    data: data
  }
};
