import React from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

var result;


export default function ImagePickerfunction() {


  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    result = pickerResult;
    console.log(result);
  }
  
  return (
    <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
      <Image source={{ uri: result }} style={{width:50, height:50}} />
      <Text style={{alignSelf:'center', textAlign:'center', margin:20, color:'red'}}>
        To share a photo from your phone with a friend, just press the button below!
      </Text>

      <TouchableOpacity onPress={openImagePickerAsync} >
        <Text style={{width:100, height:30, backgroundColor:'blue',
         color:'white', textAlign:'center', borderRadius:10}} >Take a photo</Text>
      </TouchableOpacity>
    </View>
  );
}