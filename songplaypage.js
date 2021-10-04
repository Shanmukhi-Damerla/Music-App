import React from 'react';
import { Image, StyleSheet, View,Button,TextInput,Alert,TouchableOpacity,Text,StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Separator />
    <Image
      style={{marginBottom:40}}
      source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/LEZN.png')}
         /> 
         <Text style={styles.headingText}> Top 50 songs of the week </Text>
         
      <Image source={{ uri: 'https://images.unsplash.com/photo-1526413138270-8e3dedaecf19?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80' }} 
      style={styles.logo} />

<Text style={styles.songText}>Song (ALBUM)</Text>

      <Image
      style={{ width: 355, height:10,borderRadius:50}}
      source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/bar.gif')}
         /> 
      

      

      <View style={styles.leftContainer}>
    <View style={styles.rightContainer}>
    <TouchableOpacity activeOpacity={0.5}>
          <Image
            source={require('./assets/before.png')}
            style={styles.nextbeforeStyle}
          />
          </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <Image
            source={require('./assets/play.png')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} >
          <Image
            source={require('./assets/next.png')}
            style={styles.nextbeforeStyle}
          />
        </TouchableOpacity>
        </View>
        </View>
        <TouchableOpacity activeOpacity={0.5}>
        <Text style={styles.taglineText}>::: More :::</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5}>
        <Text style={styles.taglineText}>go back</Text>
        </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  logo: {
    width: 200,
    height: 200,
    margin: 20,
  },
  leftContainer: {
    flex: 0.5,
    //margin:1,
    flexDirection:"column",
    justifyContent: "center",
    //alignItems:'flex-start',
    
  },
  rightContainer: {
    flex: 0.5,
    //margin:1,
    flexDirection:"row",
    justifyContent:"center",
    //alignItems:'flex-end',
    
  },
  
  ImageIconStyle: {
    padding: 2,
    margin: 2,
  },
  nextbeforeStyle: {
    marginTop:12   
  },
  taglineText: {
    fontSize:18,
    fontWeight:'bold',
    color:'pink',
    paddingTop:30,
  },
  songText: {
    fontSize:15,
    fontWeight:'bold',
    color:'white',
   marginBottom:10
  },
  headingText: {
    fontSize:15,
    fontWeight:"bold",
    color:'#fff',
    borderRadius:10,
    alignContent:"center",
    alignSelf:"center",
    borderColor:"pink",
    padding:5,
    borderWidth:1,

  },
  
});