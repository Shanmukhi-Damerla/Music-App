import React from 'react';
import { Image, StyleSheet, View,Button,TextInput,Alert,Text, StatusBar, TouchableOpacity } from 'react-native';
const Separator = () => (
  <View style={styles.separator} />
);

export default function App({navigation}) {
  return (
    <View style={styles.signincontainer}>
      <StatusBar style="auto" />
      <Separator />
      <TextInput placeholder='Enter New Password' placeholderTextColor="violet" style={{ height:50,width:300,
     borderColor: 'pink', borderWidth: 5,paddingLeft:10,margin:20,borderRadius:20,borderWidth:1,color:"violet"}} />
     
                <TextInput placeholder="Confirm Password" 
                placeholderTextColor="violet"
            returnKeyType='go'
     secureTextEntry 
           autoCorrect={false}
           style={{ height: 50,width:300, borderColor: 'pink', borderWidth: 5,paddingLeft:10,margin:20,borderRadius:20,borderWidth:1,color:"violet" }}
           />
            
      <Button
        color="#EC407A"
        title="Reset" 
        onPress={() => Alert.alert('password reseted')}/>
        <TouchableOpacity onPress={() => navigation.navigate("signin")}>
        <Text style={{ fontSize:20, color: 'violet', margin:20}}>Sign in again</Text>
      </TouchableOpacity>
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
    justifyContent:"center"
 
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
