import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert,ScrollView,TouchableOpacity,StatusBar } from 'react-native';
import { Image } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const App = ({navigation}) => (
  <View style={styles.container}>
    
    <StatusBar style="auto" />
     <Image
      style={{marginTop:20,margin:1, alignSelf:"center"}}
      source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/LEZN.png')}
         /> 
    <Separator /> 
    <ScrollView> 
    
         
         <Text style={styles.kindsText}>Your Favourite Albums</Text>
         <Separator />  
     <ScrollView horizontal={true} >
        
        <View style={styles.rightContainer}>
        
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("songspage")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/album1.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("songspage")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/album3.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("songspage")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/album2.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.5} onPress={() => navigation.navigate("songspage")}>
          <Image
            source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/album4.jpg')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        </View> 
        </ScrollView>  
         
        <Separator />     
    
      <Text style={styles.kindsText}>Your Favourite Songs</Text>
    <View>
    <Separator />
    <TouchableOpacity activeOpacity={0.5} >
    <View style={styles.slc}>
    <View style={styles.src}>
      <View style={styles.src}>
        <TouchableOpacity activeOpacity={0.5} >
             <Image source={{ uri: 'https://laughingsquid.com/wp-content/uploads/mjbad.jpg' }} 
            style={styles.songIcon}
          />
        </TouchableOpacity>
        <Text style={styles.name}>Bad{"\n"}Michael Jackson</Text>
        </View>
        <TouchableOpacity activeOpacity={0.5} >
        <Text style={styles.opn}>play/pause</Text>
        </TouchableOpacity>
        </View>
        </View>
        </TouchableOpacity>
        <Separator />
    <TouchableOpacity activeOpacity={0.5} >
    <View style={styles.slc}>
    <View style={styles.src}>
      <View style={styles.src}>
        <TouchableOpacity activeOpacity={0.5} >
             <Image source={{ uri: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440' }} 
            style={styles.songIcon}
          />
        </TouchableOpacity>
        <Text style={styles.name}>Pain{"\n"}Ryan Jones</Text>
        </View>
        <TouchableOpacity activeOpacity={0.5} >
        <Text style={styles.opn}>play/pause</Text>
        </TouchableOpacity>
        </View>
        </View>
        </TouchableOpacity>
        <Separator />
    <TouchableOpacity activeOpacity={0.5} >
    <View style={styles.slc}>
    <View style={styles.src}>
      <View style={styles.src}>
        <TouchableOpacity activeOpacity={0.5} >
             <Image source={{ uri: 'https://i.pinimg.com/originals/9a/c5/67/9ac5671b9bf4f97de2535d24c8bfc603.jpg' }} 
            style={styles.songIcon}
          />
        </TouchableOpacity>
        <Text style={styles.name}>Believe{"\n"}Justin Beiber</Text>
        </View>
        <TouchableOpacity activeOpacity={0.5} >
        <Text style={styles.opn}>play/pause</Text>
        </TouchableOpacity>
        </View>
        </View>
        </TouchableOpacity>
        <Separator />
    <TouchableOpacity activeOpacity={0.5} >
    <View style={styles.slc}>
    <View style={styles.src}>
      <View style={styles.src}>
        <TouchableOpacity activeOpacity={0.5} >
             <Image source={{ uri: 'https://i1.sndcdn.com/artworks-000621918658-3xjrto-t500x500.jpg' }} 
            style={styles.songIcon}
          />
        </TouchableOpacity>
        <Text style={styles.name}>It's You{"\n"}Ali Gatie</Text>
        </View>
        <TouchableOpacity activeOpacity={0.5} >
        <Text style={styles.opn}>play/pause</Text>
        </TouchableOpacity>
        </View>
        </View>
        </TouchableOpacity>
<Separator />
<TouchableOpacity activeOpacity={0.5} >
    <View style={styles.slc}>
    <View style={styles.src}>
      <View style={styles.src}>
        <TouchableOpacity activeOpacity={0.5} >
             <Image source={{ uri: 'https://s3.amazonaws.com/NRNArt/Mackenzie-Nicole--The-Edge-album-cover.jpg' }} 
            style={styles.songIcon}
          />
        </TouchableOpacity>
        <Text style={styles.name}>The Edge{"\n"}Mackenzie Nicole</Text>
        </View>
        <TouchableOpacity activeOpacity={0.5} >
        <Text style={styles.opn}>play/pause</Text>
        </TouchableOpacity>
        </View>
        </View>
        </TouchableOpacity>
<Separator />
<TouchableOpacity activeOpacity={0.5} >
    <View style={styles.slc}>
    <View style={styles.src}>
      <View style={styles.src}>
        <TouchableOpacity activeOpacity={0.5} >
             <Image source={{ uri: 'https://cdn3.f-cdn.com/contestentries/1374688/7761232/5b5148f2d28d7_thumb900.jpg' }} 
            style={styles.songIcon}
          />
        </TouchableOpacity>
        <Text style={styles.name}>Say That Again{"\n"}DJ Snake</Text>
        </View>
        <TouchableOpacity activeOpacity={0.5} >
        <Text style={styles.opn}>play/pause</Text>
        </TouchableOpacity>
        </View>
        </View>
        </TouchableOpacity>
<Separator />
<TouchableOpacity activeOpacity={0.5} >
    <View style={styles.slc}>
    <View style={styles.src}>
      <View style={styles.src}>
        <TouchableOpacity activeOpacity={0.5} >
             <Image source={{ uri: 'https://i1.sndcdn.com/artworks-000503782755-t7avsp-t500x500.jpg' }} 
            style={styles.songIcon}
          />
        </TouchableOpacity>
        <Text style={styles.name}>Havana{"\n"}Camila Cabello</Text>
        </View>
        <TouchableOpacity activeOpacity={0.5} >
        <Text style={styles.opn}>play/pause</Text>
        </TouchableOpacity>
        </View>
        </View>
        </TouchableOpacity>
<Separator />
<TouchableOpacity activeOpacity={0.5} >
    <View style={styles.slc}>
    <View style={styles.src}>
      <View style={styles.src}>
        <TouchableOpacity activeOpacity={0.5} >
             <Image source={{ uri: 'https://i.pinimg.com/originals/a7/ff/b3/a7ffb3d9befc58e370856d4e3236169e.png' }} 
            style={styles.songIcon}
          />
        </TouchableOpacity>
        <Text style={styles.name}>For You{"\n"}Selena Gomez</Text>
        </View>
        <TouchableOpacity activeOpacity={0.5} >
        <Text style={styles.opn}>play/pause</Text>
        </TouchableOpacity>
        </View>
        </View>
        </TouchableOpacity>
<Separator />
<TouchableOpacity activeOpacity={0.5} >
    <View style={styles.slc}>
    <View style={styles.src}>
      <View style={styles.src}>
        <TouchableOpacity activeOpacity={0.5} >
             <Image source={{ uri: 'https://direct.rhapsody.com/imageserver/images/alb.418747083/500x500.jpg' }} 
            style={styles.songIcon}
          />
        </TouchableOpacity>
        <Text style={styles.name}>Make You Mine{"\n"}Public</Text>
        </View>
        <TouchableOpacity activeOpacity={0.5} >
        <Text style={styles.opn}>play/pause</Text>
        </TouchableOpacity>
        </View>
        </View>
        </TouchableOpacity>
<Separator />
<TouchableOpacity activeOpacity={0.5} >
    <View style={styles.slc}>
    <View style={styles.src}>
      <View style={styles.src}>
        <TouchableOpacity activeOpacity={0.5} >
             <Image source={{ uri: 'https://m.media-amazon.com/images/M/MV5BMGU5YTRjMTUtZDU4Mi00NjFlLWExYTAtMjVkN2JmOTE1Y2Q2XkEyXkFqcGdeQXVyNjE0ODc0MDc@._V1_.jpg' }} 
            style={styles.songIcon}
          />
        </TouchableOpacity>
        <Text style={styles.name}>Perfect{"\n"}ED Sheeran</Text>
        </View>
        <TouchableOpacity activeOpacity={0.5} >
        <Text style={styles.opn}>play/pause</Text>
        </TouchableOpacity>
        </View>
        </View>
        </TouchableOpacity>
<Separator />
    </View>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  slc: {
    flex: 1,
    //margin:1,
    flexDirection:"column",
    //justifyContent: "center",
    //alignItems:'flex-start',
    
  },
  src: {
    flex: 1,
    //margin:1,
    flexDirection:"row",
    //justifyContent:"center",
    alignItems:"center",
    
  },
  songIcon: {
    padding: 2,
    margin: 2,
    marginLeft:10,
    height: 70,
    width: 70,
    borderRadius:10,
    borderColor:"white",
    borderWidth:0.5
  },
  container: {
    flex:1,
    backgroundColor: 'black',
    justifyContent: 'center',
    //marginTop:25,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  separator: {
    marginVertical: 5,
    borderBottomColor: 'pink',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  kindsText:{
    margin:5,
    fontSize:15,
    fontWeight:'400',
    color:'#Fff',
    alignSelf:'center',
    fontWeight:'bold'
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
  name:{
    fontSize:15,
    //fontWeight:'bold',
    color:'#B0BEC5',
    padding:10,
    alignSelf:"center",
  },
  opn:{
    fontSize:18,
    fontWeight:'bold',
    color:'#EC407A',
    padding:10,
    marginRight:10,
    alignSelf:"auto",
    borderColor:"#EC407A",
    borderRadius:500,
    borderWidth:0.5
},
});

export default App; 