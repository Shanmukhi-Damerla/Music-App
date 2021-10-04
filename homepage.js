import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity,ScrollView, Text, StatusBar } from 'react-native';
const Separator = () => (
  <View style={styles.separator} />
);
const App = ({navigation}) => (
      <View style={styles.maincontainer}>
        <StatusBar style="auto" />
       <Image
      style={{margin:10, alignSelf:"center"}}
      source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/logo.png')}
         />  
         <Separator />
         <ScrollView>
         <Text style={{color:"white",fontSize:24,textAlign:"center"}}>Listen to top artists</Text>
     <ScrollView horizontal={true} >
        
        <View style={styles.rightContainer}>
        
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("songspage")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/artist1.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("songspage")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/artist2.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("songspage")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/artist3.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("songspage")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/artist4.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("songspage")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/artist5.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("moreartists")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/moresongs1.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        </View> 
        </ScrollView>  


        <Separator />
        <Text style={{color:"white",fontSize:24,textAlign:"center"}}>According to your mood</Text>
     <ScrollView horizontal={true} >

     <View style={styles.rightContainer}>
        
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("songspage")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/happy.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("songspage")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/love.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("songspage")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/celebrate.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("songspage")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/sad.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        </View> 
     </ScrollView>

     <Separator />
        <Text style={{color:"white",fontSize:24,textAlign:"center"}}>Your Daily Mixes</Text>
     <ScrollView horizontal={true} >

     <View style={styles.rightContainer}>
        
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("songspage")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/dm1.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("songspage")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/dm2.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("songspage")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/dm3.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("songspage")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/dm4.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        </View> 
     </ScrollView>

     <Separator />
        <Text style={{color:"white",fontSize:24,textAlign:"center"}}>OLD is GOLD</Text>
     <ScrollView horizontal={true} >

     <View style={styles.rightContainer}>
        
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("songspage")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/nine1.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity> 
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("songspage")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/nine2.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("songspage")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/nine3.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("songspage")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/nine4.jpg')}
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

     <Separator />
        <Text style={{color:"white",fontSize:24,textAlign:"center"}}>New Releases</Text>
     <ScrollView horizontal={true} >

     <View style={styles.rightContainer}>
        
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("songspage")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/rel1.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("songspage")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/rel2.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("songspage")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/rel3.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("songspage")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/rel4.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("morerel")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/morerel.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        </View> 
     </ScrollView>
        
     <Separator />
        <Text style={{color:"white",fontSize:24,textAlign:"center"}}>Listen to top 100 songs</Text>
     <ScrollView horizontal={true} >

     <View style={styles.rightContainer}>
        
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("songspage")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/hwsongs.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("songspage")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/twsongs.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("songspage")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/bwsongs.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("songspage")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/kwsongs.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("songspage")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/trwsongs.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("top100")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/moresongs2.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        </View> 
     </ScrollView>
        
     <Separator />
        <Text style={{color:"white",fontSize:24,textAlign:"center"}}>Devotional</Text>
     <ScrollView horizontal={true} >

     <View style={styles.rightContainer}>
        
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("devotional")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/god1.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("devotional")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/god2.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("devotional")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/god3.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("devotional")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/god4.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("devotional")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/god5.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("devotional")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/god6.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("devotional")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/god7.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("devotional")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/jesus.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("devotional")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/allah.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        </View> 
     </ScrollView>

     <Separator />
        <Text style={{color:"white",fontSize:24,textAlign:"center"}}>Top Poadcasts</Text>
     <ScrollView horizontal={true} >

     <View style={styles.rightContainer}>
        
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("morepod")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/pod1.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("morepod")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/pod2.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("morepod")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/pod3.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("morepod")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/morepod.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        </View> 
     </ScrollView>
     <Separator />
        </ScrollView>


</View>
    );



const styles = StyleSheet.create({

  maincontainer:{
    flex:1,
    backgroundColor:"black",
   // marginTop:25
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
 
  leftContainer: {
    flex: 1,
   // margin:1,
    flexDirection:"column",
    justifyContent: "center",
    //alignItems:'flex-start',
    
  },
  separator: {
    marginVertical: 10,
    borderBottomColor: 'pink',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  rightContainer: {
    flex: 1,
    //padding:1,
    margin:5,
    flexDirection:"row",
    justifyContent:"center",
    //alignItems:'flex-end',
    
  },
  
  ImageIconStyle: {
    padding: 2,
    margin: 2,
    height: 120,
    width: 120,
    borderRadius:10,
    borderColor:"white",
    borderWidth:0.5
  },
});

export default App; 