import * as React from 'react';
import {View , Button, StyleSheet,Text,TextInput ,Image ,TouchableOpacity, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function Launch({ navigation }) {
  return (
    <View style={styles.container}> 
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
function uporin ({navigation}){
    return(
        <View style={styles.container}>
        <Image
          style={{alignSelf:"center",margin:5}}
          source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/smalllogo.png')}
             />  
             <Text style={styles.taglineText}>HEART OF PERFECT MUSIC</Text>
          <TouchableOpacity 
          onPress={() => navigation.navigate("Signin")}
            style={{ backgroundColor: '#EC407A',borderColor:'white',borderRadius:20,borderWidth:1,width:300,alignSelf:"center", alignItems:"center",margin:5,height:50,justifyContent:"center" }}>
            <Text style={{ fontSize:20, color: '#fff' }}>SIGN IN</Text>
          </TouchableOpacity>
          <Text style={{fontSize:20, color:"white", alignSelf:"center", marginTop:50,marginBottom:5}}>Don't have an account?</Text>
          <TouchableOpacity 
          onPress={() => navigation.navigate("Signup")}
            style={{ backgroundColor: '#EC407A',borderColor:'white',borderRadius:20,borderWidth:1,width:300,alignItems:'center',alignSelf:"center",margin:5,height:50,justifyContent:"center" }}>
            <Text style={{ fontSize:20, color: '#fff' }}>SIGN UP</Text>
          </TouchableOpacity>
            <Text style={styles.cpText}>copywrites_______shanmukhidamerla {'\n'}For Enquiry Contact-PHN:1234567890</Text>
        </View>
    );
}
function Signin() {
  return (
    <View style={styles.container}>
    <Image
      style={{alignSelf:"center",marginTop:5}}
      source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/smalllogo.png')}
         />  
      <Image
      style={{ width: 150, height:150,marginTop:50,marginBottom:10}}
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

      <Button
        color="#EC407A"
        title="login" onPress={() => Alert.alert('u r logged in!')} />
        <Text style={styles.taglineText}>HEART OF PERFECT MUSIC</Text>
        <Text style={styles.cpText}>copywrites_______shanmukhidamerla {'\n'}For Enquiry Contact-PHN:1234567890</Text>
    </View>   
  );
}
function Signup() {
  return (
    <View style={styles.container}>      
      <Image
      style={{alignSelf:"center",marginTop:5}}
      source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/smalllogo.png')}
         />  

      <Image
      style={{ width: 100, height:100, marginTop:30,marginBottom:10}}
      source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/signupimg.png')}
         /> 
      

      <TouchableOpacity
        onPress={() => alert('You can pick a photo from your mobile!')}
        style={{ backgroundColor: '#CE93D8',borderColor:'violet',borderRadius:20,borderWidth:1,width:200,alignItems:'center',height:30,justifyContent:"center" }}>
        <Text style={{ fontSize:18, color: '#000' }}>Select your own image!</Text>
      </TouchableOpacity>

      <TextInput placeholder='Enter Your Name' placeholderTextColor="violet" style={{ height:50,width:300,
     borderColor: 'pink', borderWidth: 5,paddingLeft:10,margin:10,borderRadius:20,borderWidth:1}} />
     <TextInput placeholder='Enter Emai id/Phno' placeholderTextColor="violet" style={{ height:50,width:300,
     borderColor: 'pink', borderWidth: 5,paddingLeft:10,margin:10,borderRadius:20,borderWidth:1}} />
                <TextInput placeholder="Password" 
                placeholderTextColor="violet"
            returnKeyType='go'
     secureTextEntry 
           autoCorrect={false}
           style={{ height: 50,width:300, borderColor: 'pink', borderWidth: 5,paddingLeft:10,margin:10,borderRadius:20,borderWidth:1 }}
           />

      <Button
        color="#EC407A"
        title="signup" onPress={() => Alert.alert('u r signed up!')} />
        <Text style={styles.taglineText}>HEART OF PERFECT MUSIC</Text>
        <Text style={styles.cpText}>copywrites_______shanmukhidamerla {'\n'}For Enquiry Contact-PHN:1234567890</Text>
    </View>
    
  );
}
const Stack = createStackNavigator();
      function App() {
        return (
          <NavigationContainer>
            <Stack.Navigator >
              <Stack.Screen options={{headerShown: false}} name="Launch" component={Launch} />
              <Stack.Screen options={{headerShown: false}}name="uporin" component={uporin} />
              <Stack.Screen options={{headerShown: false}} name="Signin" component={Signin} />
              <Stack.Screen options={{headerShown: false}}name="Signup" component={Signup} />
            </Stack.Navigator>
          </NavigationContainer>
        );
      }
const styles = StyleSheet.create({
  
    container: {
        flex:1,
        backgroundColor: 'black',
        marginTop:30,
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
      container: {
        marginTop:25,
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
      },
      taglineText: {
        fontSize:15,
        fontWeight:'bold',
        color:'violet',
        padding:30,
      },
      cpText:{
        fontSize:10,
        fontWeight:'bold',
        color:'grey',
        alignSelf:"center",
        marginTop:12
      },

});
export default App;





