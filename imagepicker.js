import * as React from 'react';
import { Button, Image, View, TouchableOpacity,Text, Alert, StatusBar,StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants'; 
import * as Permissions from 'expo-permissions';
const Separator = () => (
  <View style={ {
    marginVertical: 10,
    borderBottomColor: 'pink',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }} />
);
export default class ImagePickerExample extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent:"center", backgroundColor:"black" }}>
        <StatusBar style="auto" />
        <Separator />
        <Image
      source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/smalllogo.png')}
         /> 
        <TouchableOpacity onPress={this._pickImage}
        style={{ backgroundColor: '#EC407A',alignItems:'center',marginBottom:10,marginTop:20,height:30, width:250, borderRadius:50, justifyContent:"center" }}>
        <Text style={{ fontSize:20, color: '#fff' }}>Select Your Profile Picture</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, margin:10 }} />}

        <Button
        title="SAVE"
        color='#EC407A'
        onPress={() => Alert.alert('saved!')}
      />

      </View>
    );
  }

  componentDidMount() { 
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL); 
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({ 
        mediaTypes: ImagePicker.MediaTypeOptions.All,    
        allowsEditing: false,  
        aspect: [14, 13],  
        quality: undefined,

      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };
}