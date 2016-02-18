import React, {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Component
} from 'react-native';

class TransactionsFeed extends Component {
  
  componentWillMount() {
    var { updateFeed, token } = this.props;
    updateFeed(token);
  }

  componentDidMount() {
    var { feed } = this.props;
  }

  render() {
    // TODO: Show loading indicator
    var currentFeed = this.props.feed.list || this.props.feed;
    var list = currentFeed
      .sort((a, b) => {
        return b.inserted.replace(/\D+/g,'')-a.inserted.replace(/\D+/g,'');
      })
      .map((item, index) => {
       return (
        <View key={index}>
          <Text>{item.inserted}</Text>
        </View>
      );
    });

    return (
      <ScrollView
        automaticallyAdjustContentInsets={false}
        scrollEventThrottle={200}
        style={styles.container}>
        {list}
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});

export default TransactionsFeed;
