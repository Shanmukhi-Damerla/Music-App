import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View,Button,TextInput,Alert,StatusBar} from 'react-native';
const Separator = () => (
  <View style={styles.separator} />
);

export default function App({navigation}) {
  return (
    
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Separator />
      <Image
      style={{ width: 120, height:120, margin:2, borderRadius:50}}
      source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/settings.png')}
         /> 
      

      <TouchableOpacity
        onPress={() => navigation.navigate("imagepicker")}
        style={{ backgroundColor: '#CE93D8',borderColor:'violet',borderRadius:20,borderWidth:1,width:200,alignItems:'center',justifyContent:"center",height:30,margin:5 }}>
        <Text style={{ fontSize:20, color: '#000' }}>Change Image</Text>
      </TouchableOpacity>

      <TextInput placeholder='Edit Your Name' placeholderTextColor="violet" style={{ height:50,width:300,
     borderColor: 'pink', borderWidth: 5,paddingLeft:10,margin:5,borderRadius:20,borderWidth:1,color:"violet", marginTop:30}} />
     <TextInput placeholder='Edit Emai id' placeholderTextColor="violet" style={{ height:50,width:300,
     borderColor: 'pink', borderWidth: 5,paddingLeft:10,margin:5,borderRadius:20,borderWidth:1,color:"violet"}} />
      <TextInput placeholder='Edit Mobile Number' placeholderTextColor="violet" style={{ height:50,width:300,
     borderColor: 'pink', borderWidth: 5,paddingLeft:10,margin:5,borderRadius:20,borderWidth:1,color:"violet"}} />
                <TextInput placeholder="Edit Password" 
                placeholderTextColor="violet"
            returnKeyType='go'
     secureTextEntry 
           autoCorrect={false}
           style={{ height: 50,width:300, borderColor: 'pink', borderWidth: 5,paddingLeft:10,margin:5,borderRadius:20,borderWidth:1,color:"violet", marginBottom:30 }}
           />

      <Button
        color="#EC407A"
        title="save" onPress={() => navigation.navigate("profilepage")} />
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //marginTop:25,
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  separator: {
    marginVertical: 10,
    borderBottomColor: 'pink',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});