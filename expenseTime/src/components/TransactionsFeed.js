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
    console.log("I have mounted, and feed is now: ", feed);
  }

  render() {
    var feed  = [1,2,3];
    var list = feed.map((item, index) => {
    return (
        <View>
          <Text>HELLO</Text>
          <Text>WORLD</Text>
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
