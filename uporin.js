import React from 'react';
import { Image, StyleSheet, View,Button,TextInput,Alert,Text,TouchableOpacity, StatusBar } from 'react-native';

export default function App({navigation}) {
  return (
    <View style={styles.container}>
        <Image
          style={{alignSelf:"center",margin:5}}
          source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/smalllogo.png')}
             />  
             <Text style={styles.taglineText}>HEART OF PERFECT MUSIC</Text>
          <TouchableOpacity 
          onPress={() => navigation.navigate("signin")}
            style={{ backgroundColor: '#EC407A',borderColor:'white',borderRadius:20,borderWidth:1,width:300,alignSelf:"center", alignItems:"center",margin:5,height:50,justifyContent:"center" }}>
            <Text style={{ fontSize:20, color: '#fff' }}>SIGN IN</Text>
          </TouchableOpacity>
          <Text style={{fontSize:20, color:"white", alignSelf:"center", marginTop:50,marginBottom:5}}>Don't have an account?</Text>
          <TouchableOpacity 
          onPress={() => navigation.navigate("signup")}
            style={{ backgroundColor: '#EC407A',borderColor:'white',borderRadius:20,borderWidth:1,width:300,alignItems:'center',alignSelf:"center",margin:5,height:50,justifyContent:"center" }}>
            <Text style={{ fontSize:20, color: '#fff' }}>SIGN UP</Text>
          </TouchableOpacity>
            <Text style={styles.cpText}>copywrites_______shanmukhidamerla {'\n'}For Enquiry Contact-PHN:1234567890</Text>
        </View>
  );
}

const styles = StyleSheet.create({
  cpText:{
    
    fontSize:10,
    fontWeight:'bold',
    color:'grey',
    alignSelf:"center",
    marginTop:20
  },
  container: {
    //marginTop:25,
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingText: {
    fontSize:20,
    fontWeight:'bold',
    color:'white',
    padding:20,
    justifyContent: 'center',

  },
  taglineText: {
    fontSize:15,
    fontWeight:'bold',
    color:'violet',
    padding:30,
  }
});