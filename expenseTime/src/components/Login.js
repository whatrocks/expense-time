import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput
} from 'react-native';

import TransactionsFeed from '../containers/TransactionsFeed';

class Login extends Component {
  
  goToFeed() {
    this.props.navigator.replace({
      component: TransactionsFeed
    });
  }

  signin() {
    
    var  { authenticateWithExpensify, userDetails, updateLoginInputText } = this.props; 

    // email: 'expensifytest@mailinator.com',
    // password: 'hire_me'

    // TODO: Add spinner to signal that its processing
    authenticateWithExpensify(userDetails, (res) => {

      if ( res.jsonCode === 200 ) {
        updateLoginInputText('email', '');
        updateLoginInputText('password', '');
        this.goToFeed();
      } else {
        console.log("ERROR");
        // TODO: Add error handling if incorrect login!
        // Reset the components?
        // Display the error message
      }
    });

  }

  handleInputChange(fieldName, event) {
    var { updateLoginInputText } = this.props;
    updateLoginInputText(fieldName, event.nativeEvent.text)
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.logo}> EXPENSE </Text>
        <Text style={styles.logo}> TIME </Text>
        <View style={styles.loginForm}>
          <TextInput
            style = {styles.textInput}
            defaultValue = {"Email"}
            onChange = { this.handleInputChange.bind(this, 'email') }
          />
          <TextInput
            style = {styles.textInput}
            defaultValue = {"Password"}
            secureTextEntry = {true}
            onChange = { this.handleInputChange.bind(this, 'password') }
          />
          <TouchableHighlight
            style = {styles.button}
            onPress = {this.signin.bind(this)}
            underlayColor='#2CA1DB'>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2CA1DB'
  },
  logo: {
    fontSize: 50,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  loginForm: {
    marginTop: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    width: 300,
    padding: 4,
    textAlign: 'center',
    marginBottom: 25,
    fontSize: 18,
    borderRadius: 5,
    color: '#414C52',
    fontWeight: 'bold',
    backgroundColor: 'white',
    alignSelf: 'center'
  },
  button: {
    width: 120,
    height: 50,
    borderRadius: 5,
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
