/*import React from 'react';
import { Image, StyleSheet, View,Button,TextInput,Alert,Text, StatusBar, TouchableOpacity } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { Linking} from 'react-native';
const Separator = () => (
  <View style={styles.separator} />
);

export default function App({navigation}) {
  return (
    <View style={styles.signincontainer}>
      <StatusBar style="auto" />
      <Separator />
      <Image
      style={{ width: 150, height:150,margin:20}}
      source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/signinimg.png')}
         />
      <TextInput placeholder='Enter Username' placeholderTextColor="violet" style={{ height:50,width:300,
     borderColor: 'pink', borderWidth: 5,paddingLeft:10,margin:10,borderRadius:20,borderWidth:1,color:"violet"}} />
     
                <TextInput placeholder="Password" 
                placeholderTextColor="violet"
            returnKeyType='go'
     secureTextEntry 
           autoCorrect={false}
           style={{ height: 50,width:300, borderColor: 'pink', borderWidth: 5,paddingLeft:10,margin:10,borderRadius:20,borderWidth:1,color:"violet" }}
           />
            <TouchableOpacity onPress={() => navigation.navigate("forgotpassword")}>
        <Text style={{ fontSize:20, color: 'violet', marginBottom:30}}>Forgot password?</Text>
      </TouchableOpacity>

      <Button
        color="#EC407A"
        title="Sign in" onPress={() => navigation.navigate("Home")}/>
        <Text style={{color:"grey", marginBottom:10, marginTop:30}}>----------------or signin with----------------</Text>

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
  signincpText:{
    
    fontSize:10,
    fontWeight:'bold',
    color:'grey',
    alignSelf:"center",
    marginBottom:2
  },
  signincontainer: {
   // marginTop:25,
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
 
  },
  signinheadingText: {
    fontSize:20,
    fontWeight:'bold',
    color:'white',
    padding:10,
    justifyContent: 'center',

  },
  signintaglineText: {
    fontSize:15,
    fontWeight:'bold',
    color:'violet',
    padding:10,
  },
  separator: {

    borderBottomColor: 'pink',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
*/


// components/login.js

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import firebase from '../database/firebase';


export default class Login extends Component {
  
  constructor() {
    super();
    this.state = { 
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

  userLogin = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signin!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        console.log(res)
        console.log('User logged-in successfully!')
        this.setState({
          isLoading: false,
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Dashboard')
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
          title="Signin"
          onPress={() => this.userLogin()}
        />   

        <Text 
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('Signup')}>
          Don't have account? Click here to signup
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
