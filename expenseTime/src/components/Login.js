import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class Login extends Component {
  
  signin() {
    console.log("I'm signing in!!!");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}> EXPENSE </Text>
        <Text style={styles.logo}> TIME </Text>
        <TouchableHighlight
          style = {styles.button}
          onPress = {this.signin.bind(this)}
          underlayColor='#55BCFF'>
          <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#55BCFF'
  },
  logo: {
    fontSize: 50,
    textAlign: 'center',
    color: '#DD2524',
    fontWeight: 'bold',
  },
  button: {
    width: 120,
    height: 50,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: '#00D3A3',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 22,
    alignSelf: 'center',
  }
});

export default Login;
