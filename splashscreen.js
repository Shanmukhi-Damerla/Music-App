import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';


export default function App({navigation}){
  return (
    <View style={styles.container}> 
    <StatusBar style="auto" />
    <Image
    style={{margin:5,alignSelf:"center"}}
    source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/LEZN.png')}
       />  
    <Text style={styles.launchtaglineText}>HEART OF PERFECT MUSIC</Text>   
    
       <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("uporin")}>
       <Image
         source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/next1.gif')}
         style={{marginTop:100,alignSelf:"center"}}
       />
       </TouchableOpacity>
</View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'black',
    //marginTop:30,
    padding:5,
    justifyContent:"center"
  },
  launchtaglineText: {
    fontSize:20,
    fontWeight:'bold',
    color:'white',
    padding:10,
    alignSelf:"center",
    
    
  },
 
  
});
