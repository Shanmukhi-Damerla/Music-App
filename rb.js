import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert,ScrollView,TouchableOpacity, StatusBar } from 'react-native';
import { Image } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <StatusBar style="auto" />
    <Separator />
    <Text style={styles.kindsText}>Listen To Rhythm and Blues songs Now..!</Text>
    <Image
      style={{ height:175,width:400, alignSelf:"center" }}
      source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/rb1.jpg')}
         />
         
    <ScrollView>
    <View>
    <Separator />
      <Button
        title="song1"
        color='#9900CC'
        onPress={() => Alert.alert('song is playing')}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="song2"
        color="#EC407A"
        onPress={() => Alert.alert('song is playing')}
      />
    </View>
    <Separator />

    <View>
      <Button
        title="song3"
        color='#FF3333'
        onPress={() => Alert.alert('song is playing')}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="song4"
        color="#330099"
        onPress={() => Alert.alert('song is playing')}
      />
    </View>
    <Separator />

    <View>
      <Button
        title="song5"
        color='#9900CC'
        onPress={() => Alert.alert('song is playing')}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="song6"
        color="#EC407A"
        onPress={() => Alert.alert('song is playing')}
      />
    </View>
    <Separator />

    <View>
      <Button
        title="song7"
        color='#FF3333'
        onPress={() => Alert.alert('song is playing')}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="song8"
        color="#330099"
        onPress={() => Alert.alert('song is playing')}
      />
    </View>
    <Separator />

    <View>
      <Button
        title="song9"
        color='#9900CC'
        onPress={() => Alert.alert('song is playing')}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="song10"
        color="#EC407A"
        onPress={() => Alert.alert('song is playing')}
      />
    </View>
    <Separator />

    <View>
      <Button
        title="song11"
        color='#FF3333'
        onPress={() => Alert.alert('song is playing')}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="song12"
        color="#330099"
        onPress={() => Alert.alert('song is playing')}
      />
    </View>
    <Separator />

    <View>
      <Button
        title="song13"
        color='#9900CC'
        onPress={() => Alert.alert('song is playing')}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="song14"
        color="#EC407A"
        onPress={() => Alert.alert('song is playing')}
      />
    </View>
    <Separator />

    <View>
      <Button
        title="song15"
        color='#FF3333'
        onPress={() => Alert.alert('song is playing')}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="song16"
        color="#330099"
        onPress={() => Alert.alert('song is playing')}
      />
    </View>
    <Separator />

    <View>
      <Button
        title="song17"
        color='#9900CC'
        onPress={() => Alert.alert('song is playing')}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="song18"
        color="#EC407A"
        onPress={() => Alert.alert('song is playing')}
      />
    </View>
    <Separator />

    <View>
      <Button
        title="song19"
        color='#FF3333'
        onPress={() => Alert.alert('song is playing')}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="song20"
        color="#330099"
        onPress={() => Alert.alert('song is playing')}
      />
    </View>
    <Separator />
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
    fontWeight:'400',
    color:'#F48FB1',
    alignSelf:'center',
    fontWeight:'bold'
  },
});

export default App; 