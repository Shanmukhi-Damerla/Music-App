import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert,ScrollView,TouchableOpacity,SectionList,StatusBar } from 'react-native';
import { Image } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <StatusBar style="auto" />
    <Separator />
    <Text style={styles.kindsText}>All Mp3 files</Text>
    <Image
      style={{ height:175, alignSelf:"center" }}
      source={require('./assets/songsbg.gif')}
         />
          <TouchableOpacity
        style={{ backgroundColor: 'white',borderRadius:20,alignItems:'center',marginBottom:10,marginTop:10,height:50,justifyContent:"center",padding:10,alignSelf:"center"}}>
        <Text style={{ fontSize:20, color: '#000' }}>Go back to Home Screen</Text>
      </TouchableOpacity>
    <ScrollView>
    <Text style={styles.sectionText}>Downloaded songs</Text>
    <View>
    <Separator />
      <Button
        title="file 1"
        color='#9900CC'
        onPress={() => Alert.alert('song is playing')}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="file 2"
        color="#EC407A"
        onPress={() => Alert.alert('song is playing')}
      />
    </View>
    <Separator />

    <View>
      <Button
        title="file 3"
        color='#9900CC'
        onPress={() => Alert.alert('song is playing')}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="file 4"
        color="#EC407A"
        onPress={() => Alert.alert('song is playing')}
      />
    </View>
    <Separator />

    <View>
      <Button
        title="file 5"
        color='#9900CC'
        onPress={() => Alert.alert('song is playing')}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="file 6"
        color="#EC407A"
        onPress={() => Alert.alert('song is playing')}
      />
    </View>
    <Separator />

    <View>
      <Button
        title="file 7"
        color='#9900CC'
        onPress={() => Alert.alert('song is playing')}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="file 8"
        color="#EC407A"
        onPress={() => Alert.alert('song is playing')}
      />
    </View>
    <Separator />

    <Text style={styles.sectionText}>Recordings</Text>
    <View>
    <Separator />
      <Button
        title="rec 1"
        color='#9900CC'
        onPress={() => Alert.alert('song is playing')}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="rec 2"
        color="#EC407A"
        onPress={() => Alert.alert('song is playing')}
      />
    </View>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
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
    marginVertical: 10,
    borderBottomColor: 'pink',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  kindsText:{
    
    fontSize:20,
    //fontWeight:'400',
    color:'#F48FB1',
    alignSelf:'center',
    fontWeight:'bold'
  },
  sectionText:{
    fontSize:20,
    fontWeight:"bold",
    color:'#fff',
    alignSelf:'center',
    alignContent:"center",
    borderColor:"pink",
    padding:5,
    borderWidth:1,

  }
});

export default App; 