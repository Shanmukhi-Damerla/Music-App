import React from 'react';
import { SearchBar } from 'react-native-elements';
import { StyleSheet, View, Image, TouchableOpacity,ScrollView,StatusBar, Text } from 'react-native';
const Separator = () => (
  <View style={styles.separator} />
);

export default function App({navigation}){

    return (
      <View style={styles.maincontainer}>
        <StatusBar style="auto" />
        <Image
      source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/bgsearch.png')}
         />  
        <SearchBar 
        placeholderTextColor="white"
          placeholder="Artists, Songs, or Podcasts..."
          containerStyle={{backgroundColor:"black"}}
      
    />
     <ScrollView>
    <View>
    <Text style={{ fontSize:25, color: '#fff',alignSelf:"center" }}>Recents</Text>
    <ScrollView horizontal={true} >
        
        <View style={styles.rightContainer}>
        
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("songspage")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/morepod.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("songspage")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/rel4.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("songspage")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/artist5.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("songspage")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/nine5.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        </View> 
        </ScrollView>  
        </View>    
       
     <Text style={{ fontSize:25, color: '#fff',alignSelf:"center" }}>Browse All</Text>
    <View style={styles.leftContainer}>
    <View style={styles.rightContainer}>
        <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("dubstep")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/dubstep.png')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("cm")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/cm.png')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        </View>
        </View>
        <View style={styles.leftContainer}>
        <View style={styles.rightContainer}>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("edm")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/edm.png')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("rb")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/rb.png')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        </View>
        </View>   
        <View style={styles.leftContainer}>
        <View style={styles.rightContainer}>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("electro")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/electro.png')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("indierock")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/indierock.png')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        </View>
        </View>  
        <View style={styles.leftContainer}>
        <View style={styles.rightContainer}>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("jazz")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/jazz.png')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("pm")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/pm.png')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        </View>
        </View> 
        <View style={styles.leftContainer}>
        <View style={styles.rightContainer}>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("techno")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/techno.png')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("rock")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/rock.png')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        </View>
        </View>  
        </ScrollView>         
</View>
    );
  }


const styles = StyleSheet.create({

  maincontainer:{
    flex:1,
    //marginTop:25,
    backgroundColor:"black"
  },

 
 
  leftContainer: {
    //flex: 1,
    //margin:1,
    flexDirection:"column",
    //justifyContent: "center",
    //alignItems:'flex-start',
    
  },
  rightContainer: {
    //flex: 0.5,
    //margin:1,
    flexDirection:"row",
    justifyContent:"space-evenly"
    //alignItems:'flex-end',
    
  },
  separator: {
    marginVertical: 5,
    borderBottomColor: 'pink',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  ImageIconStyle: {
    padding: 2,
    margin: 10,
   
    borderRadius:10,
    borderColor:"white",
    borderWidth:0.5
  },
  
});