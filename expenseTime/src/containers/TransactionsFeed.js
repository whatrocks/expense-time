import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TransactionsFeed from '../components/TransactionsFeed';
import * as TransactionsFeedActions from '../actions/feed';

function mapStateToProps(state) {
  return {
    token: state.login.token,
    feed: state.feed.list
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TransactionsFeedActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsFeed);
