import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View,Button,TextInput,Alert, StatusBar } from 'react-native';

export default function App({navigation}) {
  return (
    
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
      style={{marginTop:20,margin:1, alignSelf:"center"}}
      source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/LEZN.png')}
         /> 
      <Text style={styles.taglineText}>HEART OF PERFECT MUSIC</Text>
      <Image
      style={{ width: 150, height:150, margin:1, borderRadius:50}}
      source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/settings.png')}
         /> 
      

     
      <Text style={{ fontSize:30, color: '#fff' }}>User Name</Text>
      <TouchableOpacity 
      onPress={() => navigation.navigate("settings")}
        style={{ backgroundColor: '#CE93D8',borderColor:'white',borderRadius:20,borderWidth:1,width:200,alignItems:'center',margin:5,height:30,justifyContent:"center" }}>
        <Text style={{ fontSize:20, color: '#000' }}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Alert.alert('This app is created by SHANMUKHI DAMERLA--2020')}
        style={{ backgroundColor: '#FB9C9C',borderColor:'white',borderRadius:20,borderWidth:1,width:200,alignItems:'center',margin:5,height:30,justifyContent:"center" }}>
        <Text style={{ fontSize:20, color: '#000' }}>About Us</Text>
      </TouchableOpacity>

      <TouchableOpacity  
      onPress={() => navigation.navigate("lang")}
        style={{ backgroundColor: '#CE93D8',borderColor:'white',borderRadius:20,borderWidth:1,width:200,alignItems:'center',margin:5,height:30,justifyContent:"center" }}>
        <Text style={{ fontSize:20, color: '#000' }}>Languages</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Alert.alert('notifications toggled.. if turned on-off.. if turned off-on')}
        style={{ backgroundColor: '#FB9C9C',borderColor:'white',borderRadius:20,borderWidth:1,width:200,alignItems:'center',margin:5,height:30,justifyContent:"center" }}>
        <Text style={{ fontSize:20, color: '#000' }}>Notifications</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Alert.alert('no devices connected')}
        style={{ backgroundColor: '#CE93D8',borderColor:'white',borderRadius:20,borderWidth:1,width:200,alignItems:'center',margin:5,height:30,justifyContent:"center" }}>
        <Text style={{ fontSize:20, color: '#000' }}>Devices connected</Text>
      </TouchableOpacity>

            <TouchableOpacity
        onPress={() => alert('**U r now a premium member**')}
        style={{ backgroundColor: '#FB9C9C',borderColor:'white',borderRadius:20,borderWidth:1,width:200,alignItems:'center',marginTop:5,marginBottom:18,height:30,justifyContent:"center" }}>
        <Text style={{ fontSize:18, color: '#000' }}>**Change to Premium**</Text>
      </TouchableOpacity>

      <Button
        color="#EC407A"
        
        title="log out" onPress={() => navigation.navigate("uporin")}/>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //marginTop:25,
    flex: 1,
    backgroundColor:"black",
    alignItems: 'center',
    //justifyContent: 'center',
  },
   

  taglineText: {
    fontSize:15,
    fontWeight:'bold',
    color:'white',
    paddingTop:15,
  },
});