import React, { Component } from 'react';
import { Alert, StyleSheet, Text, Pressable, View, Button, TextInput } from "react-native";
import { Actions } from 'react-native-router-flux';
import store from '../testStore'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
    
        store.subscribe(()=>{
          this.setState(store.getState());
          // console.log("subscribe store.getState:" + JSON.stringify(store.getState()));
          // console.log("subscribe this.state:" + JSON.stringify(this.state));
        });
        console.log("Login const state:" + JSON.stringify(this.state));
      }
    
      componentDidMount() {
        // console.log("componentDidMount store.getState:" + JSON.stringify(store.getState()));
        // console.log("componentDidMount state:" + JSON.stringify(this.state));
      }
    
      onPressLogout = () => {
        console.log("onPressLogout : Login Screen loginSuccess: " + this.state.loginSuccess)
        if (this.state.loginSuccess) {
          this.setState({loginSuccess:false});
        } else {
          alert("You are not login.");
        }
      }
    
      onPressLogin = async () => {
        
        console.log('pressing login... username:' + this.state.username);

        
        this.loginSuccess()
        
      }
      onPressLogout = () => {
        console.log("onPressLogout : Login Screen loginSuccess: " + this.state.loginSuccess)
        if (this.state.loginSuccess) {
          this.setState({loginSuccess:false});
        } else {
          alert("You are not login.");
        }
      }
      onChangeTextEmail = username => this.setState({ username });
      onChangeTextPassword = password => this.setState({ password });
    
      loginSuccess = () => {
        console.log('loginSucceess: prior to dispatch state:' + this.state.loginSuccess);
        store.dispatch({
          type: "LOGIN",
          payload: { username: this.state.username, password: this.state.password, loginSuccess: true  }
        });
        console.log('loginSucceess: after dispatch state:' + this.state.loginSuccess);
      };
    
      loginFailed = () => {
        console.warn('login failed ***');
        alert('Login failed. Please try again.');
      };
    
    render() {
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
     
            <View style={{ justifyContent: 'center', alignContent: 'center'}}>
            <Text style={styles.label}>UserName</Text>
            <TextInput
              style={styles.input}
              onChangeText={this.onChangeTextEmail}
              value={this.state.username}
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              onChangeText={this.onChangeTextPassword}
              value={this.state.password}
            />
            <View style={{justifyContent: 'center', alignContent: 'center', borderWidth: 1, borderColor: 'black', marginRight: 30, marginLeft: 30, padding: 10, marginTop: 20}}>
            <Pressable  onPress={this.onPressLogin}>
               <Text style={{fontSize: 20, textAlign: 'center' }}>Login</Text>
               </Pressable>
               </View>
            </View>
            
          </View>
      
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
export default Login;