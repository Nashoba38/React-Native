import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function PickImage() {
  const [selectedImage, setSelectedImage] = useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Nous avons besoin de votre permission pour accéder à votre galerie.');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
    setSelectedImage(pickerResult.uri);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Choisir une image</Text>
      </TouchableOpacity>
      <Image source={{ uri: selectedImage || 'https://i.imgur.com/sdbuBMp.png' }} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20
  },
  button: {
    backgroundColor: '#b3ffb3',
    padding: 20,
    marginBottom:10,
    borderRadius: 5,
  },
  buttonText: {
    textAlign:'center',
    fontSize: 20,
    color: 'black',
  },
});
