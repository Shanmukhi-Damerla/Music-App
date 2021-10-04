/*import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View,Button,TextInput,Alert, StatusBar } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { Linking} from 'react-native';
const Separator = () => (
  <View style={styles.separator} />
);
export default function App({navigation}) {
  return (
    
    <View style={styles.signupcontainer}> 
     <StatusBar style="auto" />   
     <Separator />  
      <Image
      style={{ width: 100, height:100,margin:20, borderRadius:30}}
      source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/signupimg.png')}
         /> 
            <TextInput placeholder='Enter Your Name' placeholderTextColor="violet" style={{ height:50,width:300,
     borderColor: 'pink', borderWidth: 5,paddingLeft:10,margin:10,borderRadius:20,borderWidth:1}} />
     <TextInput placeholder='Enter Emai id/Phno' placeholderTextColor="violet" style={{ height:50,width:300,
     borderColor: 'pink', borderWidth: 5,paddingLeft:10,margin:10,borderRadius:20,borderWidth:1}} />
                <TextInput placeholder="Password" 
                placeholderTextColor="violet"
            returnKeyType='go'
     secureTextEntry 
           autoCorrect={false}
           style={{ height: 50,width:300, borderColor: 'pink', borderWidth: 5,paddingLeft:10,margin:10,borderRadius:20,borderWidth:1, marginBottom:30 }}
           />

      <Button
        color="#EC407A"
        title="signup" onPress={() => navigation.navigate("Home")}/>
        <Text style={{color:"grey", margin:20}}>----------------or signup with----------------</Text>

<View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
    }}>
    
      <SocialIcon
          type="facebook"
          onPress={() => {Linking.openURL('https://www.facebook.com/'); }}
        />

      <SocialIcon
          type="google"
          onPress={() => {Linking.openURL('https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin'); }}
        />

        <SocialIcon
          type="instagram"
          onPress={() => {Linking.openURL('https://www.instagram.com/'); }}
        />
        <SocialIcon
          type="pinterest"
          onPress={() => {Linking.openURL('https://in.pinterest.com/'); }}
        />
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  signupcontainer: {
    //marginTop:25,
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  signuptaglineText: {
    fontSize:15,
    fontWeight:'bold',
    color:'violet',
    padding:10,  
  },
  signupcpText:{
    fontSize:10,
    fontWeight:'bold',
    color:'grey',
    alignSelf:"center",
    marginBottom:2
  },
  separator: {

    borderBottomColor: 'pink',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
*/

// components/signup.js

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import firebase from '../database/firebase';


export default class Signup extends Component {
  
  constructor() {
    super();
    this.state = { 
      displayName: '',
      email: '', 
      password: '',
      isLoading: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  registerUser = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signup!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        res.user.updateProfile({
          displayName: this.state.displayName
        })
        console.log('User registered successfully!')
        this.setState({
          isLoading: false,
          displayName: '',
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Login')
      })
      .catch(error => this.setState({ errorMessage: error.message }))      
    }
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <View style={styles.container}>  
        <TextInput
          style={styles.inputStyle}
          placeholder="Name"
          value={this.state.displayName}
          onChangeText={(val) => this.updateInputVal(val, 'displayName')}
        />      
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />   
        <Button
          color="#3740FE"
          title="Signup"
          onPress={() => this.registerUser()}
        />

        <Text 
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('Login')}>
          Already Registered? Click here to login
        </Text>                          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});