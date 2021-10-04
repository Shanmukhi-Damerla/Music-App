import React, { Component } from 'react'  
import {StyleSheet,View, Text,Picker,Image,Button, Alert, StatusBar} from 'react-native'  
const Separator = () => (
    <View style={styles.separator} />
  );
export default class PickerExample extends Component {  
    state = {  
        choosenIndex: 0  
    };  
  
    render() {  
        return (  
            <View style={styles.container}>  
            <StatusBar style="auto" />
            <Separator />
            <Image
      
      source={require('C:/Users/DELL/Desktop/reactnative/musicapp/assets/smalllogo.png')}
         /> 
     
                <Text style={styles.textStyle}>Select Your Language</Text>  
                <Picker style={styles.pickerStyle}  
                        selectedValue={this.state.language}  
                        onValueChange={(itemValue) =>  
                            this.setState({language: itemValue})}  
                    >  
                    <Picker.Item label="English" value="English" />  
                    <Picker.Item label="Telugu" value="Telugu" />  
                    <Picker.Item label="Hindi" value="Hindi" />  
                    <Picker.Item label="Malyalam" value="Malyalam" />
                    <Picker.Item label="Tamil" value="Tamil" />
                    
                </Picker>  
                <Button
        color="#EC407A"
        
        title="Save" onPress={() => Alert.alert('saved')} />
            </View>  
        );  
    }  
}  
const styles = StyleSheet.create ({  
     container: {
       backgroundColor:"black",  
         flex: 1,  
         alignItems: 'center',  
         justifyContent: 'center',
        // marginTop:25,  
     },  
    textStyle:{  
        margin: 50,  
        fontSize: 25,  
        fontWeight: 'bold',  
        textAlign: 'center',  
        color:"#EC407A",
    },  
    pickerStyle:{  
        height: 50,  
        width: "50%",  
        color: '#EC407A',  
        justifyContent: 'center',
        alignSelf:"center",
        marginBottom:10,
         
    },
    separator: {
        marginVertical: 10,
        borderBottomColor: 'pink',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
    
})  
