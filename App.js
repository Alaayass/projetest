import React, { Component } from "react";
import { Alert, StyleSheet, Text, Pressable, View, Button, TextInput } from "react-native";
import store from './testStore'
import { Provider } from 'react-redux';
import { Router, Scene, Modal, Actions } from 'react-native-router-flux'
import PropTypes from 'prop-types'
import Login from './screens/Login'

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is the home screen</Text>
      <Button
      onPress={() => Actions.login()}

        title="Login With Email"
        
      />
    </View>
  );
}
function HomeScreen1() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is the logout modal</Text>
      <Text>{App.x}</Text>
      <Button
        
        title="Login out"
        onPress={App.onPressLogout}
      />
    </View>
  );
}







class App extends Component {
  constructor() {
    super();
    
    this.state = store.getState();  
      store.subscribe(()=>{
      this.setState(store.getState());
      // console.log("subscribe store.getState:" + JSON.stringify(store.getState()));
      console.log("App subscribe this.state:" + JSON.stringify(this.state));
    });

      }
      onPressLogout = () => {
        console.log("onPressLogout : Login Screen loginSuccess: " + this.state.loginSuccess)
        if (this.state.loginSuccess) {
          this.setState({loginSuccess:false});
        } else {
          alert("You are not login.");
        }
      }
      
  render () {
          
  return (
    <Provider store={store}>
    <Router>
    <Modal >
    <Scene key="home">
    
      <Scene key="screen1" initial={true} component={ this.state.loginSuccess ? HomeScreen1 : HomeScreen } hideNavBar={true}/>
  

    </Scene>
    <Scene key="login" component={Login} back={true}/>
  </Modal>
    </Router>
   </Provider>
  );
}
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 10,
    marginBottom: 30,
    borderWidth: 1,
    padding: 10,
  },
  label: {
    marginLeft: 30,
    fontSize: 20,
  },

});
App.propTypes = {
  loginSuccess: PropTypes.bool.isRequired,
}

export default App;