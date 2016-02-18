import React, {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Component,
  Image
} from 'react-native';

class TransactionsFeed extends Component {
  
  componentWillMount() {
    var { updateFeed, token } = this.props;
    updateFeed(token);
    console.log("status:", this.props.navigator.navigationBarHidden);
  }

  componentDidMount() {
    var { feed } = this.props;
  }

  renderDate(date) {
    
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    var day = date.slice(8,10);
    var month = months[ parseInt(date.slice(5,7)) - 1 ];
    var year = date.slice(0,4);

    return (
      <View style={styles.dateRow}>
        <Text>{day} </Text>
        <Text>{month} </Text>
        <Text>{year}</Text>
      </View>
    );
  }

  renderMerchant(merchant) {
    if ( merchant.length > 20 ) {
      merchant = merchant.slice(0,20) + '...';
    }
    return (
      <Text style={styles.merchant}>{merchant}</Text>
    );
  }

  renderAmount(currency, amount) {

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    if ( amount < 0 ) {
      amount = '(' + numberWithCommas(JSON.stringify(amount).slice(1)) + ')';
      return (
        <View style={styles.currencyRow}>
          <Text>{currency} </Text>
          <Text style={styles.negativeAmount}>{amount}</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.currencyRow}>
          <Text>{currency} </Text>
          <Text style={styles.positiveAmount}>{ numberWithCommas(amount) }</Text>
        </View>
      );
    }

  }

  render() {

    {
      if ( !this.props.feed.list ) {
        return (
          <View style={styles.container}>
            <Text style={styles.message}>LOADING</Text>
            <Image
              style = {styles.image}
              source = {require('../assets/finn.png')}
            />
            <Text style={styles.quote}>Roll the dice, you pay the price.</Text>
          </View>
        );

      } else {

        // TODO: Show loading indicator
        // TODO: Remove the slice with lazy loading
        var currentFeed = this.props.feed.list || this.props.feed;
        var list = currentFeed
          .sort((a, b) => {
            return b.inserted.replace(/\D+/g,'')-a.inserted.replace(/\D+/g,'');
          })
          .slice(0, 20)
          .map((item, index) => {
           return (
            <View key={index} style={styles.row}>
              {this.renderDate(item.inserted)}
              {this.renderMerchant(item.merchant)}
              {this.renderAmount(item.currency, item.amount)}
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
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 40
  }, 
  image: {
    height: 325,
    width: 210,
    marginTop: 30,
    marginBottom: 30,
    alignSelf: 'center'
  },
  message: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 60,
    alignSelf: 'center',
    color: '#00D3A3',
    marginTop: 30
  },
  quote: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
    alignSelf: 'center',
    color: '#414C52'
  },
  row: {
    height: 50,
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: 'row',
    borderColor: '#414C52',
    borderBottomWidth: 0.25,
  },
  dateRow: {
    marginLeft: 10,
    alignSelf: 'center',
    flexDirection: 'row'
  },
  merchant: {
    marginLeft: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    flex: 1
  },
  currencyRow: {
    marginLeft: 20,
    flexDirection: 'row',
    alignSelf: 'center',
    width: 100
  },
  negativeAmount: {
    color: '#FF8161'
  },
  positiveAmount: {
    color: '#00D3A3'
  }
});

export default TransactionsFeed;
